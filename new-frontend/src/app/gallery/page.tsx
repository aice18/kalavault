import { ArtworkCard } from '@/components/ArtworkCard';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';
import { curatedCollections, featuredArtworks, galleryFilters } from '@/lib/data';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background text-on-background">
      <Navbar />

      <section className="bg-[#f8f4ee] px-6 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] border border-black/5 bg-white p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Collections</p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h1 className="text-5xl font-serif leading-tight text-primary sm:text-6xl">Workspace collections built for corporate and hospitality spaces.</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
                  Explore premium leasing categories curated for executive cabins, lobbies, conference rooms, and luxury commercial environments.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button className="min-w-[220px]">View curated packages</Button>
                  <Button variant="ghost" className="min-w-[220px]">Request a portfolio review</Button>
                </div>
              </div>
              <div className="rounded-[28px] border border-black/5 bg-[#fbf6ec] p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Featured collection</p>
                <h2 className="mt-4 text-3xl font-serif text-primary">Executive statement suite</h2>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  A high-impact portfolio optimized for boardrooms, hospitality reception zones, and curated corporate lobbies.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 text-sm uppercase tracking-[0.2em] text-matte-black/70">
                  <span>12 artworks</span>
                  <span className="h-1 w-1 rounded-full bg-matte-black/30" />
                  <span>Starting ₹60K/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-black/10 bg-[#111111] text-white shadow-soft overflow-hidden">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] items-stretch">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80"
                alt="Luxury gallery room with large-scale artwork"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-10">
                <p className="text-xs uppercase tracking-[0.35em] text-[#d9c893]">Whole artwork place</p>
                <h2 className="mt-4 text-4xl font-serif leading-tight">A complete artwork destination for modern interiors.</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
                  Discover a layered collection of statement pieces, quiet anchors, and sculptural installations designed to define an entire room — from entrance to gallery wall.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 bg-[#0f0f0f] p-10">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.35em] text-[#d9c893]">An environment that feels curated</p>
                <h3 className="text-3xl font-serif">Premium, seamless, and unmistakably refined.</h3>
                <p className="text-sm leading-7 text-white/70">
                  Every artwork is selected to work in harmony with luxury architecture, ambient lighting, and tactile materials. This is not a catalog — it is a fully realized art place.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Curatorial service</p>
                  <p className="mt-3 text-sm leading-7 text-white/75">White-glove sourcing, bespoke installation, and private preview coordination.</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Spatial mastery</p>
                  <p className="mt-3 text-sm leading-7 text-white/75">Artworks conceived to inhabit each wall, suite, and corridor with grace.</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Editorial curation</p>
                  <p className="mt-3 text-sm leading-7 text-white/75">A refined edit of premium statement works, gallery anchors, and supportive accents.</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Luxury access</p>
                  <p className="mt-3 text-sm leading-7 text-white/75">Rare pieces available for lease, curated for hospitality and executive spaces.</p>
                </div>
              </div>

              <div className="rounded-[28px] bg-[#1b1b1b] p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-[#d9c893]">Featured installation</p>
                <p className="mt-3 text-2xl font-semibold leading-tight text-white">The Statement Gallery Suite</p>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  A premium collection assembled for a full-room experience — large-scale works, sculptural accents, and gallery-grade finishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Whole artwork place</p>
              <h2 className="mt-3 text-4xl font-serif text-primary">The collection, elevated with premium discovery tools.</h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-on-surface-variant">
              <span>Sort by</span>
              <select className="rounded-none border border-black/10 bg-white px-4 py-3 text-sm text-matte-black outline-none transition focus:border-matte-black">
                <option>Newest arrivals</option>
                <option>Availability</option>
              </select>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
            <aside className="rounded-[32px] border border-black/5 bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Browse by Type</p>
              <div className="mt-8 space-y-4">
                {galleryFilters.map((filter) => (
                  <div key={filter.label} className="flex items-center justify-between rounded-[18px] border border-black/10 bg-[#fbf8f2] px-4 py-3 text-sm text-matte-black">
                    <span>{filter.label}</span>
                    <span className="text-secondary-fixed">{filter.count}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-black/10 pt-8">
                <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Collection mode</p>
                <div className="mt-5 space-y-4 text-sm text-matte-black/80">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 accent-[#c5a059]" />
                    Quarterly rotation
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 accent-[#c5a059]" />
                    White-glove logistics
                  </label>
                </div>
              </div>
            </aside>

            <div className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {featuredArtworks.map((artwork) => (
                  <ArtworkCard key={artwork.slug} artwork={artwork} />
                ))}
              </div>

              <div className="rounded-[32px] border border-black/5 bg-[#fff8ec] p-8 shadow-soft">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Corporate portfolio</p>
                    <h3 className="mt-4 text-3xl font-serif text-primary">Monthly leasing programs designed for scalable workplaces.</h3>
                  </div>
                  <Button variant="ghost">Schedule a review</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {curatedCollections.map((collection) => (
              <div key={collection.title} className="overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-soft">
                <img src={collection.image} alt={collection.title} className="h-72 w-full object-cover" />
                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Collection</p>
                  <h3 className="mt-4 text-2xl font-serif text-primary">{collection.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-on-surface-variant">{collection.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
