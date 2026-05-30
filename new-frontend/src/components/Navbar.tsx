import Link from 'next/link';
import { navigation } from '@/lib/data';

export function Navbar() {
  const navItems = navigation.filter((item) => item.label !== 'Login' && item.label !== 'Dashboard');

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-transparent backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 md:px-8">
        <a href="/" className="flex items-center gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37] bg-black text-[#d4af37] shadow-[0_14px_40px_rgba(0,0,0,0.15)]">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2 22V7.5C2 4.46243 4.46243 2 7.5 2H12.5C15.5376 2 18 4.46243 18 7.5V22" stroke="#d4af37" strokeWidth="2"/>
              <path d="M7.5 17H12.5" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8.5 12H11.5" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9.5 8H10.5" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <div className="space-y-0.5">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37]">The</p>
            <p className="text-2xl font-serif tracking-[0.22em] bg-gradient-to-r from-[#d4af37] via-[#f7e09f] to-[#b0871d] bg-clip-text text-transparent font-semibold" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.15)' }}>
              Kala Vault
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-[#d6b771] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#f3e0b1]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="hidden text-sm uppercase tracking-[0.18em] text-[#d6b771] transition hover:text-[#f3e0b1] md:inline-flex">
            Dashboard
          </Link>
          <Link href="/onboarding" className="hidden text-sm uppercase tracking-[0.18em] text-[#d6b771] transition hover:text-[#f3e0b1] md:inline-flex">
            Sign up
          </Link>
          <a href="/login" className="hidden rounded-none border border-[#d6b771] bg-transparent px-6 py-3 text-sm uppercase tracking-[0.18em] text-[#d6b771] transition hover:border-[#f3e0b71a] hover:text-[#f3e0b1] md:inline-flex">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
