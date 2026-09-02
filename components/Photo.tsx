import Image from 'next/image';
import { blurMap } from '@/data/blur-map';

type Props = {
  src: string;
  alt: string;
  /** How wide the photograph will actually be drawn, per breakpoint. */
  sizes: string;
  /** Aspect ratio classes go here, e.g. "aspect-[4/5]". */
  className?: string;
  priority?: boolean;
};

/**
 * Every photograph on the site goes through here. The box is reserved at its
 * final size before anything loads, and a twelve-pixel version of the picture
 * is painted into it in the meantime, so the layout never jumps and the page
 * never flashes an empty grey rectangle.
 */
export function Photo({ src, alt, sizes, className = '', priority = false }: Props) {
  const blur = blurMap[src];

  return (
    <div className={`frame relative bg-paper-lift ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        {...(blur ? { placeholder: 'blur' as const, blurDataURL: blur } : {})}
      />
    </div>
  );
}
