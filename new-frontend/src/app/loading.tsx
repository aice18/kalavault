export default function LoadingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-on-background">
      <div className="relative flex flex-col items-center gap-8 rounded-[36px] border border-outline-variant bg-white/95 p-12 shadow-[0_40px_80px_rgba(197,160,89,0.12)] backdrop-blur-sm">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#c5a059] bg-[#fff8ec] text-[#c5a059] shadow-soft">
          <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 39V11.5C3 6.35786 7.35786 2 12.5 2H23.5C28.6421 2 33 6.35786 33 11.5V39" stroke="#C5A059" strokeWidth="2.4"/>
            <path d="M11 32H25" stroke="#C5A059" strokeWidth="2.4" strokeLinecap="round"/>
            <path d="M13.5 25.5H22.5" stroke="#C5A059" strokeWidth="2.4" strokeLinecap="round"/>
            <path d="M15.5 19H20.5" stroke="#C5A059" strokeWidth="2.4" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="space-y-4">
          <p className="font-label-caps text-label-caps tracking-[0.5em] text-secondary-fixed">THE</p>
          <h1 className="text-5xl font-display-lg text-primary uppercase tracking-[0.2em]">Kala Vault</h1>
          <p className="font-label-caps text-label-caps text-secondary-container tracking-[0.35em]">ELEVATE YOUR WALLS</p>
        </div>
        <div className="w-full max-w-sm space-y-3">
          <div className="h-2 overflow-hidden rounded-full bg-surface-container-low">
            <div className="h-full w-1/3 rounded-full bg-gallery-gold animate-[loadingProgress_2.2s_ease-in-out_infinite]" />
          </div>
          <p className="text-sm text-on-surface-variant">Unlocking the gallery, moments away.</p>
        </div>
      </div>
    </div>
  );
}
