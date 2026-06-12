import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

export default function Subscriptions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-paper-white text-primary font-body-lg overflow-x-hidden min-h-screen selection:bg-gallery-gold/30 flex flex-col">
      <TopNavBar />

      <main className="pt-[160px] md:pt-[240px] pb-32 flex-grow">
        <section className="px-8 md:px-16 max-w-[1600px] mx-auto mb-32 flex flex-col items-center text-center pb-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
               <div className="h-[1px] w-12 bg-gallery-gold/40"></div>
               <span className="font-label-caps text-[10px] uppercase tracking-[0.4em] text-gallery-gold">Acquisition Programs</span>
               <div className="h-[1px] w-12 bg-gallery-gold/40"></div>
            </div>
            <h1 className="font-display-lg text-6xl md:text-8xl lg:text-[7rem] text-primary tracking-tighter mb-8 leading-[0.9]">
               Corporate<br/><span className="text-gallery-gold italic font-headline-md tracking-normal">Suites</span>
            </h1>
            <p className="font-headline-md italic text-on-surface-variant text-2xl md:text-3xl max-w-3xl mx-auto mb-12 font-light">
               Comprehensive curation frameworks designed for multi-room integration and rotating galleries.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-8 md:gap-16 relative z-10 mt-8"
          >
            <a href="#core-suites" className="font-label-caps text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-primary hover:text-gallery-gold transition-colors duration-300 border-b border-gallery-gold/30 hover:border-gallery-gold pb-2">Core Suites</a>
            <a href="#scale-portfolios" className="font-label-caps text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-primary hover:text-gallery-gold transition-colors duration-300 border-b border-gallery-gold/30 hover:border-gallery-gold pb-2">Scale Portfolios</a>
          </motion.div>
          <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gallery-gold/50 to-transparent"></div>
        </section>

        <section id="core-suites" className="px-8 md:px-16 max-w-[1600px] mx-auto scroll-mt-32">
          <div className="flex flex-col mb-24 text-center items-center">
            <span className="font-label-caps text-[10px] uppercase tracking-[0.4em] text-gallery-gold mb-6 block">Section I</span>
            <h2 className="font-display-lg text-5xl md:text-6xl text-primary tracking-tight mb-8">Subscription Packages</h2>
          </div>
          {/* Subscriptions Grid / List (Editorial) */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-8 mb-32 max-w-7xl mx-auto justify-center items-stretch">
             
             {/* The Standard Collection */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="flex flex-col group relative overflow-hidden w-full lg:w-1/3 border border-gallery-gold/20 shadow-[0_20px_60px_-15px_rgba(212,175,55,0.06)] bg-white"
             >
                 <div className="p-8 md:p-10 flex flex-col flex-grow bg-white hover:bg-subtle-smoke transition-colors duration-700 relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gallery-gold/5 to-transparent pointer-events-none" />
                    
                    <span className="font-label-caps text-[11px] uppercase tracking-[0.4em] text-primary/40 group-hover:text-gallery-gold transition-colors duration-500 mb-6 block font-semibold">Standard Tier</span>
                    <h3 className="font-display-lg text-3xl md:text-4xl text-primary mb-6 tracking-tight">The Standard Collection</h3>
                    
                    <div className="font-body-md text-primary pb-8 border-b border-gallery-gold/20 group-hover:border-gallery-gold/40 transition-colors duration-500 mb-8 flex flex-col">
                       <span className="font-display-lg text-4xl font-light tracking-tighter">₹79,999</span> 
                       <span className="text-on-surface-variant font-label-caps text-[10px] tracking-widest mt-2 uppercase">/ Subscription</span>
                    </div>
                    
                    <p className="font-body-sm text-on-surface-variant leading-relaxed mb-8 font-light min-h-[70px]">
                       A ready-to-start boutique package featuring hand-picked art pieces tailored to refresh your lobby, café, or small office space.
                    </p>
                    
                    <ul className="space-y-3 font-body-sm text-[13px] text-on-surface-variant mb-10 list-none pl-0">
                       <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> 10–12 Artworks per year</li>
                       <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> 2x Swaps per year</li>
                       <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> Small & Medium sizes</li>
                       <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> Canvas & Fine Art Prints</li>
                       <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> Delivery within 5–7 days</li>
                    </ul>
                    
                    <Link to="/inquire" className="mt-auto flex items-center justify-center gap-4 py-4 px-8 font-label-caps text-[11px] uppercase tracking-[0.2em] transition-all bg-primary border border-primary hover:bg-gallery-gold hover:border-gallery-gold text-white focus:outline-none w-full group/btn">
                        <span>Select Standard</span>
                        <span className="material-symbols-outlined text-[14px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                 </div>
             </motion.div>

             {/* The Premium Collection (Featured Flagship Tier) */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className="flex flex-col group relative overflow-hidden w-full lg:w-1/3 border border-gallery-gold/50 shadow-2xl bg-primary"
             >
                 <div className="p-8 md:p-10 flex flex-col flex-grow bg-primary text-white transition-colors duration-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gallery-gold/5 opacity-5 mix-blend-overlay pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gallery-gold/20 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                       <span className="font-label-caps text-[11px] uppercase tracking-[0.4em] text-gallery-gold mb-6 block font-semibold flex items-center gap-2">
                          <span className="w-1.5 h-1.5 border border-gallery-gold rotate-45 inline-block bg-gallery-gold animate-pulse"></span>
                          Flagship Premium
                       </span>
                       <h3 className="font-display-lg text-3xl md:text-4xl text-white mb-6 tracking-tight">The Premium Collection</h3>
                       
                       <div className="font-body-md text-white pb-8 border-b border-gallery-gold/30 mb-8 flex flex-col">
                          <span className="font-display-lg text-4xl text-gallery-gold font-light tracking-tighter">₹1,59,999</span> 
                          <span className="text-white/60 font-label-caps text-[10px] tracking-widest mt-2 uppercase">/ Subscription</span>
                       </div>
                       
                       <p className="font-body-sm text-white/80 leading-relaxed mb-8 font-light min-h-[70px]">
                          Designed for mid-sized enterprises and luxury hospitality settings that demand a complete, statement-making artistic makeover.
                       </p>
                       
                       <ul className="space-y-3 font-body-sm text-[13px] text-white/70 mb-10 list-none pl-0">
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> 15–20 Artworks per year</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> 3x Swaps per year</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> Medium & Large sizes</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> Originals & Sculptures</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> Dedicated Curator Support</li>
                       </ul>
                       
                       <Link to="/inquire" className="mt-auto flex items-center justify-center gap-4 bg-gallery-gold border border-gallery-gold py-4 px-8 font-label-caps text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-white hover:border-white text-primary w-full group/btn relative overflow-hidden focus:outline-none">
                           <span className="relative z-10">Select Premium</span>
                           <span className="relative z-10 material-symbols-outlined text-[14px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                       </Link>
                    </div>
                 </div>
             </motion.div>

             {/* The Enterprise Collection */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="flex flex-col group relative overflow-hidden w-full lg:w-1/3 border border-primary/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.04)] bg-white"
             >
                 <div className="p-8 md:p-10 flex flex-col flex-grow bg-white hover:bg-subtle-smoke transition-colors duration-700 relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
                    
                    <span className="font-label-caps text-[11px] uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors duration-500 mb-6 block font-semibold">Custom Tier</span>
                    <h3 className="font-display-lg text-3xl md:text-4xl text-primary mb-6 tracking-tight">The Enterprise Collection</h3>
                    
                    <div className="font-body-md text-primary pb-8 border-b border-primary/10 group-hover:border-primary/20 transition-colors duration-500 mb-8 flex flex-col">
                       <span className="font-display-lg text-4xl font-light tracking-tighter">Custom Pricing</span> 
                       <span className="text-on-surface-variant font-label-caps text-[10px] tracking-widest mt-2 uppercase">Bespoke Scaling</span>
                    </div>
                    
                    <p className="font-body-sm text-on-surface-variant leading-relaxed mb-8 font-light min-h-[70px]">
                       For large-scale projects, institutions, and multi-location networks. A custom-curated signature art experience designed to match your brand narrative.
                    </p>
                    
                    <ul className="space-y-3 font-body-sm text-[13px] text-on-surface-variant mb-10 list-none pl-0">
                       <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> Unlimited Artworks</li>
                       <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> Custom swaps as needed</li>
                       <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> Bespoke & Architectural sizes</li>
                       <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> Murals, Sculptures & Commissions</li>
                       <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-gallery-gold">check</span> 24/7 Priority Curator Support</li>
                    </ul>
                    
                    <Link to="/inquire" className="mt-auto flex items-center justify-center gap-4 py-4 px-8 font-label-caps text-[11px] uppercase tracking-[0.2em] transition-all bg-white border border-primary hover:bg-primary hover:text-white text-primary focus:outline-none w-full group/btn">
                        <span>Inquire Enterprise</span>
                        <span className="material-symbols-outlined text-[14px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                 </div>
             </motion.div>
          </div>

          {/* Feature Comparison Table */}
          <div className="max-w-5xl mx-auto w-full mb-32 border border-gallery-gold/20 bg-white shadow-sm overflow-hidden">
             <div className="grid grid-cols-4 font-label-caps text-[10px] uppercase tracking-[0.2em] text-primary/60 border-b border-gallery-gold/20 bg-subtle-smoke">
                <div className="p-6 md:p-8 font-semibold text-primary">Capabilities</div>
                <div className="p-6 md:p-8 text-center border-l border-gallery-gold/20 font-semibold text-on-surface-variant">Standard</div>
                <div className="p-6 md:p-8 text-center border-l border-gallery-gold/20 font-semibold text-gallery-gold">Premium</div>
                <div className="p-6 md:p-8 text-center border-l border-gallery-gold/20 font-semibold text-primary">Enterprise</div>
             </div>
             
             <div className="grid grid-cols-4 divide-x divide-gallery-gold/20 border-b border-gallery-gold/10 font-body-sm text-[13px] md:text-[14px] hover:bg-subtle-smoke/50 transition-colors">
                <div className="p-6 md:p-8 flex items-center text-primary font-medium">Collection Size</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-on-surface-variant">10–12 artworks/yr</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-primary bg-primary/5 font-medium">15–20 artworks/yr</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-on-surface-variant font-medium">Unlimited / Custom</div>
             </div>
             
             <div className="grid grid-cols-4 divide-x divide-gallery-gold/20 border-b border-gallery-gold/10 font-body-sm text-[13px] md:text-[14px] hover:bg-subtle-smoke/50 transition-colors">
                <div className="p-6 md:p-8 flex items-center text-primary font-medium">Rotations & Swaps</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-on-surface-variant">2x swaps / year</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-primary bg-primary/5 font-medium">3x swaps / year</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-on-surface-variant font-medium">Custom / On-demand</div>
             </div>

             <div className="grid grid-cols-4 divide-x divide-gallery-gold/20 border-b border-gallery-gold/10 font-body-sm text-[13px] md:text-[14px] hover:bg-subtle-smoke/50 transition-colors">
                <div className="p-6 md:p-8 flex items-center text-primary font-medium">Art Mediums</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-on-surface-variant">Prints & Photographs</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-primary bg-primary/5 font-medium">Originals & Prints</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-on-surface-variant font-medium">Bespoke & Murals</div>
             </div>

             <div className="grid grid-cols-4 divide-x divide-gallery-gold/20 border-b border-gallery-gold/10 font-body-sm text-[13px] md:text-[14px] hover:bg-subtle-smoke/50 transition-colors">
                <div className="p-6 md:p-8 flex items-center text-primary font-medium">Curation Guidance</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-on-surface-variant">Self / Guided Checklist</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-primary bg-primary/5 font-medium">Dedicated Curator</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-on-surface-variant font-medium">Chief Curator & 24/7 Support</div>
             </div>

             <div className="grid grid-cols-4 divide-x divide-gallery-gold/20 border-b border-gallery-gold/10 font-body-sm text-[13px] md:text-[14px] hover:bg-subtle-smoke/50 transition-colors">
                <div className="p-6 md:p-8 flex items-center text-primary font-medium">Insurance & Upkeep</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-gallery-gold"><span className="material-symbols-outlined text-[18px]">check</span></div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-gallery-gold bg-primary/5"><span className="material-symbols-outlined text-[18px]">check</span></div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-gallery-gold"><span className="material-symbols-outlined text-[18px]">check</span></div>
             </div>

             <div className="grid grid-cols-4 divide-x divide-gallery-gold/20 font-body-sm text-[13px] md:text-[14px] hover:bg-subtle-smoke/50 transition-colors">
                <div className="p-6 md:p-8 flex items-center text-primary font-medium">Delivery Timeline</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-on-surface-variant">5–7 business days</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-primary bg-primary/5 font-medium">10–12 business days</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center text-on-surface-variant font-medium">Bespoke / Custom Timeline</div>
             </div>
          </div>
        </section>

        <section id="scale-portfolios" className="px-8 md:px-16 max-w-[1600px] mx-auto pb-32 scroll-mt-32">
          
          {/* Curation Refresh Program — Animated Premium */}
          <RefreshProgramSection />
        </section>
      </main>

      { /* Footer */ }
      <Footer />
    </div>
  );
}

// ── Animated Curation Refresh Program Component ─────────────────────────────
function CadenceRing({ pct, color, size = 96 }: { pct: number; color: string; size?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const r = (size - 12) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg ref={ref} width={size} height={size} className="-rotate-90">
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
      <motion.circle
        cx={size/2} cy={size/2} r={r} fill="none"
        stroke={color} strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={inView ? { strokeDashoffset: circ * (1 - pct / 100) } : { strokeDashoffset: circ }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
    </svg>
  );
}

const REFRESH_TIERS = [
  {
    icon: 'cycle',
    label: 'Seasonal Energy',
    cadence: '90 Days',
    cadencePct: 25,
    color: '#D4AF37',
    badge: 'Quarterly',
    desc: 'A complete gallery reset every 90 days. Optimal for dynamic hospitality environments that evolve with the seasons.',
    tags: ['Dynamic Spaces', 'Hotels & Cafés', 'High Footfall'],
    highlight: false,
  },
  {
    icon: 'published_with_changes',
    label: 'Balanced Change',
    cadence: '6 Months',
    cadencePct: 50,
    color: '#D4AF37',
    badge: 'Bi-Annual',
    desc: 'A strategic half-year rotation for professional environments that prefer a steady, evolving visual identity.',
    tags: ['Corporate HQ', 'Professional Offices', 'Steady Evolution'],
    highlight: true,
  },
  {
    icon: 'swap_horiz',
    label: 'Annual Updates',
    cadence: 'Anytime',
    cadencePct: 100,
    color: '#D4AF37',
    badge: 'On-Demand',
    desc: 'Immediate piece replacement for special events, seasonal rebrands, or architectural updates — no schedule required.',
    tags: ['Events', 'Rebrands', 'Flagship Locations'],
    highlight: false,
  },
];

function RefreshProgramSection() {
  const [active, setActive] = useState(1);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)',
      }}
    >
      {/* Animated ambient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
          top: '-200px', left: '-200px',
        }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)',
          bottom: '-100px', right: '-100px',
        }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 px-8 md:px-16 max-w-[1400px] mx-auto py-24 md:py-36">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gallery-gold/40" />
            <span className="font-label-caps text-[10px] uppercase tracking-[0.4em] text-gallery-gold">Continuous Value</span>
            <div className="h-px w-12 bg-gallery-gold/40" />
          </div>
          <h2 className="font-display-lg text-5xl md:text-7xl text-white tracking-tight mb-6 leading-[1]">
            The Curation
            <span className="block font-headline-md italic text-gallery-gold font-light tracking-normal">Refresh Program</span>
          </h2>
          <p className="font-body-lg text-white/50 font-light max-w-xl mx-auto leading-relaxed">
            A dynamic art ecosystem that evolves with your environment — built for long-term institutional partners.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {REFRESH_TIERS.map((tier, i) => (
            <motion.div
              key={tier.badge}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActive(i)}
              className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-500 ${
                active === i
                  ? 'shadow-[0_0_50px_rgba(212,175,55,0.2)] ring-1 ring-gallery-gold/40 scale-[1.02]'
                  : 'ring-1 ring-white/5 hover:ring-white/10 hover:scale-[1.01]'
              }`}
              style={{
                background: active === i
                  ? 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.04) 60%, rgba(255,255,255,0.02) 100%)'
                  : 'rgba(255,255,255,0.03)',
              }}
            >
              {/* Active indicator bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gallery-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: active === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{ transformOrigin: 'left' }}
              />

              <div className="p-8">
                {/* Ring + Icon */}
                <div className="relative w-24 h-24 mb-8 mx-auto">
                  <CadenceRing pct={active === i ? tier.cadencePct : 0} color="#D4AF37" size={96} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="material-symbols-outlined text-[26px]"
                      style={{ color: active === i ? '#D4AF37' : 'rgba(255,255,255,0.4)' }}
                      animate={{ rotate: active === i && tier.icon === 'cycle' ? [0, 360] : 0 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    >
                      {tier.icon}
                    </motion.span>
                  </div>
                </div>

                {/* Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`font-label-caps text-[9px] uppercase tracking-[0.25em] px-2 py-0.5 rounded-sm border transition-colors duration-300 ${
                      active === i
                        ? 'border-gallery-gold/50 text-gallery-gold bg-gallery-gold/10'
                        : 'border-white/10 text-white/30'
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>

                <h3 className={`font-display-lg text-2xl mb-2 tracking-tight transition-colors duration-300 ${
                  active === i ? 'text-white' : 'text-white/60'
                }`}>
                  {tier.label}
                </h3>

                {/* Cadence number */}
                <div className="flex items-baseline gap-1 mb-5">
                  <span className={`font-display-lg text-4xl font-light tracking-tighter transition-colors duration-300 ${
                    active === i ? 'text-gallery-gold' : 'text-white/20'
                  }`}>
                    {tier.cadence}
                  </span>
                </div>

                <p className={`font-body-sm text-[14px] leading-relaxed transition-all duration-500 ${
                  active === i ? 'text-white/70 max-h-40 opacity-100' : 'text-white/30 max-h-20 opacity-60'
                }`}>
                  {tier.desc}
                </p>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-2 mt-6"
                  animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 8 }}
                  transition={{ duration: 0.3 }}
                >
                  {tier.tags.map(tag => (
                    <span key={tag} className="font-label-caps text-[8px] uppercase tracking-widest text-gallery-gold/70 border border-gallery-gold/15 px-2 py-0.5 rounded-sm bg-gallery-gold/5">
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Bottom glow line */}
              {active === i && (
                <motion.div
                  layoutId="activeGlow"
                  className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gallery-gold/60 to-transparent"
                  transition={{ duration: 0.4 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Timeline bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="border-t border-white/5 pt-14 grid grid-cols-1 md:grid-cols-3 gap-0"
        >
          {REFRESH_TIERS.map((tier, i) => (
            <div
              key={tier.badge + '-stat'}
              className={`flex flex-col items-center md:items-start px-0 md:px-8 ${
                i > 0 ? 'border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0' : ''
              }`}
            >
              <span className="font-label-caps text-[9px] text-white/30 uppercase tracking-[0.2em] mb-2">{tier.badge} Cadence</span>
              <motion.span
                className="font-display-lg text-3xl text-white font-light tracking-tight"
                animate={{ color: active === i ? '#D4AF37' : 'rgba(255,255,255,0.9)' }}
                transition={{ duration: 0.3 }}
              >
                {tier.cadence}
              </motion.span>
              <div className="mt-3 h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gallery-gold rounded-full"
                  animate={{ width: active === i ? '100%' : '30%' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center mt-16"
        >
          <Link
            to="/inquire"
            className="group flex items-center gap-4 border border-gallery-gold/30 text-gallery-gold px-10 py-4 font-label-caps text-[11px] uppercase tracking-[0.3em] hover:bg-gallery-gold hover:text-primary transition-all duration-500 hover:border-gallery-gold focus:outline-none"
          >
            <span>Design My Refresh Plan</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1.5 transition-transform duration-300">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
