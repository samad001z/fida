# Photographs for the Fida site

Forty-five images. Generate them, drop them **flat into this folder** (no
sub-folders), then from `C:\fida` run:

```
npm run placeholders
```

That resizes every one of them, strips the camera data, re-encodes them and
files them into the right place in `public/`. Anything whose name it does not
recognise it will tell you about and leave alone. Re-run it as many times as
you like; each run replaces what came before.

---

## Before anything else

These are stand-ins that make the site look finished for the pitch. Before it
goes live, the photographs have to be of **the actual garments hanging in the
shop**, or a customer will walk in asking for the wine anarkali on the home
page and there won't be one. Say this to the owner plainly, it is also the
easiest upsell in the conversation, because a half-day shoot is the one thing
she cannot do herself.

## Format and size

- **Any format**, jpg, png, webp, avif. The script normalises everything.
- **Generate as large as your tool will go**, 2K or more. Nothing is lost by
  going big: the script caps the stored file at 2000px on the long edge and
  saves it at high quality.
- **Do not pre-compress.** Visitors never receive these files. Next.js
  re-encodes each one to AVIF or WebP at the exact width the visitor's screen
  asks for, that is where the site gets its speed, and it works better from a
  clean source than from something already squeezed.
- **Aspect ratios matter**, because a wrong one gets centre-cropped and you
  lose the hem or the yoke. They are listed against each shot below.

---

## STYLE, paste this first, every time

> Editorial lookbook photograph for a designer ethnic-wear boutique. Soft
> directional daylight from a tall window to the left, no
> flash, no studio strobe. Background is a plain warm off-white plaster wall,
> the colour of unbleached cotton. Muted film-like colour, low saturation,
> gentle contrast, warmth held in the shadows, the garment is the only
> saturated thing in the frame. 85mm lens at f/4. Real fabric behaviour:
> visible weave, natural fall, soft creases where the cloth folds.
> Photographic realism, shot on medium format. No text, no logo, no watermark.

## NEGATIVE, paste this into the negative field

> text, letters, watermark, logo, signature, neon colour, HDR, heavy vignette,
> gradient background, glitter overlay, bokeh balls, plastic sheen, CGI render,
> 3D, illustration, cluttered props, mannequin face, human face, distorted
> hands, extra fingers, warped embroidery, mirrored or duplicated pattern,
> oversharpening, blown highlights

**Garments are shown on an invisible ghost mannequin, on a wooden hanger, or
laid flat**, no models. That keeps the set consistent, avoids inventing a face
for a real business, and is what fabric-led lookbooks actually do.

---

## The three page images

### `hero.jpg`, 4:5 portrait
> A floor-length deep wine Chanderi silk anarkali on a plain wooden hanger
> against a warm off-white plaster wall, photographed square on, full length,
> the hem just clear of the floor. Sequin and dori work catches the light
> across the bodice and thins out down the panels. Generous empty wall around
> the garment. The silk holds its own flare without any underskirt.

### `interior.jpg`, 16:10 landscape
> The inside of a small designer ethnic-wear boutique. A single
> long rail of anarkalis and kurtas in muted colours down the left, a wooden
> cutting counter along the far wall with folded fabric bolts stacked on it,
> daylight from a window out of frame. Warm off-white walls, terracotta floor,
> no people, no signage, no clutter. Calm and uncrowded.

## The garments

Every shot below is **4:5 portrait**. Descriptions match the alt text already
written into the site, so keep the colours and the details as stated.

### Mehr anarkali, deep wine Chanderi silk

| File | Prompt |
|---|---|
| `mehr-anarkali-1.jpg` | A floor-length deep wine Chanderi silk anarkali on a ghost mannequin, front on, full length, the skirt falling in even panels. Sequin and dori work across the bodice thinning out down the panels. |
| `mehr-anarkali-2.jpg` | Close view of hand-worked sequin and dori embroidery on the bodice of a deep wine Chanderi silk anarkali, filling the frame, the individual threads and sequins clearly separate. |
| `mehr-anarkali-3.jpg` | The skirt of a deep wine Chanderi silk anarkali seen from the side, showing the depth of the flare and the way the silk holds its shape unsupported. |
| `mehr-anarkali-4.jpg` | The sleeve and neckline of a deep wine Chanderi silk anarkali, showing the finished edge, the piping and the shoulder seam. |

