import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Gallery } from '@/components/Gallery';
import { StickyAsk } from '@/components/StickyAsk';
import { Photo } from '@/components/Photo';
import { PrimaryAction, TextLink } from '@/components/Action';
import { getProduct, otherProducts, priceLabel, products } from '@/data/products';
import { site, whatsappUrl } from '@/data/site';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const title = `${product.name}, ${product.fabricShort.toLowerCase()}`;
  const path = `/collection/${product.slug}`;

  return {
    title,
    description: product.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      title: `${product.name}, ${site.name}`,
      description: product.description,
      url: path,
      images: [{ url: product.images[0].src, width: 1200, height: 1500, alt: product.images[0].alt }],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const pageUrl = `${site.url}/collection/${product.slug}`;

  /* The whole point of the site. The owner opens WhatsApp and already knows
     which garment is being asked about, and can open the page herself. */
  const enquiry = whatsappUrl(
    `Hello ${site.name}. I am asking about the ${product.name}` +
      `${product.price === null ? '' : ` (${priceLabel(product.price)})`}.\n${pageUrl}`,
  );

  const details: [string, string][] = [
    ['Fabric', product.details.fabric],
    ['Work', product.details.work],
    ['Sizes', product.details.sizes],
    ['Made to measure', product.details.madeToMeasure],
    ['Stitching time', product.details.leadTime],
    ['Care', product.details.care],
  ];

  return (
    <article className="mx-auto max-w-[84rem] px-5 sm:px-8 lg:px-12">
      <p className="mb-6 text-[0.95rem] text-mute">
        <TextLink href="/#collection">Back to the collection</TextLink>
      </p>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Gallery shots={[...product.images]} name={product.name} />

        <div className="lg:pt-4">
          <h1 className="display text-[clamp(2rem,7vw,3rem)]">{product.name}</h1>
          <p className="mt-3 text-[1.15rem] text-mute">{priceLabel(product.price)}</p>

          <p className="mt-8 max-w-prose text-[1.05rem] leading-[1.65] sm:text-[1.12rem]">
            {product.description}
          </p>

          <div id="top-action" className="mt-10">
            <PrimaryAction href={enquiry}>Ask about this on WhatsApp</PrimaryAction>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-mute">
              The message opens with the garment name already written, so there is nothing to
              explain. Ask for a different colour, a different size, or more photographs, all three
              are normal. You can also call{' '}
              <a href={`tel:${site.phoneDial}`} className="draw text-ink">
                {site.phoneDisplay}
              </a>
              .
            </p>
          </div>

          <dl className="mt-12 border-t border-rule">
            {details.map(([term, value]) => (
              <div
                key={term}
                className="border-b border-rule py-4 last:border-b-0 sm:flex sm:flex-wrap sm:justify-between sm:gap-x-8"
              >
                <dt className="text-[0.9rem] text-mute sm:text-[0.95rem]">{term}</dt>
                <dd className="mt-1 text-[1rem] sm:mt-0">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="mt-28 border-t border-rule pt-12">
        <h2 className="display text-[clamp(1.6rem,5vw,2.2rem)]">Also in the shop</h2>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-8">
          {otherProducts(product.slug).map((other) => (
            <li key={other.slug}>
              <Link href={`/collection/${other.slug}`} className="group block">
                <Photo
                  src={other.images[0].src}
                  alt={other.images[0].alt}
                  sizes="(max-width: 640px) 50vw, 30vw"
                  className="aspect-[3/4] w-full"
                />
                <h3 className="mt-4 text-[1.02rem] transition-colors duration-200 group-hover:text-indigo">{other.name}</h3>
                <p className="mt-1 text-[0.9rem] text-mute">{other.fabricShort}</p>
                <p className="mt-1 text-[0.9rem] text-mute">{priceLabel(other.price)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <StickyAsk href={enquiry} label="Ask about this on WhatsApp" />
    </article>
  );
}
