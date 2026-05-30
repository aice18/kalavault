import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';
import { curatedCollections, processSteps, vaultPlans } from '@/lib/data';

export default function VaultPage() {
  return (
    <main className="min-h-screen bg-background text-on-background">
      <Navbar />

      <section className="bg-[#f8f4ee] px-6 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] border border-black/5 bg-white p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Subscriptions</p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <h1 className="text-5xl font-serif leading-tight text-primary sm:text-6xl">Corporate art subscription packages for every workspace scale.</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
                  Kala Vault offers structured monthly leasing, flexible refresh cycles, and premium installation for hotels, offices, clinics, and large-scale projects.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button className="min-w-[220px]">View enterprise plans</Button>
                  <Button variant="ghost" className="min-w-[220px]">Request a proposal</Button>
                </div>
              </div>
              <div className="rounded-[28px] border border-black/5 bg-[#fff8ec] p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Featured capability</p>
                <h2 className="mt-4 text-3xl font-serif text-primary">Subscription-first rotations, managed end to end.</h2>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  Every package includes curated selection, premium installation, and periodic artwork refresh plans to keep your workspace continually elevated.
                </p>
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-matte-black/70">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#c5a059]" />
                    Quarterly or bi-annual refresh options
                  </div>
                  <div className="flex items-center gap-3 text-sm text-matte-black/70">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#c5a059]" />
                    Concierge-grade art logistics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {vaultPlans.map((plan) => (
              <article
                key={plan.tier}
                className={`rounded-[32px] border border-black/5 p-8 shadow-soft ${
                  plan.variant === 'solid' ? 'bg-matte-black text-warm-white' : 'bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm uppercase tracking-[0.2em]">{plan.tier}</span>
                  {plan.badge ? (
                    <span className="rounded-full bg-gallery-gold px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-matte-black">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>
                <h2 className={`mt-6 text-4xl font-serif ${plan.variant === 'solid' ? 'text-warm-white' : ''}`}>{plan.price}</h2>
                <p className={`mt-4 text-sm leading-7 ${plan.variant === 'solid' ? 'text-white/80' : 'text-matte-black/70'}`}>
                  {plan.description}
                </p>
                <ul className={`mt-8 space-y-3 text-sm ${plan.variant === 'solid' ? 'text-white/80' : 'text-matte-black/70'}`}>
                  {plan.details.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
                <Button
                  className={`mt-8 w-full ${
                    plan.variant === 'solid'
                      ? 'bg-gallery-gold text-matte-black hover:bg-[#b59240]'
                      : 'border border-black/10 hover:border-matte-black'
                  }`}
                  variant={plan.variant as 'solid' | 'ghost'}
                >
                  {plan.variant === 'solid' ? 'Subscribe' : 'Enquire'}
                </Button>
              </article>
            ))}
          </div>

          <section className="mt-24 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">How it works</p>
              <h2 className="mt-4 text-4xl font-serif leading-tight text-primary">A deliberate path from selection to rotation.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((step) => (
                <div key={step.number} className="rounded-[28px] border border-black/5 bg-white p-6 shadow-soft">
                  <span className="block text-3xl font-serif text-gallery-gold">{step.number}</span>
                  <h3 className="mt-4 text-2xl font-serif text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-24">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Featured curation</p>
                <h2 className="mt-4 text-4xl font-serif leading-tight text-primary">Collections built for legacy spaces.</h2>
              </div>
              <Button variant="ghost">Explore curated programs</Button>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {curatedCollections.map((collection) => (
                <div key={collection.title} className="overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-soft">
                  <img src={collection.image} alt={collection.title} className="h-72 w-full object-cover" />
                  <div className="p-8">
                    <h3 className="text-2xl font-serif text-primary">{collection.title}</h3>
                    <p className="mt-3 text-sm text-on-surface-variant">{collection.label}</p>
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
