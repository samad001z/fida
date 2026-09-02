'use client';

import { useEffect, useRef } from 'react';
import { animate, utils } from 'animejs';

/*
  On a phone the real button scrolls away within one flick, and everything
  after that point is a customer reading about a garment with no way to ask
  about it. This bar exists for exactly that stretch.

  It watches the real button rather than a scroll position, so it appears when
  the button is genuinely gone and disappears the moment it is back on screen.
  There is never a moment where both are visible competing for the same tap.
*/
export function StickyAsk({ href, label }: { href: string; label: string }) {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bar.current;
    const watched = document.getElementById('top-action');
    if (!el || !watched) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let out = false;

    /* Read the button's live position rather than the entry snapshot. The
       snapshot is taken when the callback is queued, which loses a race
       against the browser restoring a scroll position on a back navigation
       and can leave the bar showing over a button that is on screen. */
    const settle = () => {
      const gone = watched.getBoundingClientRect().bottom < 0;
      if (gone === out) return;
      out = gone;

      /* inert, not aria-hidden. aria-hidden on a box containing a link hides
         it from a screen reader while leaving it in the tab order, so a
         keyboard lands on a button nobody can see. inert removes it from
         both at once. */
      el.inert = !gone;

      if (reduce.matches) {
        el.style.transform = gone ? 'none' : 'translateY(115%)';
        return;
      }

      animate(el, {
        translateY: gone ? '0%' : '115%',
        duration: gone ? 340 : 220,
        ease: gone ? 'outExpo' : 'outQuad',
      });
    };

    const observer = new IntersectionObserver(settle, { threshold: 0 });
    observer.observe(watched);
    return () => {
      observer.disconnect();
      utils.remove(el);
    };
  }, []);

  return (
    <div
      ref={bar}
      inert
      style={{ transform: 'translateY(115%)' }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper/95 p-3 backdrop-blur-sm sm:hidden"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="action flex min-h-[3.25rem] items-center justify-center bg-indigo px-6 text-[0.98rem] font-medium text-paper"
      >
        {label}
      </a>
    </div>
  );
}
