/*
  Photographs in, and the blur-up data for every image on the site.

  Run with:  npm run placeholders

  Three jobs, in order:

  1. Anything sitting in the FIX folder gets brought in. Drop the photographs
     there using the file names listed in FIX/PROMPTS.md, in any of jpg, png or
     webp, at any size. They are resized down to 1600px on the long edge,
     stripped of camera data and saved as JPEG into public/, replacing whatever
     was there. Then delete them from FIX, or leave them, it makes no
     difference on the next run.

  2. Any garment still without a photograph gets a woven colour block. Any
     Worn by you photograph still missing gets a catalogue image copied into
     its place, so the pitch remains complete until the demo images arrive.

  3. Every image gets a tiny 12px version encoded into data/blur-map.ts. That
     is what shows for the fraction of a second before the full photograph
     arrives, so the page never flashes empty.
*/

import { mkdir, readFile, readdir, writeFile, access, rm } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const productsDir = path.join(root, 'public', 'products');
const featuresDir = path.join(root, 'public', 'features');
const fixDir = path.join(root, 'FIX');

/** Longest edge, in pixels, that any photograph is stored at. Beyond this the
    extra detail is never seen: next/image only ever asks for smaller. */
const MAX_EDGE = 2000;

/* Fabric colours, dulled down. These stand in for the photographs, so they are
   deliberately quiet: a flat block of cloth, not a swatch from a palette. */
const cloth = {
  'mehr-anarkali': [92, 40, 48],
  'noor-salwar-suit': [158, 122, 62],
  'bageecha-kurti': [126, 134, 111],
  'zarina-gown': [46, 54, 74],
  'raat-rani-indo-western': [66, 63, 62],
  'kanchipuram-saree': [152, 118, 44],
  'sarson-sharara': [166, 137, 55],
  'sitara-lehenga': [62, 82, 68],
  'chikankari-kurta-set': [214, 205, 186],
  'ajrakh-saree': [46, 62, 92],
  'meena-jacket-set': [32, 74, 78],
  'roshan-palazzo-set': [166, 126, 122],
  hero: [104, 52, 58],
  interior: [122, 108, 92],
};

/** Deterministic noise, so re-running produces byte-identical files. */
function rand(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** A flat cloth field: fine weave, a little grain, a soft fall-off at the edges. */
async function weave(file, [r, g, b], width, height, seed) {
  const next = rand(seed);
  const buf = Buffer.allocUnsafe(width * height * 3);
  const cx = width / 2;
  const cy = height / 2;
  const maxD = Math.hypot(cx, cy);

  for (let y = 0; y < height; y++) {
    const weft = Math.sin(y * 0.9) * 2.2;
    for (let x = 0; x < width; x++) {
      const warp = Math.sin(x * 0.9) * 2.2;
      const grain = (next() - 0.5) * 7;
      const falloff = 1 - 0.14 * (Math.hypot(x - cx, y - cy) / maxD) ** 2.2;
      const shade = weft + warp + grain;
      const i = (y * width + x) * 3;
      buf[i] = Math.max(0, Math.min(255, (r + shade) * falloff));
      buf[i + 1] = Math.max(0, Math.min(255, (g + shade) * falloff));
      buf[i + 2] = Math.max(0, Math.min(255, (b + shade) * falloff));
    }
  }

  await sharp(buf, { raw: { width, height, channels: 3 } })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(file);
}

const exists = (p) => access(p).then(() => true, () => false);

// Read the image paths straight out of the garment list, so the two never drift.
const source = await readFile(path.join(root, 'data', 'products.ts'), 'utf8');
const imagePaths = [...source.matchAll(/'(\/products\/[^']+)'/g)].map((m) => m[1]);

const featureSource = await readFile(path.join(root, 'data', 'features.ts'), 'utf8');
const featurePaths = [...featureSource.matchAll(/image: '(\/features\/[^']+)'/g)].map((m) => m[1]);
const featureFallbacks = [...featureSource.matchAll(/fallbackImage: '(\/products\/[^']+)'/g)].map(
  (m) => m[1],
);

if (featurePaths.length !== featureFallbacks.length) {
  throw new Error('Every Worn by you image needs one fallbackImage in data/features.ts.');
}

await mkdir(productsDir, { recursive: true });
await mkdir(featuresDir, { recursive: true });

/* ---- 1. bring in whatever is waiting in FIX ---------------------------- */

