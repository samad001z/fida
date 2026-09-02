/*
  THE GARMENTS
  ------------
  Everything shown in the collection comes from the list below.

  To add a garment: copy one block from `{` down to `},`, paste it underneath,
  and change the words. To remove one, delete its block. To reorder the
  collection, move the blocks up or down. Nothing else on the site needs
  touching.

  A few notes on the fields:

    slug     the web address of the garment page, lowercase with hyphens.
             `mehr-anarkali` becomes fida.com/collection/mehr-anarkali
    price    a number in rupees, or `null` if the price should read
             "Price on request"
    occasion Everyday, Occasion or Wedding. This is the only thing the filter
             above the collection reads.
    images   put the photographs in the public/products folder and list the
             file names here. The first one is the main image. Three to five
             is right. `alt` describes the garment out loud for someone who
             cannot see the photograph, and Google reads it too.
*/

/** Which of the three shelves a garment belongs on. Used by the filter above
    the collection, and it must be one of these three words exactly. */
export type Occasion = 'Everyday' | 'Occasion' | 'Wedding';

export type Product = {
  slug: string;
  name: string;
  occasion: Occasion;
  /** Two or three words. Shown under the name in the collection grid. */
  fabricShort: string;
  /** Rupees, or null for "Price on request". */
  price: number | null;
  /** Two or three sentences on the garment page. */
  description: string;
  details: {
    fabric: string;
    work: string;
    sizes: string;
    madeToMeasure: string;
    leadTime: string;
    /** One line. What the customer must not do to it. */
    care: string;
  };
  images: { src: string; alt: string }[];
};

