import type { Metadata, Viewport } from 'next';
import { Bodoni_Moda, Instrument_Sans } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { site, whatsappUrl } from '@/data/site';

const pageTitle = site.fullName;

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bodoni',
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument',
});

export const metadata: Metadata = {
  title: {
    default: pageTitle,
    template: `%s, ${site.name}`,
  },
  description: site.description,
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: '#efeeea',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${bodoni.variable} ${instrument.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-indigo focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>

        <header className="mx-auto flex max-w-[84rem] items-baseline justify-between px-5 py-6 sm:px-8 lg:px-12">
          <Link href="/" className="display text-[1.7rem] leading-none">
            {site.name}
          </Link>
          <nav className="flex items-baseline gap-6 text-[0.95rem]">
            <Link href="/#collection" className="draw -my-2 inline-block py-2">
              Collection
            </Link>
            <Link href="/#measure" className="draw -my-2 hidden py-2 sm:inline-block">
              Made to measure
            </Link>
            <Link href="/#visit" className="draw -my-2 inline-block py-2">
              Visit
            </Link>
          </nav>
        </header>

        <main id="main">{children}</main>

        <footer className="mt-20 border-t border-rule sm:mt-28">
          <div className="mx-auto max-w-[84rem] px-5 py-14 sm:px-8 lg:px-12">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <div className="lg:col-span-2">
                <p className="display text-[1.7rem] leading-none">{site.name}</p>
                <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-mute">
                  Ready to wear and made to measure, stitched on the premises.
                </p>
              </div>

              <div>
                <h2 className="text-[0.95rem]">Where</h2>
                <address className="mt-4 text-[0.92rem] not-italic leading-relaxed text-mute">
                  Address available on request.
                </address>
                <dl className="mt-5 text-[0.92rem] text-mute">
                  {site.hours.map((h) => (
                    <div key={h.days} className="flex flex-wrap gap-x-2">
                      <dt>{h.days}</dt>
                      <dd className="text-ink">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <ul className="text-[0.95rem]">
                <li>
                  <a
                    href={whatsappUrl(
                      `Hello ${site.fullName}, I saw your website and had a question.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="draw inline-block py-2"
                  >
                    Message on WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`tel:${site.phoneDial}`} className="draw inline-block py-2">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>Location shared on request.</li>
              </ul>
            </div>

            <p className="mt-14 pb-20 text-[0.85rem] text-mute sm:pb-0">
              © {new Date().getFullYear()} {site.fullName}.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}
