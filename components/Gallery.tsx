'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { animate, utils } from 'animejs';
import { Photo } from '@/components/Photo';
import { blurMap } from '@/data/blur-map';

type Shot = { src: string; alt: string };

/*
  Every photograph is in the page from the start, stacked on top of one another,
  and switching thumbnails only changes which one is opaque. Nothing is fetched
  when you tap, so there is nothing to wait for. That crossfade stays a CSS
  transition on purpose: it can be fired twice in a second, and a transition
  retargets from wherever it currently is, where a keyframed animation would
  restart from zero and flash.

  Opening the photograph full screen is the opposite case. It happens once, it
  is a new layer arriving, and it can be interrupted halfway by a close, so it
  is animated properly.
*/
export function Gallery({ shots, name }: { shots: Shot[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const sheet = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  const reduced = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function close() {
    if (leaving) return;
    const el = sheet.current;
    openerRef.current?.focus();

    if (!el || reduced()) {
      setZoomed(false);
      return;
    }

    setLeaving(true);
    animate(el, {
      opacity: 0,
      scale: 0.97,
      duration: 180,
      ease: 'outQuad',
      onComplete: () => {
        setZoomed(false);
        setLeaving(false);
      },
    });
  }

  useEffect(() => {
    if (!zoomed) return;

    const el = sheet.current;
    closeRef.current?.focus();

    // Never from scale(0). Nothing in the real world appears out of nothing.
    if (el && !reduced()) {
      animate(el, { opacity: [0, 1], scale: [0.96, 1], duration: 260, ease: 'outExpo' });
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      if (el) utils.remove(el);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoomed]);

  return (
    <div>
      <button
        ref={openerRef}
        type="button"
        onClick={() => setZoomed(true)}
        aria-label={`Open ${name} photograph full screen`}
        className="frame relative block aspect-[4/5] w-full cursor-zoom-in bg-paper-lift"
      >
        {shots.map((shot, i) => (
          <Image
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={i === 0}
            placeholder={blurMap[shot.src] ? 'blur' : 'empty'}
            blurDataURL={blurMap[shot.src]}
            className={`object-cover transition-opacity duration-200 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={i !== current}
          />
        ))}
      </button>

      {shots.length > 1 && (
        <ul className="mt-3 flex gap-3">
          {shots.map((shot, i) => (
            <li key={shot.src} className="w-[22%] max-w-[6.5rem]">
              <button
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Show photograph ${i + 1} of ${shots.length}, ${shot.alt}`}
                aria-pressed={i === current}
                className="block w-full"
              >
                <Photo
                  src={shot.src}
                  alt=""
                  sizes="120px"
                  className={`aspect-square w-full transition-opacity duration-150 ${
                    i === current ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                  }`}
                />
                <span
                  className={`mt-2 block h-px w-full transition-colors duration-200 ${
                    i === current ? 'bg-indigo' : 'bg-transparent'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {zoomed && (
        <div
          ref={sheet}
          role="dialog"
          aria-modal="true"
          aria-label={`${name}, photograph ${current + 1} of ${shots.length}`}
          className="fixed inset-0 z-50 flex flex-col bg-paper"
        >
          <div className="flex justify-end p-4">
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="draw min-h-[3rem] px-4 py-3 text-[0.98rem]"
            >
              Close
            </button>
          </div>
          <div className="relative flex-1">
            <Image
              src={shots[current].src}
              alt={shots[current].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <p className="p-5 text-center text-[0.9rem] text-mute">
            {current + 1} of {shots.length}
          </p>
        </div>
      )}
    </div>
  );
}
