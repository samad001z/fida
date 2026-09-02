import { Photo } from '@/components/Photo';
import { Collection } from '@/components/Collection';
import { StickyAsk } from '@/components/StickyAsk';
import { PrimaryAction, TextLink } from '@/components/Action';
import { Questions } from '@/components/Questions';
import { Wall } from '@/components/Wall';
import { products } from '@/data/products';
import { site, mapQuery, mapsDirectionsUrl, whatsappUrl } from '@/data/site';

/* What the shop makes, grouped the way a customer thinks about it rather than
   the way a catalogue would sort it. The number is what stitching alone costs
   before fabric and work, which is the question everyone asks first. */
const groups: { heading: string; items: [string, string][] }[] = [
  {
    heading: 'Everyday',
    items: [
      ['Kurtis and kurta sets', 'from ₹1,800 to stitch'],
      ['Salwar suits', 'from ₹1,800 to stitch'],
      ['Palazzo and sharara sets', 'from ₹2,200 to stitch'],
    ],
  },
  {
    heading: 'Occasion',
    items: [
      ['Anarkalis', 'from ₹3,400 to stitch'],
      ['Indo-western and gowns', 'from ₹3,800 to stitch'],
      ['Saree blouses', 'from ₹2,500 to stitch'],
    ],
  },
  {
    heading: 'Wedding',
    items: [
      ['Lehengas', 'quoted after the fitting'],
      ['Bridal and family sets', 'quoted after the fitting'],
      ['Kanjeevaram and Banarasi', 'sold by the piece'],
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ---- Hero, asymmetric split -------------------------------------- */}
      <section className="mx-auto grid max-w-[84rem] items-center gap-7 px-0 pt-1 sm:gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:pt-6">
        <Photo
          src="/hero.jpg"
          alt="A deep wine Chanderi silk anarkali hanging against a plain wall in the shop"
          sizes="(max-width: 1024px) 100vw, 52vw"
          priority
          className="uncover aspect-square w-full sm:aspect-[4/5] lg:order-2 lg:aspect-[4/5.2]"
        />

        <div className="px-5 pb-4 sm:px-8 lg:order-1 lg:pl-12">
          <h1 className="settle display text-[clamp(3.1rem,15vw,7rem)]">{site.name}</h1>

          <p
            className="settle mt-5 max-w-md text-[1.1rem] leading-[1.45] text-mute sm:mt-6 sm:text-[1.3rem]"
            style={{ animationDelay: '120ms' }}
          >
            {site.tagline}
          </p>

          <div id="top-action" className="settle mt-8 sm:mt-10" style={{ animationDelay: '240ms' }}>
            <PrimaryAction
              href={whatsappUrl(
                `Hello ${site.fullName}. I was looking at your website and wanted to ask about a garment.`,
              )}
            >
              Message on WhatsApp
            </PrimaryAction>
          </div>

          <p className="settle mt-6 text-[0.95rem] text-mute" style={{ animationDelay: '300ms' }}>
            {site.address.neighbourhood}, {site.address.city}. Open {site.hours[0].time}.
          </p>
        </div>
      </section>

      {/* ---- Collection, editorial grid ---------------------------------- */}
      <section id="collection" className="mx-auto max-w-[84rem] scroll-mt-8 px-5 pt-20 sm:px-8 sm:pt-36 lg:px-12">
        <div className="rise max-w-xl">
          <h2 className="display text-[clamp(1.85rem,5.5vw,2.7rem)]">In the shop now</h2>
          <p className="mt-4 text-mute">
            What is on the rails this week. Sizes move quickly, so it is worth asking before you
            travel. Anything here can also be cut in your size.
          </p>
        </div>

        <Collection products={products} />
      </section>

      {/* ---- What we make, grouped columns ------------------------------- */}
      <section className="mx-auto max-w-[84rem] px-5 pt-24 sm:px-8 sm:pt-40 lg:px-12">
        <div className="rise border-t border-rule pt-12">
          <h2 className="display max-w-2xl text-[clamp(1.85rem,5.5vw,2.7rem)]">
            What we make, and what the stitching costs
          </h2>
          <p className="mt-4 max-w-2xl text-mute">
            Fabric and hand work are priced separately, because they are the part that varies. These
            are the tailoring charges on their own, so you know the floor before you walk in.
          </p>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {groups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-[0.95rem] text-indigo">{group.heading}</h3>
              <dl className="mt-5 space-y-4">
                {group.items.map(([item, price]) => (
                  <div key={item}>
                    <dt className="text-[1.05rem]">{item}</dt>
                    <dd className="text-[0.9rem] text-mute">{price}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Made to measure, full width prose --------------------------- */}
      <section id="measure" className="mx-auto max-w-[84rem] scroll-mt-8 px-5 pt-24 sm:px-8 sm:pt-40 lg:px-12">
        <div className="rise grid gap-8 border-t border-rule pt-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,38rem)] lg:gap-20">
          <h2 className="display text-[clamp(1.85rem,5.5vw,2.7rem)]">Made to measure</h2>
          <div className="space-y-5 text-[1.05rem] leading-[1.65] sm:text-[1.12rem]">
            <p>
              Almost everything here can be cut in your size. You pick the fabric at the shop, or we
              send you photographs of what has come in over WhatsApp and you choose from those.
            </p>
            <p>
              Measurements are taken at the counter and it takes about ten minutes. If you cannot
              come in, send us the measurements from a suit that already fits you well and we will
              work from those, then call you once to check the two that usually go wrong.
            </p>
            <p>
              Plain stitching is ready in ten days. Anything with hand work on it, zardozi, gota,
              chikankari or mirror, takes three to five weeks, and we tell you which it is before you
              leave a deposit.
            </p>
            <p className="text-mute">
              One fitting is included on every made to measure order, and the first alteration after
              you collect is free.
            </p>

            <details className="border-t border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.05rem] transition-colors duration-200 hover:text-indigo">
                How to measure yourself at home
                <span aria-hidden="true" className="marker text-[1.35rem] leading-none text-indigo">
                  +
                </span>
              </summary>
              <div className="pb-6 text-[1rem] leading-[1.7] text-mute">
                <p>
                  Use a cloth tape, stand normally, and keep the tape flat rather than pulled tight.
                  Wear something close-fitting while you do it. Send us these five and we will call
                  you once to check them.
                </p>
                <dl className="mt-5 space-y-3">
                  {[
                    ['Bust', 'Around the fullest part, with the tape level across your back.'],
                    ['Waist', 'The narrowest part, which is where you crease if you bend sideways.'],
                    ['Hip', 'Around the fullest part, standing with your feet together.'],
                    ['Shoulder', 'Across the back, from the point of one shoulder to the other.'],
                    ['Length', 'From the top of the shoulder down to where you want the hem to sit.'],
                  ].map(([term, how]) => (
                    <div key={term}>
                      <dt className="text-ink">{term}</dt>
                      <dd>{how}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5">
                  If you would rather not measure at all, send us a suit that fits you well and we
                  will take the numbers off it and courier it back with the new one.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ---- Wedding orders, split with image ---------------------------- */}
      <section className="mx-auto max-w-[84rem] px-5 pt-24 sm:px-8 sm:pt-40 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <Photo
            src="/products/sitara-lehenga-1.jpg"
            alt="A deep green raw silk lehenga with mirror work, made for a wedding order"
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="aspect-[4/5] w-full"
          />
          <div className="rise">
            <h2 className="display text-[clamp(1.85rem,5.5vw,2.7rem)]">Wedding orders</h2>
            <div className="mt-6 space-y-5 text-[1.05rem] leading-[1.65] sm:text-[1.12rem]">
              <p>
                Bridal and family orders are taken six weeks ahead, and longer between October and
                February when every tailor in the city is already booked. Come in once to choose
                fabric and settle the work, once for the fitting, and once to collect.
              </p>
              <p>
                We take four or five brides a season and no more, because the hand work cannot be
                rushed without it showing. If we cannot give your date the time it needs, we will
                tell you at the first meeting rather than at the third.
              </p>
              <p>
                Sets for the family, sisters, mother, the groom's side, are cut together so the
                colours actually match across garments instead of nearly matching.
              </p>
            </div>
            <p className="mt-8">
              <TextLink
                href={whatsappUrl(
                  `Hello ${site.fullName}. I would like to ask about a wedding order.`,
                )}
                external
              >
                Ask about a wedding order on WhatsApp
              </TextLink>
            </p>
          </div>
        </div>
      </section>

      {/* ---- The boutique, full bleed image ------------------------------ */}
      <section className="mx-auto max-w-[84rem] px-5 pt-24 sm:px-8 sm:pt-40 lg:px-12">
        <p className="rise max-w-2xl text-[clamp(1.4rem,4.6vw,2rem)] leading-[1.35]">
          {site.name} has been on Road No. 36 since {site.establishedYear}, in the same two rooms,
          with the tailoring done at the back rather than sent out.
        </p>
        <Photo
          src="/interior.jpg"
          alt="Inside the Fida shop, with garments on a rail and a cutting counter along the far wall"
          sizes="(max-width: 1024px) 100vw, 80vw"
          className="mt-10 aspect-[16/10] w-full"
        />
      </section>

      {/* ---- Worn by you, customer photographs -------------------------- */}
      <section id="wall" className="mx-auto max-w-[84rem] scroll-mt-8 px-5 pt-24 sm:px-8 sm:pt-40 lg:px-12">
        <div className="rise max-w-xl border-t border-rule pt-12">
          <h2 className="display text-[clamp(1.85rem,5.5vw,2.7rem)]">Worn by you</h2>
          <p className="mt-4 text-mute">
            Outfits leave the rail and become part of weddings, dinners and ordinary Tuesdays. Tag{' '}
            {site.name} in your photograph. With your permission, it joins this wall.
          </p>
        </div>

        <Wall />

        <p>
          <TextLink href={`https://www.instagram.com/${site.instagram}/`} external>
            Show us how you wore it on Instagram
          </TextLink>
        </p>
      </section>

      {/* ---- Questions, disclosure list ---------------------------------- */}
      <section className="mx-auto max-w-[84rem] px-5 pt-24 sm:px-8 sm:pt-40 lg:px-12">
        <div className="rise">
          <h2 className="display text-[clamp(1.85rem,5.5vw,2.7rem)]">Questions people ask</h2>
          <p className="mt-4 max-w-xl text-mute">
            If yours is not here, send it on WhatsApp. Someone in the shop answers, not a machine.
          </p>
        </div>
        <Questions />
      </section>

      {/* ---- Visit, information and map ---------------------------------- */}
      <section id="visit" className="mx-auto max-w-[84rem] scroll-mt-8 px-5 pt-24 sm:px-8 sm:pt-40 lg:px-12">
        <div className="grid gap-10 border-t border-rule pt-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20">
          <h2 className="rise display text-[clamp(1.85rem,5.5vw,2.7rem)]">Visit</h2>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <address className="text-[1.05rem] not-italic leading-[1.7]">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.neighbourhood}, {site.address.city} {site.address.postalCode}
              </address>

              <dl className="space-y-2 text-[1.02rem]">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex flex-wrap gap-x-3">
                    <dt className="text-mute">{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>

              <div className="text-[1.02rem]">
                <p>
                  <TextLink href={`tel:${site.phoneDial}`}>{site.phoneDisplay}</TextLink>
                </p>
                <p>
                  <TextLink href={mapsDirectionsUrl} external>
                    Get directions in Google Maps
                  </TextLink>
                </p>
              </div>

              <p className="max-w-sm text-[0.95rem] leading-relaxed text-mute">
                Basement parking is under the mall, entrance off Road No. 36. It fills up on Saturday
                evenings and through the festival weeks.
              </p>
            </div>

            <div className="aspect-[4/3] w-full bg-paper-lift lg:aspect-auto lg:min-h-[22rem]">
              <iframe
                title={`Map showing ${mapQuery}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <StickyAsk
        href={whatsappUrl(
          `Hello ${site.fullName}. I was looking at your website and wanted to ask about a garment.`,
        )}
        label="Message on WhatsApp"
      />
    </>
  );
}
