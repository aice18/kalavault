import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background text-on-background">
      <Navbar />

      <section className="grid min-h-[calc(100vh-80px)] items-center px-6 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[36px] border border-black/5 bg-[#f8f4ee] p-12 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-secondary-fixed">Enterprise portal</p>
            <h1 className="mt-4 text-5xl font-serif leading-tight text-primary">Sign in to Kala Vault client services.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-on-surface-variant">
              Access your subscription dashboard, approve refreshes, review installations, and work directly with your curator team.
            </p>
            <div className="mt-10 space-y-4 rounded-[28px] border border-black/10 bg-white p-6">
              <div className="flex items-center gap-3 text-sm text-matte-black/70">
                <span className="inline-flex h-3 w-3 rounded-full bg-[#c5a059]" />
                Dedicated workspace rotation support
              </div>
              <div className="flex items-center gap-3 text-sm text-matte-black/70">
                <span className="inline-flex h-3 w-3 rounded-full bg-[#c5a059]" />
                Real-time lease and asset tracking
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-black/5 bg-white p-12 shadow-soft">
            <form className="space-y-6">
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
              <Button className="w-full border border-[#c5a059] bg-[#c5a059] text-matte-black hover:bg-[#b59240]">Sign in</Button>
              <div className="flex flex-col gap-3 text-sm text-on-surface-variant sm:flex-row sm:justify-between">
                <span>Forgot password?</span>
                <span className="font-semibold text-matte-black">Contact support</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
