/*
  FIDA, every detail the owner might want to change lives in this one file.
  Change a value here and it updates everywhere on the site: the header, the
  footer, the WhatsApp buttons, the map, the Google listing data.

  The address and the phone number are the real ones from the Google listing.
  Four things are still guesses and are marked TODO below.
*/

export const site = {
  /** The wordmark in the header and footer. */
  name: 'Fida',

  /** The full trading name. Used in the page title and in the Google listing
      data, where it should match the Google Business Profile exactly. */
  fullName: 'Fida Designer Boutique',

  // Shown under the brand name on the front page.
  tagline: 'Ethnic wear, hand-finished and stitched to your measurements.',

  // Used in the browser tab, in Google results, and in the grey preview text
  // that appears when someone pastes a link to this site into WhatsApp.
  description:
    'Fida Designer Boutique is a ready-to-wear and made-to-measure ethnic wear store on Road No. 36, Jubilee Hills, Hyderabad. Anarkalis, salwar suits, kurtis, indo-western, gowns and sarees, stitched in store.',

  // The store's listed number, used for WhatsApp and for the tap-to-call link.
  // Country code first, no plus sign, no spaces. India is 91.
  whatsapp: '919949305533',
  phoneDial: '+919949305533',
  phoneDisplay: '+91 99493 05533',

  // TODO: replace with the real handle, without the @. This one is a guess and
  // links out of the site, so it should be checked before the site goes live.
  instagram: 'fida.boutique',

  address: {
    line1: '101B, Westend Mall, Road No. 36',
    line2: 'Aditya Enclave, Venkatagiri',
    neighbourhood: 'Jubilee Hills',
    city: 'Hyderabad',
    state: 'Telangana',
    postalCode: '500033',
    country: 'IN',
  },

  // TODO: confirm the opening hours. These are the usual hours for the street,
  // not something the Google listing states.
  hours: [
    { days: 'Monday to Saturday', time: '11am to 8pm' },
    { days: 'Sunday', time: 'Closed' },
  ],

  // TODO: confirm the year the shop opened. It is used in one sentence on the
  // front page, under "the boutique".
  establishedYear: 2011,

  // The live address of the site. Needed so WhatsApp and Instagram can show a
  // picture and a title when the link is shared. Set NEXT_PUBLIC_SITE_URL to
  // the real domain once it is bought. Until then, a Vercel deployment fills
  // in its own address, so shared links still preview correctly.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'https://fida.example.com'),
} as const;

export const addressOneLine = [
  site.address.line1,
  site.address.line2,
  site.address.neighbourhood,
  `${site.address.city} ${site.address.postalCode}`,
].join(', ');

/** What the map and the directions link both search for. Using the written
    address rather than a pair of coordinates keeps the pin honest. */
export const mapQuery = `${site.fullName}, ${addressOneLine}`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  mapQuery,
)}`;

/** Builds a wa.me link with the message already typed out for the visitor. */
export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
