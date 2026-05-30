import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#f9f4eb] border-t border-black/5 text-matte-black">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#c5a059] bg-[#fff8ec] px-4 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#5d4201]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#c5a059] shadow-soft">
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 20V6.5C2 3.46243 4.46243 1 7.5 1H10.5C13.5376 1 16 3.46243 16 6.5V20" stroke="#C5A059" strokeWidth="2"/>
                  <path d="M7.5 15H10.5" stroke="#C5A059" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8.5 11H9.5" stroke="#C5A059" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              Kala Vault
            </div>
            <p className="max-w-sm text-sm leading-7 text-matte-black/70">
              Elevating environments through exclusive artwork leasing, curated installations, and discreet private access.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-matte-black/70">
              <a href="#" className="transition hover:text-primary">Instagram</a>
              <span className="h-1 w-1 rounded-full bg-matte-black/30" />
              <a href="#" className="transition hover:text-primary">LinkedIn</a>
              <span className="h-1 w-1 rounded-full bg-matte-black/30" />
              <a href="#" className="transition hover:text-primary">Email</a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant">Navigation</p>
            <nav className="space-y-3 text-sm text-matte-black/70">
              <Link href="/" className="block hover:text-matte-black">Home</Link>
              <Link href="/gallery" className="block hover:text-matte-black">Collections</Link>
              <Link href="/vault" className="block hover:text-matte-black">Subscriptions</Link>
              <Link href="/services" className="block hover:text-matte-black">Services</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant">Legal</p>
            <div className="space-y-3 text-sm text-matte-black/70">
              <a href="#" className="block hover:text-matte-black">Terms of Service</a>
              <a href="#" className="block hover:text-matte-black">Privacy Policy</a>
              <a href="#" className="block hover:text-matte-black">Press Kit</a>
            </div>
          </div>

          <div className="rounded-[36px] border border-black/5 bg-white p-8 shadow-soft">
            <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant">Join our mailing</p>
            <p className="mt-3 text-sm leading-7 text-matte-black/70">
              Receive preview invitations, release alerts, and curator-led collection drops.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 rounded-none border border-black/10 bg-surface px-4 py-3 text-sm text-matte-black outline-none focus:border-matte-black"
              />
              <button type="submit" className="rounded-none border border-[#c5a059] bg-[#c5a059] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-matte-black transition hover:bg-[#b59240]">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-black/5 pt-6 text-sm text-matte-black/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Kala Vault. All rights reserved.</p>
          <p className="uppercase tracking-[0.35em] text-on-surface-variant">Established MMXXIV</p>
        </div>
      </div>
    </footer>
  );
}
