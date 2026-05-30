import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';
import { dashboardData } from '@/lib/data';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background text-on-background">
      <Navbar />

      <section className="px-6 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Client portal</p>
              <h1 className="mt-4 text-5xl font-serif leading-tight text-primary sm:text-6xl">Manage subscriptions, installations, and refresh cycles with clarity.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
                Track active leases, approve swaps, and stay ahead of refresh timelines through Kala Vault’s enterprise dashboard.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {dashboardData.stats.map((stat) => (
                <article key={stat.label} className="rounded-[28px] border border-black/5 bg-white p-8 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.2em] text-secondary-fixed">{stat.label}</p>
                  <p className="mt-5 text-3xl font-serif text-primary">{stat.value}</p>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">{stat.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-[32px] border border-black/5 bg-white p-8 shadow-soft">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-secondary-fixed">Active leases</p>
                  <h2 className="mt-3 text-3xl font-serif text-primary">Current office installations</h2>
                </div>
                <Button variant="ghost">Sync refresh plan</Button>
              </div>
              <div className="mt-10 space-y-6">
                {dashboardData.activeLeases.map((lease) => (
                  <div key={lease.title} className="grid gap-4 sm:grid-cols-[120px_1fr] items-center border-t border-black/5 pt-6">
                    <img src={lease.image} alt={lease.title} className="h-28 w-full object-cover" />
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary-fixed">
                        <span>{lease.status}</span>
                        <span className="text-on-surface-variant">Due {lease.due}</span>
                      </div>
                      <h3 className="mt-3 text-xl font-serif text-primary">{lease.title}</h3>
                      <p className="mt-2 text-sm text-on-surface-variant">{lease.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[32px] border border-black/5 bg-white p-8 shadow-soft">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-secondary-fixed">Activity timeline</p>
                <h2 className="mt-3 text-3xl font-serif text-primary">Recent client events</h2>
              </div>
              <div className="mt-10 space-y-6">
                {dashboardData.timeline.map((event) => (
                  <div key={event.headline} className="space-y-2 border-t border-black/5 pt-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-secondary-fixed">{event.date}</p>
                    <h3 className="text-xl font-serif text-primary">{event.headline}</h3>
                    <p className="text-sm leading-7 text-on-surface-variant">{event.detail}</p>
                    {event.action ? (
                      <Button variant="ghost" className="px-3 py-2 text-sm">
                        {event.action}
                      </Button>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
