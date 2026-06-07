import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

export default function Manifesto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-paper-white text-primary font-body-lg overflow-x-hidden min-h-screen selection:bg-gallery-gold/30">
      <TopNavBar />

      <main className="pt-[80px]">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden px-8 md:px-margin-desktop">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-full h-full object-cover" 
              alt="A grand, ultra-modern art gallery space" 
              src="https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80&w=2500"
            />
            {/* Using a lighter gradient so dark text reads well */}
            <div className="absolute inset-0 bg-paper-white/80 backdrop-blur-sm"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 max-w-4xl text-center text-primary"
          >
            <p className="font-label-caps text-[12px] text-gallery-gold mb-6 tracking-[0.4em] uppercase font-bold text-shadow-sm">The Kala Vault Manifesto</p>
            <h1 className="font-display-lg text-5xl md:text-7xl mb-8 leading-tight tracking-tight">Art is Currency.<br/>Space is Power.</h1>
            <p className="font-headline-md italic text-primary/80 text-2xl md:text-3xl max-w-3xl mx-auto font-light">We reject the sterile, the stagnant, and the uninspired. A workspace is not merely a container; it is a declaration of influence.</p>
          </motion.div>
        </section>

        {/* Our Heritage */}
        <section className="py-24 md:py-32 px-8 md:px-margin-desktop max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <h2 className="font-display-lg text-4xl md:text-5xl mb-8 text-primary">Brand Philosophy</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed font-body-md text-lg">
                <p>Derived from "Luminous," our brand philosophy centers on bringing clarity, prestige, and inspiration to corporate environments through museum-quality art curation.</p>
                <p>We transform sterile workspaces into dynamic galleries that reflect your brand's sophistication and commitment to excellence.</p>
              </div>
            </motion.div>
            <div className="lg:col-span-1 hidden lg:block"></div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="overflow-hidden">
                  <img className="w-full h-[500px] md:h-[600px] object-cover grayscale brightness-95 hover:scale-105 transition-transform duration-[2s]" alt="Curator Desk" src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1500"/>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-paper-white p-8 border border-outline/10 shadow-xl hidden md:block max-w-[350px] z-20">
                <p className="font-label-caps text-[10px] text-gallery-gold mb-3 uppercase tracking-widest">DEGAS ON VISION</p>
                <p className="text-[16px] italic font-headline-md">"Art is not what you see, but what you make others see."</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Curation Process */}
        <section className="py-24 md:py-32 bg-subtle-smoke overflow-hidden">
          <div className="px-8 md:px-margin-desktop max-w-[1800px] mx-auto">
            <div className="text-center mb-20">
              <p className="font-label-caps text-[11px] text-gallery-gold tracking-[0.3em] uppercase mb-4">VALUE PROPOSITION</p>
              <h2 className="font-display-lg text-4xl md:text-5xl text-primary">The Core Value Proposition</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {[
                {
                  step: "01",
                  title: "Aesthetic Flexibility",
                  desc: "Transform sterile workspaces into dynamic galleries that reflect brand sophistication and foster creativity.",
                  img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                },
                {
                  step: "02",
                  title: "Capital Preservation",
                  desc: "Access high-value artwork without substantial upfront capital required for permanent acquisition.",
                  img: "https://images.unsplash.com/photo-1561214115-f1f11544a7b0?auto=format&fit=crop&q=80&w=1000"
                },
                {
                  step: "03",
                  title: "Curation Excellence",
                  desc: "Every piece selected to foster creativity and project professional excellence to clients and stakeholders.",
                  img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] overflow-hidden mb-8 relative bg-white">
                    <img className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 grayscale-[30%]" alt={item.title} src={item.img}/>
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="font-display-lg text-paper-white text-6xl drop-shadow-md">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="font-display-lg text-2xl md:text-3xl mb-3 text-primary">{item.title}</h3>
                  <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Network */}
        <section className="py-24 md:py-32 px-8 md:px-margin-desktop max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-24">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-display-lg text-4xl md:text-5xl text-primary mb-8 leading-tight">Our Global Network</h2>
              <p className="font-body-md text-lg text-on-surface-variant mb-12 leading-relaxed">Headquartered in Zurich, with private viewing rooms in New York, Tokyo, and London. The Kala Vault maintains the world's most exclusive network of art-secured facilities and white-glove logistics partners.</p>
              <div className="space-y-2">
                {[
                  { city: "Zurich", role: "HQ" },
                  { city: "London", role: "" },
                  { city: "Singapore", role: "" },
                  { city: "Dubai", role: "" },
                ].map((loc, i) => (
                  <div key={i} className="flex justify-between items-center py-5 border-b border-outline/10 group cursor-pointer hover:border-gallery-gold transition-colors">
                    <span className="font-display-lg text-2xl text-primary group-hover:text-gallery-gold transition-colors">{loc.city}</span>
                    {loc.role ? (
                       <span className="font-label-caps text-[10px] text-paper-white bg-primary px-3 py-1 uppercase tracking-widest">{loc.role}</span>
                    ) : (
                       <span className="material-symbols-outlined text-outline/40 group-hover:text-gallery-gold transition-colors">arrow_forward</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
               className="w-full lg:w-1/2 h-[500px] lg:h-[600px] bg-subtle-smoke relative flex items-center justify-center p-8 border border-outline/5"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
              <div className="relative z-10 text-center p-12 bg-paper-white/90 backdrop-blur-md shadow-2xl max-w-sm border border-outline/5">
                <p className="font-label-caps text-[10px] text-gallery-gold mb-4 uppercase tracking-[0.2em]">Private Viewings</p>
                <h3 className="font-display-lg text-3xl mb-4 text-primary">Experience the Archive</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant mb-8 leading-relaxed">Access is strictly by invitation or referral from our curator network.</p>
                <button className="px-8 py-4 bg-primary text-paper-white font-label-caps text-[11px] uppercase tracking-[0.2em] hover:bg-gallery-gold transition-colors w-full">Request Access</button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-32 bg-primary text-paper-white border-t border-outline/10">
          <div className="px-8 md:px-margin-desktop max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 className="font-display-lg text-4xl md:text-5xl mb-8">Ready to Transform Your Workspace?</h2>
            <p className="font-body-md text-xl text-white/80 max-w-2xl text-center mb-12 leading-relaxed">Let the kala vault illuminate your corporate landscape with museum quality artwork that inspires creativity and projects excellence.</p>
            <div className="flex gap-6 items-center">
              <Link className="inline-block text-paper-white font-label-caps text-[12px] uppercase tracking-[0.3em] border-b border-gallery-gold pb-2 transition-all hover:tracking-[0.4em] hover:text-gallery-gold" to="/inquire">Book Consultation</Link>
              <span className="text-white/30">•</span>
              <a className="inline-block text-paper-white/80 hover:text-white font-label-caps text-[12px] uppercase tracking-[0.3em] transition-all" href="mailto:contact@infoartledger.com">contact@infoartledger.com</a>
            </div>
          </div>
        </section>

      </main>

      { /* Footer */ }
      <Footer />
    </div>
  );
}
