import Link from 'next/link';

type Artwork = {
  slug: string;
  title: string;
  artist: string;
  price: string;
  description?: string;
  image: string;
  badge: string;
};

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <Link href={`/artwork/${artwork.slug}`} className="group block overflow-hidden rounded-[32px] border border-black/5 bg-white transition hover:-translate-y-1 hover:shadow-soft">
      <article>
        <div className="relative overflow-hidden">
          <img src={artwork.image} alt={artwork.title} className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
          <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-matte-black shadow-soft">
            {artwork.badge}
          </span>
        </div>
        <div className="px-6 pb-8 pt-6">
          <p className="text-sm uppercase tracking-[0.18em] text-matte-black/70">{artwork.artist}</p>
          <h3 className="mt-3 text-2xl font-serif leading-tight text-matte-black">{artwork.title}</h3>
          <p className="mt-3 text-sm leading-7 text-matte-black/75">{artwork.description}</p>
          <div className="mt-6 flex items-center justify-between text-sm font-semibold text-matte-black">
            <span className="text-base">{artwork.price}</span>
            <span className="text-sm uppercase tracking-[0.25em] text-gallery-gold">View details</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
