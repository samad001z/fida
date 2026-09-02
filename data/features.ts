/*
  WORN BY YOU
  -----------
  Customers who bought something here, wore it, and posted it. Each one shows
  the photograph they posted, their first name, and which garment it is.

  ===========================================================================
  TODO, BEFORE THIS GOES LIVE. Every entry below is a stand-in.

  The names are invented and the photographs are the shop's own catalogue
  pictures, not customer posts. Nobody on this list is a real person. It is
  here so the section looks finished for the pitch, exactly the way the
  garment photographs are stand-ins until the real shoot happens.

  Replacing one is a two minute job:

    1. Get the customer's permission in writing, in the Instagram DM is fine.
       Reposting someone's photograph without asking is the fastest way to
       turn a happy customer into an unhappy one.
    2. Save her photograph into FIX/ using the matching name in
       FIX/WORN-BY-YOU-PROMPTS.md, then run `npm run placeholders`.
    3. Put her first name in `name`, the garment in `garment`, and the slug of
       that garment in `slug` so the card links to the right page.
    4. Paste the link to her post into `postUrl`. With it, the card opens the
       post on Instagram. Without it, the card opens the garment page instead.

  Eight is the right number. It keeps the marquee varied without making the
  page carry more photographs than the section needs.
  ===========================================================================
*/

export type Feature = {
  /** Path under public/. Portrait works best, it is cropped to 4:5. */
  image: string;
  /** Catalogue photograph used until the generated customer image is added. */
  fallbackImage: string;
  /** Describes the photograph out loud for someone who cannot see it. */
  alt: string;
  /** First name only. Nobody wants their full name on a shop's website. */
  name: string;
  /** The garment, written the way it is written in data/products.ts. */
  garment: string;
  /** The garment's slug, so the card links to its page. */
  slug: string;
  /** Link to her actual Instagram post. Leave it out until you have one. */
  postUrl?: string;
};

export const features: Feature[] = [
  {
    image: '/features/worn-aisha-mehr-anarkali.jpg',
    fallbackImage: '/products/mehr-anarkali-1.jpg',
    alt: 'Aisha wearing a deep wine Chanderi silk anarkali at an evening celebration',
    name: 'Aisha',
    garment: 'Mehr anarkali',
    slug: 'mehr-anarkali',
  },
  {
    image: '/features/worn-sneha-bageecha-kurti.jpg',
    fallbackImage: '/products/bageecha-kurti-1.jpg',
    alt: 'Sneha wearing a sage green mulmul cotton kurti on a shaded veranda',
    name: 'Sneha',
    garment: 'Bageecha kurti',
    slug: 'bageecha-kurti',
  },
  {
    image: '/features/worn-farheen-sarson-sharara.jpg',
    fallbackImage: '/products/sarson-sharara-1.jpg',
    alt: 'Farheen wearing a mustard sharara set with gota patti at a family gathering',
    name: 'Farheen',
    garment: 'Sarson sharara set',
    slug: 'sarson-sharara',
  },
  {
    image: '/features/worn-divya-sitara-lehenga.jpg',
    fallbackImage: '/products/sitara-lehenga-1.jpg',
    alt: 'Divya wearing a deep green mirror work lehenga at a wedding venue',
    name: 'Divya',
    garment: 'Sitara lehenga',
    slug: 'sitara-lehenga',
  },
  {
    image: '/features/worn-ruksana-zarina-gown.jpg',
    fallbackImage: '/products/zarina-gown-1.jpg',
    alt: 'Ruksana wearing an ink blue georgette gown at an evening reception',
    name: 'Ruksana',
    garment: 'Zarina gown',
    slug: 'zarina-gown',
  },
  {
    image: '/features/worn-meghana-chikankari-kurta.jpg',
    fallbackImage: '/products/chikankari-kurta-set-1.jpg',
    alt: 'Meghana wearing an ecru hand chikankari kurta set at a daytime lunch',
    name: 'Meghana',
    garment: 'Chikankari kurta set',
    slug: 'chikankari-kurta-set',
  },
  {
    image: '/features/worn-zoya-meena-jacket.jpg',
    fallbackImage: '/products/meena-jacket-set-1.jpg',
    alt: 'Zoya wearing a deep teal velvet jacket set at a winter wedding',
    name: 'Zoya',
    garment: 'Meena jacket set',
    slug: 'meena-jacket-set',
  },
  {
    image: '/features/worn-lakshmi-roshan-palazzo.jpg',
    fallbackImage: '/products/roshan-palazzo-set-1.jpg',
    alt: 'Lakshmi wearing a dusty rose palazzo set at a work celebration',
    name: 'Lakshmi',
    garment: 'Roshan palazzo set',
    slug: 'roshan-palazzo-set',
  },
];
