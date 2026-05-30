'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';

export default function OnboardingPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  return (
    <main className="min-h-screen bg-background text-on-background">
      <Navbar />

      <section className="grid min-h-[calc(100vh-80px)] items-center px-6 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[36px] border border-black/5 bg-[#f8f4ee] p-12 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Kala Vault onboarding</p>
            <h1 className="mt-4 text-5xl font-serif leading-tight text-primary">Sign in or create your premium account.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-on-surface-variant">
              Join Kala Vault to manage subscriptions, request installations, and keep your curated collection in motion with white-glove support.
            </p>
            <div className="mt-10 space-y-4 rounded-[28px] border border-black/10 bg-white p-6">
              <div className="flex items-center gap-3 text-sm text-matte-black/70">
                <span className="inline-flex h-3 w-3 rounded-full bg-[#c5a059]" />
                Seamless access to your artwork portfolio
              </div>
              <div className="flex items-center gap-3 text-sm text-matte-black/70">
                <span className="inline-flex h-3 w-3 rounded-full bg-[#c5a059]" />
                Fast onboarding for new enterprise clients
              </div>
              <div className="flex items-center gap-3 text-sm text-matte-black/70">
                <span className="inline-flex h-3 w-3 rounded-full bg-[#c5a059]" />
                Secure access, curated account setup, and concierge support
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-black/5 bg-white p-12 shadow-soft">
            <div className="flex gap-4 border-b border-black/10 pb-4">
              <button
                type="button"
                onClick={() => setMode('signin')}
                className={`text-sm uppercase tracking-[0.18em] transition ${mode === 'signin' ? 'border-b-2 border-primary text-primary' : 'text-on-surface-variant hover:text-primary'}`}
              >
                Sign in
              </button>
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`text-sm uppercase tracking-[0.18em] transition ${mode === 'signup' ? 'border-b-2 border-primary text-primary' : 'text-on-surface-variant hover:text-primary'}`}
              >
                Sign up
              </button>
            </div>

            <form className="mt-10 space-y-6">
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm uppercase tracking-[0.2em] text-on-surface-variant">Full name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="mt-3 w-full rounded-none border border-black/10 bg-surface px-4 py-4 text-sm text-matte-black outline-none transition focus:border-matte-black"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm uppercase tracking-[0.2em] text-on-surface-variant">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-3 w-full rounded-none border border-black/10 bg-surface px-4 py-4 text-sm text-matte-black outline-none transition focus:border-matte-black"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-[0.2em] text-on-surface-variant">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-3 w-full rounded-none border border-black/10 bg-surface px-4 py-4 text-sm text-matte-black outline-none transition focus:border-matte-black"
                />
              </div>

              {mode === 'signup' && (
                <div>
                  <label className="block text-sm uppercase tracking-[0.2em] text-on-surface-variant">Company</label>
                  <input
                    type="text"
                    placeholder="Your company or gallery"
                    className="mt-3 w-full rounded-none border border-black/10 bg-surface px-4 py-4 text-sm text-matte-black outline-none transition focus:border-matte-black"
                  />
                </div>
              )}

              <Button className="w-full border border-[#c5a059] bg-[#c5a059] text-matte-black hover:bg-[#b59240]">
                {mode === 'signin' ? 'Sign in' : 'Create account'}
              </Button>
            </form>

            <p className="mt-8 text-sm text-on-surface-variant">
              {mode === 'signin' ? (
                <>New here? <Link href="/onboarding" className="font-semibold text-primary hover:text-matte-black">Create an account</Link>.</>
              ) : (
                <>Already have an account? <Link href="/login" className="font-semibold text-primary hover:text-matte-black">Sign in</Link>.</>
              )}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
