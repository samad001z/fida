/*
  FIDA, every detail the owner might want to change lives in this one file.
  Change a value here and it updates everywhere on the site: the header, the
  footer, the WhatsApp buttons, the map, the Google listing data.

  Contact and location details stay neutral until the demo is approved.
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
    'Fida Designer Boutique offers ready-to-wear and made-to-measure ethnic wear, including anarkalis, salwar suits, kurtis, indo-western styles, gowns and sarees.',

  // Placeholder number used for WhatsApp and the tap-to-call link.
  // Country code first, no plus sign, no spaces. India is 91.
  whatsapp: '919999900000',
  phoneDial: '+919999900000',
  phoneDisplay: '+91 99999 00000',

  // TODO: confirm the opening hours. These are the usual hours for the street,
  // not something the Google listing states.
  hours: [
    { days: 'Monday to Saturday', time: '11am to 8pm' },
    { days: 'Sunday', time: 'Closed' },
  ],

  // TODO: confirm the year the shop opened. It is used in one sentence on the
  // front page, under "the boutique".
  establishedYear: 2011,

  // Set NEXT_PUBLIC_SITE_URL to the public domain when one is approved.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'https://fida.example.com'),
} as const;

/** Builds a wa.me link with the message already typed out for the visitor. */
export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
