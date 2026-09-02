import Link from 'next/link';
import { Photo } from '@/components/Photo';
import { features } from '@/data/features';

/**
 * Worn by you. A marquee of tilted photographs drifting to the right.
 *
 * THE CURVE. A single arch cannot loop. Translate the strip and the arch
 * travels with it, so after one pass the arch would slide off and a second one
 * would slide in behind it, which reads as a wobble rather than as a shape.
 * The curve here is a sine wave instead, one full period across the set, so it
 * meets itself exactly at the seam and the loop is invisible. Each card is
 * handed two numbers and the stylesheet does the rest:
 *
 *   --d   how far down the wave it sits, 0 at the crest to 1 at the trough.
 *   --s   the slope of the wave under it, -1 to 1, which is its tilt.
 *
 * THE LOOP. The set is rendered twice and the track slides one whole set to
 * the right, so the moment the animation restarts the second copy is sitting
 * exactly where the first one was. Nothing fades, nothing jumps.
 *
 * The second copy is `inert`, not `aria-hidden`. Both hide it from a screen
 * reader, but aria-hidden would leave eight links in the tab order pointing at
 * something nobody can see, which is the same trap the sticky bar fell into.
 */
export function Wall() {
  const n = features.length;

  const cards = (copy: number) =>
    features.map((f, i) => {
      const phase = (i / n) * 2 * Math.PI;

      return (
        <li
          key={`${copy}-${f.image}`}
          className="wall-card shrink-0"
          style={
            {
              '--d': (1 - Math.cos(phase)) / 2,
              '--s': Math.sin(phase),
            } as React.CSSProperties
          }
        >
          <Link
            href={f.postUrl ?? `/collection/${f.slug}`}
            {...(f.postUrl ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group block"
          >
            <Photo
              src={f.image}
              alt={f.alt}
              sizes="(max-width: 640px) 30vw, 10rem"
              className="aspect-[4/5] w-full border border-rule"
            />
            <p className="mt-2 text-[0.8rem] leading-tight">
              {f.name}
              <span className="block text-mute">{f.garment}</span>
            </p>
          </Link>
        </li>
      );
    });

  return (
    <div
      className="wall -mx-5 mt-12 sm:-mx-8 lg:-mx-12"
      role="group"
      aria-label="People wearing outfits from Fida"
    >
      <div className="wall-track flex w-max">
        <ul className="wall-set flex shrink-0">{cards(0)}</ul>
        {/* The copy makes the loop seamless and is never interactive. */}
        <ul className="wall-set flex shrink-0" aria-hidden="true" inert>
          {cards(1)}
        </ul>
      </div>
    </div>
  );
}
