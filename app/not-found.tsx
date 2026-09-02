import { TextLink } from '@/components/Action';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[84rem] px-5 py-24 sm:px-8 lg:px-12">
      <h1 className="display text-[clamp(2rem,7vw,3rem)]">That page is not here</h1>
      <p className="mt-5 max-w-md text-mute">
        The garment may have been sold, or the address may have been typed slightly wrong.
      </p>
      <p className="mt-8">
        <TextLink href="/#collection">See what is in the shop now</TextLink>
      </p>
    </div>
  );
}