### Noor salwar suit, ochre cotton silk, block printed

| File | Prompt |
|---|---|
| `noor-salwar-suit-1.jpg` | An ochre cotton silk straight-cut kurta with a small hand block print, laid flat on a pale linen surface with the matching salwar folded beneath it, shot from directly above. |
| `noor-salwar-suit-2.jpg` | Close view of a small hand block print repeat in natural dye on ochre cotton silk, filling the frame, the slight irregularity of the block edges visible. |
| `noor-salwar-suit-3.jpg` | A soft mulmul dupatta folded into a neat rectangle and set beside a folded ochre kurta and salwar on a pale linen surface, shot from above. |

### Bageecha kurti, sage green mulmul cotton

| File | Prompt |
|---|---|
| `bageecha-kurti-1.jpg` | A short sage green mulmul cotton kurti with a small floral block print on a plain wooden hanger against a warm off-white wall, the soft cotton falling with no stiffness at all. |
| `bageecha-kurti-2.jpg` | Close view of a small garden block print, leaves and tiny flowers repeating close together, on soft sage green mulmul cotton, the loose weave of the cloth visible. |
| `bageecha-kurti-3.jpg` | The neckline of a sage green mulmul kurti, showing the plain thread piping and the neatly finished placket. |

### Zarina gown, ink blue georgette, zardozi yoke

| File | Prompt |
|---|---|
| `zarina-gown-1.jpg` | A full-length ink blue georgette gown on a ghost mannequin, photographed head to hem, zardozi work across the yoke and shoulders and the skirt below completely plain. |
| `zarina-gown-2.jpg` | Close view of hand-worked gold zardozi across the yoke and shoulder of an ink blue georgette gown, the raised metal thread catching the light. |
| `zarina-gown-3.jpg` | The plain georgette skirt of an ink blue gown falling in soft vertical folds, shot close, showing the lightness and the movement of the fabric. |
| `zarina-gown-4.jpg` | Back view of an ink blue georgette gown on a ghost mannequin, showing the finished neckline and the closure down the back. |

### Raat rani indo-western, charcoal crepe, organza cape

| File | Prompt |
|---|---|
| `raat-rani-indo-western-1.jpg` | A fitted charcoal crepe skirt with a sheer organza cape over it on a ghost mannequin, full length, the cape translucent enough to see the line of the skirt through it. |
| `raat-rani-indo-western-2.jpg` | Close view of a fine thread border running along the hem of a sheer organza cape, the sheer fabric and the solid border edge both sharp. |
| `raat-rani-indo-western-3.jpg` | A charcoal crepe skirt and sheer organza cape seen from behind on a ghost mannequin, showing how the cape falls away from the shoulders. |

### Kanjeevaram saree, mustard mulberry silk, maroon temple border

| File | Prompt |
|---|---|
| `kanchipuram-saree-1.jpg` | A mustard yellow pure mulberry silk Kanjeevaram saree draped over a wooden stand, showing the plain body and the contrast deep maroon temple border with real gold zari. |
| `kanchipuram-saree-2.jpg` | Close view of a woven maroon temple border and gold zari along the edge of a mustard Kanjeevaram silk saree, the weave structure of the border clearly visible. |
| `kanchipuram-saree-3.jpg` | The pallu of a mustard Kanjeevaram silk saree spread out flat, the zari work across it filling most of the frame, shot from directly above. |
| `kanchipuram-saree-4.jpg` | An attached blouse piece in matching mustard mulberry silk, still joined to the saree, folded and shot close on a pale surface. |

### Sarson sharara set, mustard viscose muslin, gota patti

| File | Prompt |
|---|---|
| `sarson-sharara-1.jpg` | A mustard viscose muslin sharara set on a ghost mannequin, short kurta over a wide sharara, gota patti edging along the hem, the muslin falling close to the body. |
| `sarson-sharara-2.jpg` | Close view of gota patti ribbon work along the sleeve edge of a short mustard muslin kurta, the flat metallic ribbon stitched down by hand. |
| `sarson-sharara-3.jpg` | The wide sharara of a mustard viscose muslin set falling in a straight column to the floor, shot from the knee down, showing the drape and the hem. |

