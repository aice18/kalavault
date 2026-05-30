import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';
import { artworkDetails, featuredArtworks } from '@/lib/data';

type ArtworkPageProps = {
  params: { slug: string };
};

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const artwork = artworkDetails.find((item) => item.slug === params.slug);

  if (!artwork) {
    return (
      <main className="min-h-screen bg-background text-on-background">
        <Navbar />
        <section className="px-6 py-20 md:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-black/5 bg-white p-10 shadow-soft">
            <h1 className="text-3xl font-serif">Artwork not found</h1>
            <p className="mt-4 text-on-surface-variant">Please return to the gallery to continue browsing Kala Vault items.</p>
            <Link href="/" className="mt-6 inline-flex rounded-none border border-matte-black px-6 py-3 text-sm uppercase tracking-[0.18em] text-matte-black transition hover:bg-matte-black hover:text-white">
              Back to gallery
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-on-background">
      <Navbar />

      <section className="px-6 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-container-max">
          <nav className="mb-12 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-on-surface-variant">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/" className="hover:text-primary">Contemporary Abstraction</Link>
            <span>/</span>
            <span className="text-primary font-semibold">{artwork.title}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[0.65fr_0.35fr]">
            <div className="space-y-8">
              <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-soft">
                <img src={artwork.image} alt={artwork.title} className="h-[620px] w-full object-cover" />
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {artwork.thumbnails.map((thumb, index) => (
                  <div
                    key={`${thumb}-${index}`}
                    className="overflow-hidden rounded-[16px] border border-black/5 bg-white shadow-soft transition hover:border-primary"
                  >
                    <img src={thumb} alt={`${artwork.title} thumbnail`} className="h-40 w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-10 sticky top-32">
              <div className="rounded-[32px] border border-black/5 bg-white p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.4em] text-on-surface-variant">Featured artwork</p>
                <h1 className="mt-4 text-5xl font-serif leading-tight text-primary">{artwork.title}</h1>
                <p className="mt-3 text-lg italic text-gallery-gold">by {artwork.artist}</p>
                <div className="mt-8 space-y-4 text-sm text-on-surface-variant">
                  <div className="flex justify-between border-b border-black/10 pb-3">
                    <span>Medium</span>
                    <span className="text-primary">{artwork.medium}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 pb-3">
                    <span>Dimensions</span>
                    <span className="text-primary">{artwork.dimensions}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 pb-3">
                    <span>Year</span>
                    <span className="text-primary">{artwork.year}</span>
                  </div>
                  <div className="flex justify-between pb-3">
                    <span>Catalog no.</span>
                    <span className="text-primary">{artwork.catalog}</span>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-on-surface-variant">{artwork.description}</p>
                <div className="mt-8 grid gap-4">
                  <Button className="w-full">Subscribe now ({artwork.price})</Button>
                  <Button variant="ghost" className="w-full">Request consultation</Button>
                </div>
              </div>

              <div className="rounded-[32px] border border-black/5 bg-white p-8 shadow-soft">
                <div className="grid gap-6 sm:grid-cols-2">
                  {artwork.inSitu.map((image) => (
                    <div key={image} className="overflow-hidden rounded-[16px] border border-black/10 bg-surface">
                      <img src={image} alt={`${artwork.title} in situ`} className="h-48 w-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm uppercase tracking-[0.3em] text-on-surface-variant">In Situ</p>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                  Experience the work in premium environments and imagine how it lands in curated spaces.
                </p>
              </div>
            </aside>
          </div>

          <section className="mt-20 border-t border-black/10 pt-20">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Curator Recommendations</p>
                <h2 className="mt-4 text-4xl font-serif text-primary">Similar Acquisitions</h2>
              </div>
              <Link href="/" className="font-label-caps text-label-caps text-primary underline decoration-gallery-gold decoration-2 underline-offset-4 hover:text-secondary-fixed transition-colors">
                View all works
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredArtworks
                .filter((item) => item.slug !== artwork.slug)
                .slice(0, 4)
                .map((item) => (
                  <Link key={item.slug} href={`/artwork/${item.slug}`} className="group cursor-pointer">
                    <div className="aspect-[3/4] overflow-hidden rounded-[24px] border border-transparent bg-surface-container-low transition-all duration-500 group-hover:border-black/10">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="mt-4 font-label-caps text-label-caps mb-1 text-primary">{item.title}</h3>
                    <p className="font-body-sm italic text-on-surface-variant">{item.artist}</p>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