/** Every file name the site knows what to do with, without its extension. */
const wanted = new Map(
  [...imagePaths, ...featurePaths, '/hero.jpg', '/interior.jpg', '/og.jpg'].map((src) => [
    path.basename(src, '.jpg'),
    src,
  ]),
);

const dropped = await readdir(fixDir).catch(() => []);
let brought = 0;
const unknown = [];

for (const file of dropped) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) continue;

  const target = wanted.get(path.basename(file, ext));
  if (!target) {
    unknown.push(file);
    continue;
  }

  await sharp(path.join(fixDir, file))
    .rotate() // honour the camera's orientation flag before it is stripped
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(path.join(root, 'public', target));
  brought++;
}

if (unknown.length) {
  console.log(
    `Not used, the name does not match anything on the site:\n  ${unknown.join('\n  ')}\n` +
      `Check the file names in FIX/PROMPTS.md.\n`,
  );
}

/* ---- 2. generate anything still missing -------------------------------- */

/* Shot 1 is the whole garment, portrait. Shot 2 is a close crop, squarer. */
const shotSize = (n) => (n === 2 ? [1200, 1200] : [1200, 1500]);

let made = 0;
for (const src of imagePaths) {
  const file = path.join(root, 'public', src);
  if (await exists(file)) continue;
  const [, slug, shot] = src.match(/\/products\/(.+)-(\d+)\.jpg$/) ?? [];
  const n = Number(shot);
  const base = cloth[slug] ?? [120, 110, 100];
  const [w, h] = shotSize(n);
  // Detail shots sit a shade lighter, the way a closer crop usually does.
  const tint = base.map((c) => Math.min(255, c + (n - 1) * 9));
  await weave(file, tint, w, h, slug.length * 977 + n * 31);
  made++;
}

for (const [i, src] of featurePaths.entries()) {
  const file = path.join(root, 'public', src);
  if (await exists(file)) continue;

  await sharp(path.join(root, 'public', featureFallbacks[i]))
    .resize({ width: 1200, height: 1500, fit: 'cover' })
    .jpeg({ quality: 85, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(file);
  made++;
}

for (const [name, w, h] of [
  ['hero.jpg', 1600, 2000],
  ['interior.jpg', 1600, 1200],
]) {
  const file = path.join(root, 'public', name);
  if (await exists(file)) continue;
  await weave(file, cloth[name.replace('.jpg', '')], w, h, name.length * 613);
  made++;
}

/* ---- 2b. the share picture --------------------------------------------
   This is the image WhatsApp and Instagram show when someone forwards a link
   to the site. Delete public/og.jpg and run again to rebuild it. */

const ogFile = path.join(root, 'public', 'og.jpg');
if (!(await exists(ogFile))) {
  const field = path.join(root, 'public', '.og-field.jpg');
  await weave(field, [233, 232, 227], 1200, 630, 4211);
  const label = Buffer.from(
    `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
       <text x="90" y="330" font-family="Georgia, serif" font-size="132"
             fill="#16181a">Fida</text>
       <text x="96" y="392" font-family="Georgia, serif" font-size="30"
             fill="#2b3a67">Ethnic wear, stitched to your measurements</text>
       <text x="96" y="446" font-family="Georgia, serif" font-size="26"
             fill="#5f6469">Jubilee Hills, Hyderabad</text>
     </svg>`,
  );
  await sharp(field)
    .composite([{ input: label, top: 0, left: 0 }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(ogFile);
  await rm(field);
  made++;
}

/* ---- 3. blur-up data for everything ------------------------------------ */

const sources = [...imagePaths, ...featurePaths, '/hero.jpg', '/interior.jpg'];

const entries = [];
for (const src of sources) {
  const file = path.join(root, 'public', src);
  if (!(await exists(file))) continue;
  const tiny = await sharp(file).resize(12).jpeg({ quality: 40 }).toBuffer();
  entries.push(`  '${src}': 'data:image/jpeg;base64,${tiny.toString('base64')}',`);
}

await writeFile(
  path.join(root, 'data', 'blur-map.ts'),
  [
    '/* Generated by scripts/generate-images.mjs. Do not edit by hand.',
    '   Run `npm run placeholders` after adding or replacing a photograph. */',
    '',
    'export const blurMap: Record<string, string> = {',
    ...entries,
    '};',
    '',
  ].join('\n'),
);

console.log(
  `${brought} photograph(s) brought in from FIX, ` +
    `${made} placeholder(s) generated, ${entries.length} blur previews written.`,
);