### Sitara lehenga, deep green raw silk, mirror work

| File | Prompt |
|---|---|
| `sitara-lehenga-1.jpg` | A deep green raw silk lehenga on a ghost mannequin with a plain matching blouse, mirror work set in scattered clusters across the skirt, the raw silk holding the flare on its own. |
| `sitara-lehenga-2.jpg` | Close view of small round mirrors hand-set in clusters and bound with thread on deep green raw silk, the slub texture of the raw silk visible around them. |
| `sitara-lehenga-3.jpg` | A plain deep green raw silk blouse on a pale surface, shot close, showing the slub of the silk and the finished edges, no mirror work on it. |
| `sitara-lehenga-4.jpg` | A deep green raw silk lehenga skirt seen from the side, showing the depth of the flare, the mirror clusters catching the light down one panel. |

---

## Keeping the set together

If one image comes out brighter, cooler or glossier than the rest, regenerate
it rather than keeping it, a single mismatched frame in the collection grid is
more noticeable than a whole set that is slightly off. The grid puts eight of
these side by side, so consistency across the set beats quality on any one of
them.

The eight garment colours are already written into the site's descriptions and
alt text, so if you change a colour, change it in `data/products.ts` too.

### Chikankari kurta set, ecru cotton, white hand chikankari

| File | Prompt |
|---|---|
| `chikankari-kurta-set-1.jpg` | A straight ecru cotton kurta with white hand chikankari across the front panel, on a plain wooden hanger, the fine cotton hanging with almost no weight to it. |
| `chikankari-kurta-set-2.jpg` | Close view of white chikankari shadow work stitched on fine ecru cotton, tone on tone, the raised stitches reading as texture rather than as colour. |
| `chikankari-kurta-set-3.jpg` | The cuff of an ecru chikankari kurta, showing the worked border and the plain fabric it sits against. |

### Ajrakh cotton saree, indigo and madder, natural dye

| File | Prompt |
|---|---|
| `ajrakh-saree-1.jpg` | An indigo and madder ajrakh block printed mul cotton saree draped over a wooden stand, the geometric repeat running the length of the cloth. |
| `ajrakh-saree-2.jpg` | Close view of an ajrakh block print, deep indigo geometry against madder red, natural dye, the slight bleed at the block edges visible. |
| `ajrakh-saree-3.jpg` | The pallu of an indigo ajrakh cotton saree spread out flat, showing the border repeat, shot from directly above. |
| `ajrakh-saree-4.jpg` | An attached mul cotton blouse piece in matching indigo, folded on a pale surface. |

### Meena jacket set, teal silk velvet, thread and bead work

| File | Prompt |
|---|---|
| `meena-jacket-set-1.jpg` | A short deep teal silk velvet jacket worn over a plain crepe inner and a straight skirt, on a ghost mannequin, the velvet pile catching the light along the shoulders. |
| `meena-jacket-set-2.jpg` | Close view of thread and bead work running down the front panel of a deep teal velvet jacket, the beads catching light against the matt pile. |
| `meena-jacket-set-3.jpg` | The teal velvet jacket hanging open, showing the plain crepe inner underneath and the lining of the jacket. |

### Roshan palazzo set, dusty rose silk crepe, plain

| File | Prompt |
|---|---|
| `roshan-palazzo-set-1.jpg` | A dusty rose silk crepe peplum kurta over wide palazzo trousers on a ghost mannequin, completely plain, the shape carried entirely by the cut and the weight of the crepe. |
| `roshan-palazzo-set-2.jpg` | Close view of a covered button placket running down the front of a dusty rose silk crepe kurta, no embroidery anywhere. |
| `roshan-palazzo-set-3.jpg` | Wide dusty rose silk crepe palazzo trousers falling straight to the floor, shot from the knee down. |
| `roshan-palazzo-set-4.jpg` | A dusty rose peplum kurta seen from the side, showing how the peplum flares out from the waist. |

---

## A note on backgrounds

Shoot the garments on a warm off-white plaster wall, as described above. The
site's own background is a near-white paper, so a photograph lit that way sits
into the page almost seamlessly instead of reading as a rectangle pasted onto
it. That is the whole reason the page is light: the cloth is the only saturated
thing on the screen, and it should not have to fight the background to be.
