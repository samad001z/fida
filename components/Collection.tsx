'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { animate, stagger, utils } from 'animejs';
import { Photo } from '@/components/Photo';
import { priceLabel, occasions, type Occasion, type Product } from '@/data/products';

/*
  THE COLLECTION, AND THE ONE PLACE THIS SITE NEEDS A REAL ANIMATION ENGINE.

  Filtering re-shapes the grid. Twelve garments become four, the rows are
  rebuilt, and every remaining tile lands somewhere it was not before. Done
  plainly, that is a teleport: the page blinks and the customer loses her place.
  CSS cannot animate a grid reflow, so this is the case that earns the library.

  The sequence is out, then swap, then in. Nothing animates on first paint.
*/

/* ---- the grid ---------------------------------------------------------

   Rows are twelve columns wide and are built from these shapes, so the
   garments in a row get different widths. The shape of each photograph is
   then set to span/height, which makes everything in a row come out level.
   That is what stops an uneven grid looking scattered rather than composed.
   The row height changes as you go down, which is what stops it looking
   like a grid at all.

   It rebuilds itself for any number of garments, so the owner can add a
   thirteenth without the last row breaking.                              */

const rowHeights = [8, 7, 6, 7];

function shapeFor(left: number, row: number): number[] {
  if (left >= 5) return [[7, 5], [5, 4, 3], [3, 4, 5], [6, 6]][row % 4];
  return { 1: [7], 2: [7, 5], 3: [5, 4, 3], 4: [7, 5] }[left] ?? [6, 6];
}

type Tile = { span: number; height: number; wide: boolean };

function layoutFor(count: number): Tile[] {
  const tiles: Tile[] = [];
  for (let row = 0; tiles.length < count; row++) {
    const height = rowHeights[row % rowHeights.length];
    for (const span of shapeFor(count - tiles.length, row)) {
      if (tiles.length >= count) break;
      tiles.push({ span, height, wide: false });
    }
  }

  /* On a phone it is two columns. A wide plate every fifth garment breaks the
     rhythm, and if that would leave the last garment sitting alone at the end
     of a row, it runs full width instead of looking like a mistake. */
  let col = 0;
  tiles.forEach((tile, i) => {
    tile.wide = i === 0 || i % 5 === 0;
    if (tile.wide) col = 0;
    else col = (col + 1) % 2;
  });
  const last = tiles[tiles.length - 1];
  if (last && !last.wide && col === 1) last.wide = true;

  return tiles;
}

/* ---- component -------------------------------------------------------- */

type Choice = 'Everything' | Occasion;
const choices: Choice[] = ['Everything', ...occasions];

export function Collection({ products }: { products: Product[] }) {
  const root = useRef<HTMLDivElement>(null);
  const settled = useRef(false);
  const [choice, setChoice] = useState<Choice>('Everything');

  /*
    Three phases, and they have to be separate.

    'out'  the garments leaving are still on screen and must stay visible
           while they animate away.
    'in'   the replacements have been rendered and must start invisible, so
           there is never a frame of them sitting in the old arrangement.
    'idle' nothing is moving and React owns the styles again.

    Collapsing 'out' and 'in' into one boolean sets opacity to zero on the
    outgoing tiles the moment the flag flips, which kills the animation the
    flag was raised for.
  */
  const [phase, setPhase] = useState<'idle' | 'out' | 'in'>('idle');

  const shown =
    choice === 'Everything' ? products : products.filter((p) => p.occasion === choice);
  const tiles = layoutFor(shown.length);

  const cards = () => root.current?.querySelectorAll<HTMLElement>('[data-tile]') ?? [];

  function choose(next: Choice) {
    if (next === choice || phase !== 'idle') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setChoice(next);
      return;
    }

    setPhase('out');
    animate(cards(), {
      opacity: 0,
      translateY: -6,
      duration: 190,
      ease: 'outQuad',
      delay: stagger(16),
      onComplete: () => {
        setChoice(next);
        setPhase('in');
      },
    });
  }

  useEffect(() => {
    if (!settled.current) {
      settled.current = true;
      return;
    }
    if (phase !== 'in') return;

    animate(cards(), {
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 420,
      ease: 'outExpo',
      delay: stagger(42),
      onComplete: () => setPhase('idle'),
    });
  }, [choice, phase]);

  // Only on unmount. Removing animations any earlier would cancel the one
  // currently running.
  useEffect(
    () => () => {
      utils.remove('[data-tile]');
    },
    [],
  );

  return (
    <div ref={root}>
      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter the collection">
        {choices.map((c) => {
          const on = c === choice;
          return (
            <button
              key={c}
              type="button"
              onClick={() => choose(c)}
              aria-pressed={on}
              className={`min-h-[2.75rem] border px-5 py-2 text-[0.95rem] transition-colors duration-200 ${
                on
                  ? 'border-indigo bg-indigo text-paper'
                  : 'border-rule text-mute hover:border-mute hover:text-ink'
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {shown.length} garments shown.
      </p>

      <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-12 sm:gap-x-6 sm:gap-y-20 lg:gap-x-8">
        {shown.map((product, i) => {
          const tile = tiles[i];
          return (
            <li
              key={product.slug}
              data-tile
              className="tile"
              style={
                {
                  '--mspan': tile.wide ? 2 : 1,
                  '--mratio': tile.wide ? '4 / 5' : '3 / 4',
                  '--span': tile.span,
                  '--ratio': `${tile.span} / ${tile.height}`,
                  ...(phase === 'in' ? { opacity: 0 } : null),
                } as React.CSSProperties
              }
            >
              <Link href={`/collection/${product.slug}`} className="group flex h-full flex-col">
                <Photo
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  sizes={`(max-width: 640px) ${tile.wide ? 100 : 50}vw, ${Math.round(
                    (tile.span / 12) * 92,
                  )}vw`}
                  className="min-h-0 w-full flex-1"
                />
                <h3 className="mt-4 text-[1.05rem] transition-colors duration-200 group-hover:text-indigo">
                  {product.name}
                </h3>
                <p className="mt-1 text-[0.9rem] text-mute">{product.fabricShort}</p>
                <p className="mt-1 text-[0.9rem] text-mute">{priceLabel(product.price)}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
