import Link from 'next/link';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Kala Vault Manifesto',
  description: 'The manifesto behind Kala Vault’s premium art leasing and curatorial philosophy.',
};

export default function ManifestoPage() {
  return (
    <main className="bg-paper-white text-matte-black">
      <section className="relative overflow-hidden border-b border-black/5 bg-[#121212] text-warm-white">
        <img
          src="https://images.unsplash.com/photo-1513384312237-27cd9b3d9658?auto=format&fit=crop&w=1600&q=80"
          alt="Minimalist gallery interior with framed artwork"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-6 py-24 md:px-12 md:py-28">
          <div className="max-w-3xl space-y-8">
            <p className="font-label-caps text-label-caps uppercase tracking-[0.35em] text-[#d9c893]">
              The Manifesto
            </p>
            <h1 className="text-5xl font-black leading-tight tracking-[-0.03em] md:text-[5.5rem] md:leading-[1.02]">
              We are the bridge between studio vision and ambient space.
            </h1>
            <p className="max-w-3xl text-lg leading-9 text-white/80">
              Kala Vault exists so spaces can breathe. We connect artists, estates, and interior creators with collectors who value art as atmosphere, motion, and provenance — not only as an investment.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/">
                <Button>Back to Home</Button>
              </Link>
              <Link href="/gallery">
                <Button variant="ghost">Explore Collections</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="font-label-caps text-label-caps uppercase tracking-[0.35em] text-gallery-gold">
                Our Heritage
              </p>
              <h2 className="text-4xl font-semibold tracking-tight">
                We steward legacy art through modern interiors.
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-matte-black/75">
                From private estates to contemporary residences, our collections are selected for their narrative, texture, and spatial intelligence. We curate with the same rigor as a museum, and deliver with the discretion of a private atelier.
              </p>
              <p className="text-lg leading-8 text-matte-black/75">
                Every piece is chosen to inhabit a room fully — not to sit behind glass. The result is an environment that feels intentional, not staged.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[32px] border border-black/10 bg-white p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-on-surface-variant">Artist Fellowship</p>
                <p className="mt-4 text-base leading-7 text-matte-black/75">
                  We partner directly with artists and estates to surface work that belongs in private commissions and editorial interiors.
                </p>
              </div>
              <div className="rounded-[32px] border border-black/10 bg-white p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-on-surface-variant">Archival Access</p>
                <p className="mt-4 text-base leading-7 text-matte-black/75">
                  Our network provides access to rare works, limited editions, and custom commissions that elevate every room they enter.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-black/10 bg-[#faf5ec] shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
              alt="Art gallery wall with framed pieces and editorial lighting"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#121212cc] via-transparent to-transparent p-8 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">A quiet curation of museum-grade work</p>
              <p className="mt-3 text-2xl font-semibold leading-tight">
                An archive that feels as intimate as it is exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf5ec] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-8 text-center">
            <p className="font-label-caps text-label-caps uppercase tracking-[0.35em] text-gallery-gold">
              The Curation Process
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Thoughtful, exacting, and tailored to every environment.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <article className="rounded-[32px] border border-black/10 bg-white p-10 shadow-soft">
              <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant">Bespoke Audits</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight">Spatial intelligence first</h3>
              <p className="mt-4 text-base leading-7 text-matte-black/75">
                We begin with the room — light, proportion, architecture, and program — then choose art that completes the whole.
              </p>
            </article>
            <article className="rounded-[32px] border border-black/10 bg-white p-10 shadow-soft">
              <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant">Curatorial Direction</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight">A narrative in every frame</h3>
              <p className="mt-4 text-base leading-7 text-matte-black/75">
                We assemble collections that speak to provenance, mood, and the daily life of the space.
              </p>
            </article>
            <article className="rounded-[32px] border border-black/10 bg-white p-10 shadow-soft">
              <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant">Discreet Delivery</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight">Installation without interruption</h3>
              <p className="mt-4 text-base leading-7 text-matte-black/75">
                From custom framing to quiet placement, our service is designed to preserve the calm of your home.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <p className="font-label-caps text-label-caps uppercase tracking-[0.35em] text-gallery-gold">
              Our Global Network
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              A discreet network from London to Los Angeles.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-matte-black/75">
              Our relationships with galleries, estates, and private collectors give clients access to rare works, private viewings, and confidential procurement across major art capitals.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-on-surface-variant">New York</p>
                <p className="mt-3 text-base leading-7 text-matte-black/75">Private consultations, archive previews, and installation coordination.</p>
              </div>
              <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-on-surface-variant">London</p>
                <p className="mt-3 text-base leading-7 text-matte-black/75">Curated partnerships with estates, galleries, and luxury residences.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button>Request a Viewing</Button>
              <Button variant="ghost">Join the Archive</Button>
            </div>
          </div>

          <div className="rounded-[36px] border border-black/10 bg-[#f7f0e6] p-10 shadow-soft">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-on-surface-variant">Experience the Archive</p>
              <h3 className="text-3xl font-semibold leading-tight">Request access to our next private viewing.</h3>
              <p className="text-base leading-7 text-matte-black/75">
                Receive a tailored preview of works matched to your space, taste, and program.
              </p>
              <Button variant="ghost">Book an Appointment</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
