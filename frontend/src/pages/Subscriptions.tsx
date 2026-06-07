import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react';
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
            <h2 className="font-display-lg text-5xl md:text-6xl text-primary tracking-tight mb-8">The Core Suites</h2>
          </div>
          {/* Subscriptions Grid / List (Editorial) */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-32 max-w-5xl mx-auto justify-center">
             
             {/* The Momentum Suite */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="flex flex-col group relative overflow-hidden w-full lg:w-1/2 border border-gallery-gold/20 shadow-[0_20px_60px_-15px_rgba(212,175,55,0.08)] bg-white"
             >
                 <div className="p-10 md:p-14 flex flex-col flex-grow bg-white hover:bg-subtle-smoke transition-colors duration-700 relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gallery-gold/10 to-transparent pointer-events-none" />
                    
                    <span className="font-label-caps text-[12px] uppercase tracking-[0.4em] text-primary/40 group-hover:text-gallery-gold transition-colors duration-500 mb-6 block font-semibold">Tier One</span>
                    <h3 className="font-display-lg text-4xl md:text-5xl text-primary mb-6 tracking-tight">The Momentum Suite</h3>
                    
                    <div className="font-body-md text-primary pb-8 border-b border-gallery-gold/20 group-hover:border-gallery-gold/40 transition-colors duration-500 mb-8 flex flex-col">
                       <span className="font-display-lg text-5xl font-light tracking-tighter">₹50,000</span> 
                       <span className="text-on-surface-variant font-label-caps text-[10px] tracking-widest mt-2 uppercase">/ Month</span>
                    </div>
                    
                    <p className="font-body-lg text-on-surface-variant text-lg leading-relaxed mb-10 font-light min-h-[100px]">
                       Curated for high-profile growth offices or premium coworking hubs requiring a cohesive aesthetic across collaborative zones.
                    </p>
                    
                    <Link to="/inquire" className="mt-auto flex items-center justify-center gap-4 py-5 px-10 font-label-caps text-[11px] uppercase tracking-[0.2em] transition-all bg-primary border hover:bg-gallery-gold hover:border-gallery-gold text-white focus:outline-none w-full group/btn">
                        <span>Select Momentum</span>
                        <span className="material-symbols-outlined text-[14px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                 </div>
             </motion.div>

             {/* The Lumina Icon */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="flex flex-col group relative overflow-hidden w-full lg:w-1/2 border border-gallery-gold/40 shadow-2xl bg-primary"
             >
                 <div className="p-10 md:p-14 flex flex-col flex-grow bg-primary text-white transition-colors duration-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gallery-gold/5 opacity-5 mix-blend-overlay pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gallery-gold/20 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                       <span className="font-label-caps text-[12px] uppercase tracking-[0.4em] text-gallery-gold mb-6 block font-semibold flex items-center gap-2">
                          <span className="w-1.5 h-1.5 border border-gallery-gold rotate-45 inline-block bg-gallery-gold"></span>
                          Tier Two
                       </span>
                       <h3 className="font-display-lg text-4xl md:text-5xl text-white mb-6 tracking-tight">The Lumina Icon</h3>
                       
                       <div className="font-body-md text-white pb-8 border-b border-gallery-gold/30 mb-8 flex flex-col">
                          <span className="font-display-lg text-5xl text-gallery-gold font-light tracking-tighter">₹1,50,000</span> 
                          <span className="text-white/60 font-label-caps text-[10px] tracking-widest mt-2 uppercase">/ Month</span>
                       </div>
                       
                       <p className="font-body-lg text-white/80 text-lg leading-relaxed mb-10 font-light min-h-[100px]">
                          Our flagship enterprise solution. Includes a bespoke, full-scale curation strategy for multi-floor headquarters and flagship locations.
                       </p>
                       
                       <Link to="/inquire" className="mt-auto flex items-center justify-center gap-4 bg-gallery-gold border border-gallery-gold py-5 px-10 font-label-caps text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-white hover:border-white text-primary w-full group/btn relative overflow-hidden focus:outline-none">
                           <span className="relative z-10">Select Lumina</span>
                           <span className="relative z-10 material-symbols-outlined text-[14px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                       </Link>
                    </div>
                 </div>
             </motion.div>
          </div>

          {/* Feature Comparison Table */}
          <div className="max-w-4xl mx-auto w-full mb-32 border border-gallery-gold/20 bg-white">
             <div className="grid grid-cols-3 font-label-caps text-[10px] uppercase tracking-[0.3em] text-primary/60 border-b border-gallery-gold/20">
                <div className="p-6 md:p-8 font-semibold text-primary">Capabilities</div>
                <div className="p-6 md:p-8 text-center border-l md:border-l-0 border-gallery-gold/20 font-semibold md:col-span-1 hidden md:block">Momentum Suite</div>
                <div className="p-6 md:p-8 text-center border-l border-gallery-gold/20 font-semibold text-gallery-gold">Lumina Icon</div>
             </div>
             
             <div className="grid grid-cols-3 md:grid-cols-3 divide-x divide-transparent md:divide-gallery-gold/20 border-b border-gallery-gold/10 font-body-sm text-[14px] md:text-[15px] hover:bg-subtle-smoke transition-colors">
                <div className="p-6 md:p-8 flex items-center text-primary col-span-2 md:col-span-1">Collection Size</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center border-l border-gallery-gold/10 md:border-transparent text-on-surface-variant font-medium">5-8 rotating artworks</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center border-l border-gallery-gold/20 font-medium text-primary bg-primary/5">15+ investment-grade works</div>
             </div>
             
             <div className="grid grid-cols-3 md:grid-cols-3 divide-x divide-transparent md:divide-gallery-gold/20 border-b border-gallery-gold/10 font-body-sm text-[14px] md:text-[15px] hover:bg-subtle-smoke transition-colors">
                <div className="p-6 md:p-8 flex items-center text-primary col-span-2 md:col-span-1">Rotation Frequency</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center border-l border-gallery-gold/10 md:border-transparent text-on-surface-variant font-medium">Bi-annual refresh</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center border-l border-gallery-gold/20 font-medium text-primary bg-primary/5">Quarterly private rotation</div>
             </div>

             <div className="grid grid-cols-3 md:grid-cols-3 divide-x divide-transparent md:divide-gallery-gold/20 border-b border-gallery-gold/10 font-body-sm text-[14px] md:text-[15px] hover:bg-subtle-smoke transition-colors">
                <div className="p-6 md:p-8 flex items-center text-primary col-span-2 md:col-span-1">Curation Level</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center border-l border-gallery-gold/10 md:border-transparent text-on-surface-variant font-medium">Guided Selection</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center border-l border-gallery-gold/20 font-medium text-primary bg-primary/5">Dedicated Chief Curator</div>
             </div>

             <div className="grid grid-cols-3 md:grid-cols-3 divide-x divide-transparent md:divide-gallery-gold/20 border-b border-gallery-gold/10 font-body-sm text-[14px] md:text-[15px] hover:bg-subtle-smoke transition-colors">
                <div className="p-6 md:p-8 flex items-center text-primary col-span-2 md:col-span-1">White-Glove Installation</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center border-l border-gallery-gold/10 md:border-transparent text-gallery-gold"><span className="material-symbols-outlined">check</span></div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center border-l border-gallery-gold/20 text-gallery-gold bg-primary/5"><span className="material-symbols-outlined">check</span></div>
             </div>

             <div className="grid grid-cols-3 md:grid-cols-3 divide-x divide-transparent md:divide-gallery-gold/20 border-b border-gallery-gold/10 font-body-sm text-[14px] md:text-[15px] hover:bg-subtle-smoke transition-colors">
                <div className="p-6 md:p-8 flex items-center text-primary col-span-2 md:col-span-1">Asset Protection Coverage</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center border-l border-gallery-gold/10 md:border-transparent text-on-surface-variant/40"><span className="material-symbols-outlined font-light">remove</span></div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center border-l border-gallery-gold/20 text-gallery-gold bg-primary/5"><span className="material-symbols-outlined">check</span></div>
             </div>

             <div className="grid grid-cols-3 md:grid-cols-3 divide-x divide-transparent md:divide-gallery-gold/20 font-body-sm text-[14px] md:text-[15px] hover:bg-subtle-smoke transition-colors">
                <div className="p-6 md:p-8 flex items-center text-primary col-span-2 md:col-span-1">Architectural Consultation</div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center border-l border-gallery-gold/10 md:border-transparent text-on-surface-variant/40"><span className="material-symbols-outlined font-light">remove</span></div>
                <div className="p-6 md:p-8 text-center flex items-center justify-center border-l border-gallery-gold/20 text-gallery-gold bg-primary/5"><span className="material-symbols-outlined">check</span></div>
             </div>
          </div>
        </section>

        <section id="scale-portfolios" className="px-8 md:px-16 max-w-[1600px] mx-auto pb-32 scroll-mt-32">
          {/* High-Profile Portfolio Investment */}
          <div className="border-t border-gallery-gold/20 pt-24 md:pt-32 mb-32 relative">
            <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gallery-gold/50 to-transparent right-0"></div>
            <div className="text-center mb-20 flex flex-col items-center">
              <span className="font-label-caps text-[10px] uppercase tracking-[0.4em] text-gallery-gold mb-6 block">Section II</span>
              <h2 className="font-display-lg text-5xl md:text-6xl text-primary tracking-tight mb-6">Portfolio Investment</h2>
              <p className="font-headline-md italic text-on-surface-variant text-2xl md:text-3xl max-w-2xl font-light">
                 Monthly investment for a curated collection of 20 pieces, designed to transform your corporate environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gallery-gold/20 divide-y md:divide-y-0 md:divide-x lg:divide-y-0 lg:divide-x divide-gallery-gold/20 bg-primary/5 shadow-2xl max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center group cursor-pointer p-16 hover:bg-gallery-gold transition-colors duration-500">
                    <span className="font-display-lg text-6xl text-primary group-hover:text-white transition-colors duration-500 mb-6 tracking-tighter font-light">₹60K</span>
                    <span className="font-label-caps text-[12px] tracking-widest text-primary group-hover:text-white transition-colors duration-500 mb-2">Executive Format</span>
                    <span className="font-body-sm text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 text-[14px]">20 works for private suites</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col items-center group cursor-pointer p-16 hover:bg-gallery-gold transition-colors duration-500 border-t md:border-t-0 border-gallery-gold/20">
                    <span className="font-display-lg text-6xl text-primary group-hover:text-white transition-colors duration-500 mb-6 tracking-tighter font-light">₹80K</span>
                    <span className="font-label-caps text-[12px] tracking-widest text-primary group-hover:text-white transition-colors duration-500 mb-2">Gallery Portfolio</span>
                    <span className="font-body-sm text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 text-[14px]">20 works for hallways</span>
                </motion.div>
                 <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col items-center group cursor-pointer p-16 hover:bg-gallery-gold transition-colors duration-500 border-t lg:border-t-0 border-gallery-gold/20">
                    <span className="font-display-lg text-6xl text-primary group-hover:text-white transition-colors duration-500 mb-6 tracking-tighter font-light">₹1.1L</span>
                    <span className="font-label-caps text-[12px] tracking-widest text-primary group-hover:text-white transition-colors duration-500 mb-2">Premium Statement</span>
                    <span className="font-body-sm text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 text-[14px]">20 works for lobbies</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col items-center group cursor-pointer p-16 hover:bg-gallery-gold transition-colors duration-500 border-t md:border-r lg:col-span-1 border-gallery-gold/20">
                    <span className="font-display-lg text-6xl text-primary group-hover:text-white transition-colors duration-500 mb-6 tracking-tighter font-light">₹1.8L</span>
                    <span className="font-label-caps text-[12px] tracking-widest text-primary group-hover:text-white transition-colors duration-500 mb-2">Lumina Grand XL</span>
                    <span className="font-body-sm text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 text-[14px]">20 works for reception</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col items-center group cursor-pointer p-16 hover:bg-gallery-gold transition-colors duration-500 border-t md:col-span-2 lg:col-span-2 border-gallery-gold/20">
                    <span className="font-display-lg text-6xl text-primary group-hover:text-white transition-colors duration-500 mb-6 tracking-tighter font-light">₹2.4L+</span>
                    <span className="font-label-caps text-[12px] tracking-widest text-primary group-hover:text-white transition-colors duration-500 mb-2">Architectural Scale</span>
                    <span className="font-body-sm text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 text-[14px]">20 works bespoke</span>
                </motion.div>
            </div>
          </div>
          
          {/* Curation Refresh Program */}
          <div className="bg-primary p-12 md:p-24 shadow-2xl text-center flex flex-col items-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600456899121-68eda5705257?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-overlay"></div>
             
             <div className="relative z-10 w-full">
               <span className="font-label-caps text-[10px] uppercase tracking-[0.4em] text-gallery-gold mb-6 block">Continuous Value</span>
               <h2 className="font-display-lg text-4xl md:text-5xl text-white tracking-tight mb-4">The Curation Refresh Program</h2>
               <p className="font-body-lg text-white/70 font-light mb-20 max-w-2xl mx-auto">Maintain a dynamic environment with our scheduled refresh program designed specifically for long-term partners.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-left border-t border-gallery-gold/30 pt-16">
                   <div className="flex flex-col group cursor-pointer">
                      <div className="flex items-center gap-4 mb-4">
                         <span className="material-symbols-outlined text-gallery-gold">cycle</span>
                         <h3 className="font-display-lg text-2xl text-white group-hover:text-gallery-gold transition-colors duration-500">Quarterly</h3>
                      </div>
                      <p className="font-body-sm text-white/60 leading-relaxed text-[15px] font-light">A full collection update every 90 days to keep the environment fresh and engaging for staff and visitors.</p>
                   </div>
                   <div className="flex flex-col group cursor-pointer">
                      <div className="flex items-center gap-4 mb-4">
                         <span className="material-symbols-outlined text-gallery-gold">published_with_changes</span>
                         <h3 className="font-display-lg text-2xl text-white group-hover:text-gallery-gold transition-colors duration-500">Bi-Annual</h3>
                      </div>
                      <p className="font-body-sm text-white/60 leading-relaxed text-[15px] font-light">A strategic rotation every 6 months, ideal for maintaining a consistent yet evolving aesthetic.</p>
                   </div>
                   <div className="flex flex-col group cursor-pointer">
                      <div className="flex items-center gap-4 mb-4">
                         <span className="material-symbols-outlined text-gallery-gold">swap_horiz</span>
                         <h3 className="font-display-lg text-2xl text-white group-hover:text-gallery-gold transition-colors duration-500">On-Demand</h3>
                      </div>
                      <p className="font-body-sm text-white/60 leading-relaxed text-[15px] font-light">Immediate replacement of specific pieces upon request for special events or architectural rebranding.</p>
                   </div>
               </div>
             </div>
          </div>
        </section>
      </main>

      { /* Footer */ }
      <Footer />
    </div>
  );
}
