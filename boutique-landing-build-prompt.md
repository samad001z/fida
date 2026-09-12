# Build Prompt: Luxury Ethnic-Wear Boutique Site

Paste this whole file as the prompt. Fill the tokens in section 1 first.
Reusable across boutique clients. Swap tokens, keep everything else.

---

## 1. Tokens to fill before running

| Token | Example |
|---|---|
| `{{BRAND_NAME}}` | Aara |
| `{{TAGLINE}}` | Hand-finished ethnic wear, made to your measurements |
| `{{CITY_AREA}}` | Location shared on request |
| `{{FULL_ADDRESS}}` | Address available on request |
| `{{WHATSAPP_NUMBER}}` | 919XXXXXXXXX (country code, no +, no spaces) |
| `{{INSTAGRAM_HANDLE}}` | @brandhandle |
| `{{HOURS}}` | 11am to 8pm, closed Sundays |
| `{{ESTABLISHED_YEAR}}` | 2010 |
| `{{ACCENT_HEX}}` | pull from the brand's actual garments, not from a palette generator |

Product images go in `/public/products/`. If they are missing, generate solid-color
placeholder blocks at the correct aspect ratio. Do not use stock photography and do
not use Unsplash URLs.

---

## 2. What you are building

A two-page site for a physical ethnic-wear boutique that sells ready-to-wear and
made-to-measure garments: anarkalis, salwar suits, kurtis, indo-western, gowns, sarees.

The business does not process payments online. Every enquiry ends in a WhatsApp
conversation or a store visit. Design for that. There is no cart, no checkout, no
account system, no login. Adding one is a failure of the brief.

Audience: women aged 25 to 55 in an affluent Indian metro neighbourhood, browsing on a
phone, usually arriving from an Instagram link. Mobile is the primary design target.
Design mobile first and let desktop follow.

The site's one job: make someone confident enough to message the boutique about a
specific garment.

---

## 3. Aesthetic direction

Quiet luxury. Think a printed lookbook, not a SaaS landing page. The garments are the
only loud thing on the page.

Rules:

- Photography leads. Images should be large, uncropped where possible, and given room.
  Whitespace is the luxury signal.
- Colour is near-monochrome. A warm off-white or a deep ink base, plus `{{ACCENT_HEX}}`
  used sparingly, mostly on interactive elements. No gradients used as decoration.
- One display typeface with real character for the brand name and section headings, one
  quiet body face. Both must handle Indian garment vocabulary without looking wrong.
  Do not use Playfair Display, Cormorant, or Inter. Pick something less obvious and
  justify the pick in a comment at the top of the CSS.
- Type does work. Set an intentional scale. Sentence case throughout.
- Borders and rules only where they separate real things. No decorative dividers.

Explicitly banned, these are the tells that make it look generated:

- Glassmorphism, frosted panels, neon or acid accents, dark hero with floating particles
- Gradient text, gradient buttons, gradient section backgrounds
- All-caps tracked-out eyebrow labels above headings
- `01 / 02 / 03` numbered markers on content that is not a sequence
- Identical rounded cards with the same soft grey shadow under each one
- An arrow character appended to every link and button label
- Emoji anywhere in the UI
- Meta strings joined with middle dots

## 4. Where the "modern technology" shows

Not as effects. As craft that the visitor feels but cannot point at:

- One orchestrated page-load reveal on the hero only. Nothing else animates on entry.
  No fade-and-slide-up on every section as you scroll.
- Image loading is invisible: correct aspect-ratio boxes reserved so nothing shifts,
  a low-quality blur placeholder that resolves cleanly.
- The product gallery responds instantly to interaction. Thumbnail to main image swap
  has no perceptible delay.
- Motion that answers an action (opening the gallery, expanding fabric details) is
  welcome. Ambient motion is not.
- Respect `prefers-reduced-motion` and kill all of it when set.

If a visitor notices an animation, it is too much.

---

## 5. Pages

### 5.1 Landing page

Sections in order:

1. **Hero.** One full-bleed garment photograph. Brand name and `{{TAGLINE}}`. A single
   primary action that opens WhatsApp. Do not stack two competing buttons.
2. **Collection grid.** Six to nine garments. Uneven grid, not a uniform 3x3 of identical
   tiles. Each tile: image, garment name, fabric in a few words, price or "Price on
   request". Tapping a tile opens the product page.
3. **Made to measure.** Short block explaining the custom-stitching process in plain
   language: choose fabric, measurements taken in store or shared over WhatsApp,
   delivery timeline. Three or four sentences, not a numbered stepper.
4. **The boutique.** One line of history using `{{ESTABLISHED_YEAR}}`, plus an interior
   photograph if available. No filler "our story" paragraph.
5. **Visit.** `{{FULL_ADDRESS}}`, `{{HOURS}}`, an embedded map or a static map image
   linking to Google Maps directions, and a tel: link on the phone number.
6. **Footer.** Instagram link, WhatsApp link, address repeated, copyright.

No newsletter signup. No testimonial carousel. No "why choose us" section with icons.

### 5.2 Product page

Route: `/collection/[slug]`. Build it as a real page, not a modal.

- Image gallery, three to five shots per garment, main image plus thumbnails. Tap to
  zoom on mobile.
- Garment name, price or "Price on request".
- Short description written like a person wrote it, two or three sentences about the
  fabric, the work, and what it suits.
- Details list: fabric, work or embroidery type, available sizes, whether it can be
  made to measure, stitching lead time.
- Primary action: "Ask about this on WhatsApp". It must open WhatsApp with a message
  prefilled with the garment name and page URL, so the owner knows exactly which piece
  is being asked about. This is the single most important interaction on the site.
- Below: three other garments, labelled plainly.

Product data lives in one typed file, `data/products.ts`, exporting an array. The owner
should be able to add a garment by copying one object. Comment it for a non-developer.

---

## 6. Technical

- Next.js App Router, TypeScript, Tailwind. Deploy target is Vercel.
- `next/image` everywhere with correct `sizes`. No raw `<img>`.
- Static generation. No database, no CMS, no auth, no API routes.
- Full metadata: title, description, Open Graph image, so the link previews properly when
  the owner shares it on WhatsApp and Instagram. This matters more than it sounds.
- JSON-LD `LocalBusiness` schema with the real address, hours and phone. Local search is
  where this business actually gets found.
- Semantic HTML. Visible keyboard focus states. Real alt text on every garment image
  describing the garment, not the filename.
- Lighthouse: performance above 90 on mobile, accessibility 100.
- Works down to 360px wide.

---

## 7. Copy

Write all copy yourself. Plain Indian English, no marketing inflation. Never write
"elevate your wardrobe", "curated collection", "timeless elegance", "where tradition
meets modernity". Describe garments concretely: what the fabric is, what the work is,
what occasion it holds up at.

Buttons say what happens. "Ask about this on WhatsApp", not "Enquire now".

---

## 8. Process

Before writing code, produce a short design plan: the palette as four to six named hex
values, the two typefaces with a reason for each, and an ASCII wireframe of the landing
page and the product page. Check that plan against section 3. If any part of it is what
you would produce for any boutique brief rather than this one, change it and say what
you changed. Only then build.

After building, review your own output against the banned list in section 3 and remove
one thing. There is always one thing.

## 9. Done when

- [ ] Landing and one product page complete, real content, no lorem ipsum
- [ ] WhatsApp link opens with the garment name prefilled
- [ ] Nothing shifts as images load
- [ ] Nothing animates on scroll
- [ ] Zero items from the banned list present
- [ ] Readable and tappable at 360px
- [ ] Link preview renders correctly when pasted into WhatsApp
