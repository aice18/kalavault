import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';
import { curatedCollections, processSteps } from '@/lib/data';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-on-background">
      <Navbar />

      <section className="bg-[#f8f4ee] px-6 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] border border-black/5 bg-white p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Services</p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <h1 className="text-5xl font-serif leading-tight text-primary sm:text-6xl">Premium art leasing, curation, logistics, and refresh services.</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
                  Kala Vault delivers a seamless subscription experience for companies that want museum-quality artwork without ownership overhead.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button className="min-w-[220px]">Request a service audit</Button>
                  <Button variant="ghost" className="min-w-[220px]">Speak to our team</Button>
                </div>
              </div>
              <div className="rounded-[28px] border border-black/5 bg-[#fff8ec] p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Our expertise</p>
                <h2 className="mt-4 text-3xl font-serif text-primary">Installation, acquisition, and asset lifecycle support.</h2>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  From brief to handover, Kala Vault handles every touchpoint with meticulous attention and transparent reporting.
                </p>
                <div className="mt-8 space-y-3 text-sm text-matte-black/70">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#c5a059]" />
                    Curated asset sourcing
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#c5a059]" />
                    Climate-controlled installation
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#c5a059]" />
                    Rotation planning and insurance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="rounded-[28px] border border-black/5 bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Premium Art Leasing</p>
              <h2 className="mt-4 text-3xl font-serif text-primary">Flexible monthly access.</h2>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                Lease museum-quality artworks on a monthly basis with lower upfront cost and the ability to scale across spaces.
              </p>
            </div>
            <div className="rounded-[28px] border border-black/5 bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Corporate Art Curation</p>
              <h2 className="mt-4 text-3xl font-serif text-primary">Branded spatial storytelling.</h2>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                Custom artwork selection harmonized with architecture, lighting, brand identity, and visitor experience.
              </p>
            </div>
            <div className="rounded-[28px] border border-black/5 bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Workspace Transformation</p>
              <h2 className="mt-4 text-3xl font-serif text-primary">Feature wall programs.</h2>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                End-to-end enhancement for reception, conference, executive, lounge, and signature architectural walls.
              </p>
            </div>
            <div className="rounded-[28px] border border-black/5 bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Refresh Program</p>
              <h2 className="mt-4 text-3xl font-serif text-primary">Rotations that retain momentum.</h2>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                Quarterly, bi-annual, or on-demand swaps to keep your environment inspiring and aligned with seasonal activations.
              </p>
            </div>
          </div>

          <section className="mt-20 rounded-[32px] border border-black/5 bg-[#f8f4ee] p-10 shadow-soft">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Why clients choose Kala Vault</p>
                <h2 className="mt-4 text-4xl font-serif text-primary">End-to-end service with a curator’s point of view.</h2>
              </div>
              <div className="space-y-4 text-sm text-on-surface-variant">
                {processSteps.map((step) => (
                  <div key={step.number}>
                    <span className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">{step.number}</span>
                    <p className="mt-2 text-lg font-semibold text-primary">{step.title}</p>
                    <p className="mt-1 leading-7">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-20">
            <div className="grid gap-6 lg:grid-cols-3">
              {curatedCollections.map((collection) => (
                <div key={collection.title} className="overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-soft">
                  <img src={collection.image} alt={collection.title} className="h-72 w-full object-cover" />
                  <div className="p-8">
                    <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Service case</p>
                    <h3 className="mt-4 text-2xl font-serif text-primary">{collection.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-on-surface-variant">{collection.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
