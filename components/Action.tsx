import Link from 'next/link';

/** The filled indigo button. One of these per screen, never two side by side. */
export function PrimaryAction({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="action inline-flex min-h-[3.25rem] w-full items-center justify-center bg-indigo px-8 py-4 text-[0.98rem] font-medium text-paper sm:w-auto"
    >
      {children}
    </a>
  );
}

/*
  A quiet text link. The rule underneath draws in from the left on hover.

  inline-block with vertical padding is what gives it a 44px tap area on a
  phone without moving anything: the padding grows the hit box, the underline
  still sits on the text baseline. Every one of these stands on its own line,
  so the extra height never disturbs a paragraph.
*/
export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="draw inline-block py-2">
      {children}
    </a>
  ) : (
    <Link href={href} className="draw inline-block py-2">
      {children}
    </Link>
  );
}