export const products: Product[] = [
  {
    slug: 'mehr-anarkali',
    occasion: 'Occasion',
    name: 'Mehr anarkali',
    fabricShort: 'Chanderi silk, dori work',
    price: 18500,
    description:
      'A floor-length anarkali in Chanderi silk, with sequin and dori work across the bodice that thins out as it runs down the panels. The silk has enough body to hold the flare without a stiff underskirt beneath it. Cut for a long evening, a reception or a sangeet, where you will be standing more than sitting.',
    details: {
      fabric: 'Chanderi silk, cotton lining',
      work: 'Sequin and dori, hand worked',
      sizes: 'XS to XL in store',
      madeToMeasure: 'Yes, in any size',
      leadTime: 'About three weeks',
      care: 'Dry clean only',
    },
    images: [
      { src: '/products/mehr-anarkali-1.jpg', alt: 'Deep wine Chanderi silk anarkali with a full skirt, photographed front on' },
      { src: '/products/mehr-anarkali-2.jpg', alt: 'Close view of the sequin and dori work on the anarkali bodice' },
      { src: '/products/mehr-anarkali-3.jpg', alt: 'The anarkali skirt panels seen from the side, showing the flare' },
      { src: '/products/mehr-anarkali-4.jpg', alt: 'Sleeve and neckline detail of the Chanderi silk anarkali' },
    ],
  },
  {
    slug: 'noor-salwar-suit',
    occasion: 'Everyday',
    name: 'Noor salwar suit',
    fabricShort: 'Cotton silk, block printed',
    price: 7200,
    description:
      'A straight-cut kurta in cotton silk with a hand block print, sold with a matching salwar and a mulmul dupatta. The cotton in the blend keeps it wearable through a Hyderabad afternoon, and the silk is what stops it reading as a daily kurta. Right for a lunch, an office function, or a visit where you want to look put together without effort.',
    details: {
      fabric: 'Cotton silk kurta, mulmul dupatta',
      work: 'Hand block print, natural dye',
      sizes: 'S to XXL in store',
      madeToMeasure: 'Yes, in any size',
      leadTime: 'Ten to twelve days',
      care: 'First wash separately in cold water',
    },
    images: [
      { src: '/products/noor-salwar-suit-1.jpg', alt: 'Ochre cotton silk salwar suit with a small block print, laid flat' },
      { src: '/products/noor-salwar-suit-2.jpg', alt: 'Close view of the hand block print repeat on the kurta' },
      { src: '/products/noor-salwar-suit-3.jpg', alt: 'The mulmul dupatta folded beside the kurta and salwar' },
    ],
  },
  {
    slug: 'bageecha-kurti',
    occasion: 'Everyday',
    name: 'Bageecha kurti',
    fabricShort: 'Mulmul cotton',
    price: 2950,
    description:
      'A short kurti in soft mulmul, hand block printed in a small garden print that repeats close together. It gets softer with every wash rather than worse. This is the one that gets worn on a Tuesday instead of being saved for something.',
    details: {
      fabric: 'Mulmul cotton',
      work: 'Hand block print',
      sizes: 'XS to XXL in store',
      madeToMeasure: 'Yes',
      leadTime: 'About a week',
      care: 'Machine wash cold, it softens each time',
    },
    images: [
      { src: '/products/bageecha-kurti-1.jpg', alt: 'Sage green mulmul cotton kurti with a small floral block print' },
      { src: '/products/bageecha-kurti-2.jpg', alt: 'Close view of the garden block print on soft mulmul cotton' },
      { src: '/products/bageecha-kurti-3.jpg', alt: 'The kurti neckline and its plain thread piping' },
    ],
  },
  {
    slug: 'zarina-gown',
    occasion: 'Occasion',
    name: 'Zarina gown',
    fabricShort: 'Georgette, zardozi yoke',
    price: null,
    description:
      'A full-length georgette gown with zardozi worked across the yoke and shoulders and nothing at all below it. Keeping the weight high is what lets the skirt keep moving. Made to order only, because the yoke is worked after the measurements are taken.',
    details: {
      fabric: 'Georgette, satin lining',
      work: 'Zardozi on the yoke, hand worked',
      sizes: 'Made to your measurements',
      madeToMeasure: 'Only made to measure',
      leadTime: 'Four to five weeks',
      care: 'Dry clean only, store flat not hung',
    },
    images: [
      { src: '/products/zarina-gown-1.jpg', alt: 'Ink blue georgette gown with a worked yoke, photographed full length' },
      { src: '/products/zarina-gown-2.jpg', alt: 'Zardozi hand work across the yoke and shoulder of the gown' },
      { src: '/products/zarina-gown-3.jpg', alt: 'The georgette skirt of the gown falling in soft folds' },
      { src: '/products/zarina-gown-4.jpg', alt: 'Back view of the gown showing the finished neckline' },
    ],
  },
  {
    slug: 'raat-rani-indo-western',
    occasion: 'Occasion',
    name: 'Raat rani indo-western',
    fabricShort: 'Crepe, sheer cape',
    price: 14000,
    description:
      'A fitted crepe skirt with a sheer cape over it, edged in a fine thread border. It reads formal without a dupatta to keep hold of all evening, which is the whole point of it. Suits a cocktail evening, or a wedding function where you expect to be moving between rooms.',
    details: {
      fabric: 'Crepe skirt, organza cape',
      work: 'Thread border on the cape edge',
      sizes: 'XS to L in store',
      madeToMeasure: 'Yes, in any size',
      leadTime: 'Two to three weeks',
      care: 'Dry clean only',
    },
    images: [
      { src: '/products/raat-rani-indo-western-1.jpg', alt: 'Charcoal crepe skirt with a sheer organza cape worn over it' },
      { src: '/products/raat-rani-indo-western-2.jpg', alt: 'Thread border running along the hem of the organza cape' },
      { src: '/products/raat-rani-indo-western-3.jpg', alt: 'The cape and fitted skirt seen from behind' },
    ],
  },
  {
    slug: 'kanchipuram-saree',
    occasion: 'Wedding',
    name: 'Kanjeevaram saree',
    fabricShort: 'Mulberry silk, temple border',
    price: null,
    description:
      'A pure mulberry silk Kanjeevaram woven in Kanchipuram, with a contrast temple border and a plain body. The zari is real, so it settles and improves with age rather than dulling. Blouse fabric comes attached, and can be stitched here in about two weeks.',
    details: {
      fabric: 'Pure mulberry silk, tested zari',
      work: 'Woven temple border and pallu',
      sizes: 'Six and a quarter yards with blouse piece',
      madeToMeasure: 'Blouse stitched to measurement',
      leadTime: 'Two weeks for the blouse',
      care: 'Dry clean, refold along a new line once a year',
    },
    images: [
      { src: '/products/kanchipuram-saree-1.jpg', alt: 'Mustard Kanjeevaram silk saree with a contrast maroon temple border' },
      { src: '/products/kanchipuram-saree-2.jpg', alt: 'The woven temple border and zari detail along the saree edge' },
      { src: '/products/kanchipuram-saree-3.jpg', alt: 'The pallu of the Kanjeevaram saree spread out flat' },
      { src: '/products/kanchipuram-saree-4.jpg', alt: 'Attached blouse piece in matching mulberry silk' },
    ],
  },
  {
    slug: 'sarson-sharara',
    occasion: 'Occasion',
    name: 'Sarson sharara set',
    fabricShort: 'Viscose muslin, gota patti',
    price: 11800,
    description:
      'A short kurta with a wide sharara in viscose muslin, finished with gota patti along the hem and the sleeves. Viscose sits closer to the body than cotton, so the sharara falls in a column rather than standing away from you. A mehendi or a haldi garment, and light enough to sit through both.',
    details: {
      fabric: 'Viscose muslin',
      work: 'Gota patti on hem and sleeves',
      sizes: 'S to XL in store',
      madeToMeasure: 'Yes, in any size',
      leadTime: 'Two weeks',
      care: 'Dry clean, the gota will not take water',
    },
    images: [
      { src: '/products/sarson-sharara-1.jpg', alt: 'Mustard viscose muslin sharara set with gota patti along the hem' },
      { src: '/products/sarson-sharara-2.jpg', alt: 'Gota patti edging along the sleeve of the short kurta' },
      { src: '/products/sarson-sharara-3.jpg', alt: 'The wide sharara falling in a column to the floor' },
    ],
  },
  {
    slug: 'sitara-lehenga',
    occasion: 'Wedding',
    name: 'Sitara lehenga',
    fabricShort: 'Raw silk, mirror work',
    price: null,
    description:
      'A raw silk lehenga with mirror work set in clusters across the skirt and a plain blouse to hold it steady. The raw silk gives the flare, so there are no layers of net underneath doing that job. Made to measure only, and worth allowing the time for.',
    details: {
      fabric: 'Raw silk, cotton lining',
      work: 'Mirror work in clusters, hand set',
      sizes: 'Made to your measurements',
      madeToMeasure: 'Only made to measure',
      leadTime: 'Five to six weeks',
      care: 'Dry clean only, hang covered',
    },
    images: [
      { src: '/products/sitara-lehenga-1.jpg', alt: 'Deep green raw silk lehenga with clusters of mirror work on the skirt' },
      { src: '/products/sitara-lehenga-2.jpg', alt: 'Hand set mirror work clustered across the raw silk skirt' },
      { src: '/products/sitara-lehenga-3.jpg', alt: 'The plain raw silk blouse that comes with the lehenga' },
      { src: '/products/sitara-lehenga-4.jpg', alt: 'The lehenga skirt seen from the side, showing its flare' },
    ],
  },
  {
    slug: 'chikankari-kurta-set',
    occasion: 'Everyday',
    name: 'Chikankari kurta set',
    fabricShort: 'Cotton, hand chikankari',
    price: 9400,
    description:
      'A straight kurta in fine ecru cotton with hand chikankari worked across the front and the cuffs, sold with a churidar and a plain cotton dupatta. Chikankari is white thread on a pale ground, so it reads as texture from a distance and as work up close. It is the coolest thing in the shop to actually wear, which is why it sells through every summer.',
    details: {
      fabric: 'Fine cotton, cotton dupatta',
      work: 'Hand chikankari, Lucknow',
      sizes: 'XS to XXL in store',
      madeToMeasure: 'Yes, in any size',
      leadTime: 'Three weeks, the work is done by hand',
      care: 'Hand wash cold, never brush the work',
    },
    images: [
      { src: '/products/chikankari-kurta-set-1.jpg', alt: 'Ecru cotton kurta with white hand chikankari across the front, on a hanger' },
      { src: '/products/chikankari-kurta-set-2.jpg', alt: 'Close view of white chikankari thread work on fine ecru cotton' },
      { src: '/products/chikankari-kurta-set-3.jpg', alt: 'The cuff of the chikankari kurta, showing the worked border' },
    ],
  },
  {
    slug: 'ajrakh-saree',
    occasion: 'Everyday',
    name: 'Ajrakh cotton saree',
    fabricShort: 'Cotton, natural dye',
    price: 4800,
    description:
      'A mul cotton saree block printed in ajrakh, in the indigo and madder that the technique has used for centuries. Every piece goes through repeated printing and washing, so no two lengths come out identical and the colour keeps shifting for the first few washes. Light enough to drape at nine in the morning and still be comfortable at four.',
    details: {
      fabric: 'Mul cotton, five and a half yards',
      work: 'Ajrakh block print, natural dye, Kutch',
      sizes: 'One size, blouse piece attached',
      madeToMeasure: 'Blouse stitched to measurement',
      leadTime: 'Ten days for the blouse',
      care: 'Hand wash separately, the dye runs for the first few washes',
    },
    images: [
      { src: '/products/ajrakh-saree-1.jpg', alt: 'Indigo and madder ajrakh block printed cotton saree draped over a stand' },
      { src: '/products/ajrakh-saree-2.jpg', alt: 'Close view of the ajrakh block print, indigo geometry against madder red' },
      { src: '/products/ajrakh-saree-3.jpg', alt: 'The pallu of the ajrakh saree spread flat, showing the border repeat' },
      { src: '/products/ajrakh-saree-4.jpg', alt: 'The attached mul cotton blouse piece in matching indigo' },
    ],
  },
  {
    slug: 'meena-jacket-set',
    occasion: 'Wedding',
    name: 'Meena jacket set',
    fabricShort: 'Velvet jacket, crepe inner',
    price: 16500,
    description:
      'A short teal velvet jacket with thread and bead work along the front panels, worn over a plain crepe inner and a straight skirt. The jacket carries all the weight, so the pieces underneath stay light and you are not wearing the whole outfit at once. Made for December weddings, when Hyderabad is finally cold enough for velvet.',
    details: {
      fabric: 'Silk velvet jacket, crepe inner and skirt',
      work: 'Thread and bead work on the jacket panels',
      sizes: 'S to XL in store',
      madeToMeasure: 'Yes, in any size',
      leadTime: 'Three to four weeks',
      care: 'Dry clean the jacket, wash the inner cold',
    },
    images: [
      { src: '/products/meena-jacket-set-1.jpg', alt: 'Deep teal velvet jacket over a plain crepe inner and straight skirt' },
      { src: '/products/meena-jacket-set-2.jpg', alt: 'Thread and bead work along the front panel of the teal velvet jacket' },
      { src: '/products/meena-jacket-set-3.jpg', alt: 'The velvet jacket open, showing the crepe inner underneath' },
    ],
  },
  {
    slug: 'roshan-palazzo-set',
    occasion: 'Occasion',
    name: 'Roshan palazzo set',
    fabricShort: 'Silk crepe, plain',
    price: 8900,
    description:
      'A peplum kurta over wide silk crepe palazzos in a dusty rose, with no work on it at all beyond a covered button placket. The whole thing rests on the cut and on the weight of the crepe, which is why it is the one people come back for after they have bought something heavier. Wears well to an engagement or a work function.',
    details: {
      fabric: 'Silk crepe',
      work: 'None, covered button placket only',
      sizes: 'XS to L in store',
      madeToMeasure: 'Yes, in any size',
      leadTime: 'Two weeks',
      care: 'Dry clean only',
    },
    images: [
      { src: '/products/roshan-palazzo-set-1.jpg', alt: 'Dusty rose silk crepe peplum kurta over wide palazzo trousers' },
      { src: '/products/roshan-palazzo-set-2.jpg', alt: 'The covered button placket running down the front of the peplum kurta' },
      { src: '/products/roshan-palazzo-set-3.jpg', alt: 'The wide silk crepe palazzos falling to the floor' },
      { src: '/products/roshan-palazzo-set-4.jpg', alt: 'The peplum kurta seen from the side, showing how it flares at the waist' },
    ],
  },
];

export const priceLabel = (price: number | null) =>
  price === null ? 'Price on request' : `₹${price.toLocaleString('en-IN')}`;

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

/** The three garments shown at the bottom of a product page. */
export const otherProducts = (slug: string, count = 3) => {
  const i = products.findIndex((p) => p.slug === slug);
  return Array.from({ length: count }, (_, n) => products[(i + n + 1) % products.length]);
};

export const occasions = ['Everyday', 'Occasion', 'Wedding'] as const;
