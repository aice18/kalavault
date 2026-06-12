import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      number: "01",
      title: "Direct Buying",
      description: "Build a permanent legacy with exclusive pieces that tell your unique story beautifully. Select and acquire masterpieces to establish an enduring corporate or private art collection.",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1200"
    },
    {
      number: "02",
      title: "Smart Subscriptions",
      description: "Keep your walls fresh and exciting with flexible art rental and seasonal refresh plans. Maintain a living gallery that responds to your environment, with rotating curation schedules.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
    },
    {
      number: "03",
      title: "Expert Curation",
      description: "Our specialized consultants find the perfect match for your interior style and brand identity. We analyze layouts, lighting, architectural details, and corporate goals to build custom proposals.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start end", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div className="bg-paper-white text-primary font-body-lg overflow-x-hidden min-h-screen selection:bg-gallery-gold/30 flex flex-col">
      <TopNavBar />

      <main className="pt-[160px] md:pt-[240px] pb-32 flex-grow" ref={scrollRef}>
        <section className="px-8 md:px-16 max-w-[1600px] mx-auto mb-32 flex flex-col items-center text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl relative z-10"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gallery-gold/40"></div>
              <span className="font-label-caps text-[10px] uppercase tracking-[0.4em] text-gallery-gold">Support Protocol</span>
              <div className="h-[1px] w-12 bg-gallery-gold/40"></div>
            </div>
            <h1 className="font-display-lg text-6xl md:text-8xl lg:text-[7rem] text-primary tracking-tighter mb-8 leading-[0.9]">
              Elevated<br /><span className="text-gallery-gold italic font-headline-md tracking-normal">Care</span>
            </h1>
            <p className="font-headline-md italic text-on-surface-variant text-2xl md:text-3xl max-w-2xl mx-auto font-light">
              Comprehensive logistics, managed with the highest degree of discretion and architectural precision.
            </p>
          </motion.div>
        </section>

        <section className="px-8 md:px-16 w-full max-w-[1400px] mx-auto py-12 md:py-24 relative overflow-hidden">
          <div className="flex flex-col mb-16 md:mb-24 text-center items-center">
            <span className="font-label-caps text-[10px] uppercase tracking-[0.4em] text-gallery-gold mb-6 block">Our Protocol</span>
            <h2 className="font-display-lg text-5xl md:text-7xl text-primary tracking-tight">The Framework</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-24 w-full">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col group ${index % 3 === 1 ? 'lg:mt-16' : ''} ${index % 3 === 2 ? 'lg:mt-32' : ''}`}
              >
                <div className="relative overflow-hidden mb-8 w-full aspect-[4/5] bg-subtle-smoke">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <div className="absolute inset-4 border border-paper-white/30 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"></div>
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display-lg text-primary text-3xl md:text-4xl tracking-tight group-hover:text-gallery-gold transition-colors duration-500">
                    {service.title}
                  </h3>
                  <span className="font-display-lg text-3xl md:text-4xl text-gallery-gold/30 group-hover:text-gallery-gold transition-colors duration-500 tracking-tighter leading-none">
                    {service.number}
                  </span>
                </div>

                <div className="flex flex-col mt-auto w-11/12">
                  <div className="h-[1px] w-12 bg-gallery-gold/40 mb-6 group-hover:w-full group-hover:bg-gallery-gold transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
                  <p className="font-body-md text-on-surface-variant leading-relaxed font-light text-base md:text-sm lg:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-8 md:px-16 max-w-[1600px] mx-auto mt-32 mb-32 pt-24 border-t border-gallery-gold/20 relative">
          <div className="w-full absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-gallery-gold/50 to-transparent opacity-80"></div>

          <div className="flex flex-col mb-24 text-center items-center">
            <span className="font-label-caps text-[10px] uppercase tracking-[0.4em] text-gallery-gold mb-6 block">Spatial Alignment</span>
            <h2 className="font-display-lg text-5xl md:text-6xl text-primary tracking-tight mb-8">Executive-Tier Portfolio</h2>
            <p className="font-headline-md italic text-on-surface-variant text-2xl md:text-3xl max-w-2xl font-light">
              Size-Wise Options for Premium Architectural Spaces
            </p>
          </div>

          <div className="flex flex-col border-b border-gallery-gold/20">
            {[
              { title: "Executive Format", size: '36"×36"', desc: "Optimized for private leadership suites and collaborative pods." },
              { title: "Gallery Portfolio", size: '48"×36"', desc: "Designed for high-visibility hallways and conference rooms." },
              { title: "Premium Statement", size: '48"×48"', desc: "Square-format centerpiece for modern lobbies or open-plan lounges." },
              { title: "Lumina Grand XL", size: '72"×48"', desc: "Dramatic, large-scale works for main reception areas and grand foyers." },
              { title: "Architectural Scale", size: "8 ft+", desc: "Bespoke, floor-to-ceiling installations for signature corporate walls." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-16 border-t border-gallery-gold/20 bg-transparent group hover:bg-subtle-smoke transition-colors duration-500 px-8 lg:px-16 mx-[-2rem] lg:mx-[-4rem]"
              >
                <div className="flex items-center gap-8 md:gap-16 md:w-1/2">
                  <span className="font-label-caps text-xs tracking-widest text-gallery-gold uppercase hidden md:block w-8">00{idx + 1}</span>
                  <h3 className="font-display-lg text-3xl md:text-4xl text-primary group-hover:translate-x-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-1/2 mt-6 md:mt-0 gap-8 md:gap-12 md:pl-8">
                  <p className="font-body-lg text-lg text-on-surface-variant font-light group-hover:text-primary transition-colors duration-500 flex-grow">
                    {item.desc}
                  </p>
                  <div className="font-display-lg text-2xl md:text-3xl text-gallery-gold font-light whitespace-nowrap pt-2 md:pt-0">
                    {item.size}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-8 md:px-16 max-w-[1600px] mx-auto mt-32 mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full bg-primary py-24 md:py-32 px-10 md:px-20 text-center flex flex-col items-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gallery-gold/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gallery-gold/20 to-transparent pointer-events-none blur-3xl opacity-50" />

            <span className="font-label-caps text-[10px] uppercase tracking-[0.4em] text-gallery-gold mb-8 block relative z-10">Next Steps</span>
            <h2 className="font-display-lg text-4xl md:text-6xl text-white tracking-tight mb-12 relative z-10 max-w-3xl">
              Ready to refine the way you experience space?
            </h2>
            <Link to="/inquire" className="relative z-10 flex items-center justify-center gap-4 bg-gallery-gold border border-gallery-gold py-6 px-12 font-label-caps text-[12px] uppercase tracking-[0.2em] transition-all hover:bg-white hover:border-white text-primary w-full md:w-auto group/btn focus:outline-none">
              <span>Initiate Consultation</span>
              <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </motion.div>
        </section>
      </main>

      { /* Footer */}
      <Footer />
    </div>
  );
}
