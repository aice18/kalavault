import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { LATEST_ACQUISITIONS } from '../data';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import { getArtworkImageWithWatermark, formatPrice } from '../services/artworkService';
import { ArtworkTierBadge } from '../components/ArtworkTierInfo';

const SPACES_DATA = [
  {
    id: 1,
    title: "Executive Boardroom",
    subtitle: "CORPORATE INSTALLATION",
    description: "Foster authoritative environments with striking monochrome abstracts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUUpGx4ETP0t0VlaA9m_2czNi6DRHPhwY7Dx1DDQHyHN9Wo9hGRbC_-LbTReM8mPCX4joMwgp6ihw62B2naEcpY0Oa0C8nxN9KTbyQenHyag-cEsXIJiLH0lQtlQWH6Qws6qgPMf18VA0fgGUEp-cTTYySol4_QM06UOCwHCJsxTGsD3w105rYVNkoOfYONO44N6FaBqxq3PzUUsWTjHp8haU1xt8c4ATtn1vIoYbh-3MQgXLI_WR11YykdOKfA6EMMpXDCwYv1UM"
  },
  {
    id: 2,
    title: "Private Penthouse",
    subtitle: "RESIDENTIAL CURATION",
    description: "Curate warmth through monumental sculptures and textured canvases.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1T484GbqtKdQJCCaFbU1MEMToj0-9EydS548uHxMsQdxwId8stg4biMi59w6o6-RgS3HBp2LCIN4CLgXhwzMhSbTvWm3J3DLLfpR4jW6mD32WSXK0qhPzZs709nDZUnbUbYTyed8xs4r3msIbrQJdTugk8drkb7z5kCBr6N6UJ7ahInFlJ2E7J4P87yEChEgzWudmg5my6kziR8PNM-A7sBxFq4lJku5S8VdvcgvxoSQzWWqq1nX2nkrWgfcJYwhG72CEoDsMF1o"
  },
  {
    id: 3,
    title: "Grand Circulation",
    subtitle: "ARCHITECTURAL SCALE",
    description: "Scale and drama to define premium transit paths and grand lobbies.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000"
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const heroChildVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const TRUST_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC_lfwtAzyFIfTNLKi9QYrnf3k36HGNX68Td0f2LzAhedS1CGwCA0Qx4zC2TZb9Es5XA46x6GONusZW875b8JbY_8DnV_pmOtfUYcxoKcQZgmFnPVXfHujEMFmAo-rpDbYD67TiIef5d8jrYzvCMay5rU_0sMXaYziUYXSTWV3bL1SbMyP-nZAn39AAF3L_PCyQM-EfBViMp_Ro4WcmP4L7qRrED4BIvCzTmGAX90CEt20qn9TtYso2bYbdtmkyPyiYz64780nE3FI",
  "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
];

const TESTIMONIALS_DATA = [
  {
    id: 1,
    client: "ITC Group",
    quote: "“The curation process was exceptionally smooth, and the quarterly artwork rotations have completely transformed our corporate headquarters. It fosters an inspiring, sophisticated atmosphere for both our clients and employees.”",
    image: "/assets/{65CF477C-9A48-4B93-947E-726F27A16B71}.png",
    location: "Executive Suites, New Delhi",
    project: "Corporate Workspace Curation"
  },
  {
    id: 2,
    client: "JLL Americas",
    quote: "“Kalavault's white-glove service and dynamic leasing model are exactly what modern commercial spaces need. The architectural-scale installations have given our properties a distinct, premium identity that wows stakeholders.”",
    image: "/assets/{699C6484-31E9-49BF-A8BC-426AFE5D5539}.png",
    location: "Regional HQ, Chicago",
    project: "Commercial Property Curation"
  },
  {
    id: 3,
    client: "Lucia Residences",
    quote: "“As a private collector, having access to such a diverse range of museum-grade pieces with the flexibility of a monthly subscription is a dream. The placement and framing are masterfully executed.”",
    image: "/assets/{E65E74D4-7D04-4B81-9700-81D0EE6CED29}.png",
    location: "Private Collection, Milan",
    project: "Residential Curation"
  },
  {
    id: 4,
    client: "Lucia Boutique Curation",
    quote: "“The transition between different thematic seasons keeps our boutique gallery space alive, responsive, and engaging. The curation is tailored perfectly to our color scheme and lighting design.”",
    image: "/assets/{F666B0B5-1E36-45E4-A191-D877D7AE1F29}.png",
    location: "Gallery Lounge, Florence",
    project: "Boutique Gallery Coordination"
  }
];

export default function LandingPage() {
  const navigate = useNavigate();
  // Premium Parallax Effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1500], [0, 600]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [trustSlide, setTrustSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [watermarkedImages, setWatermarkedImages] = useState<Record<number | string, string>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SPACES_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTrustSlide((prev) => (prev + 1) % TRUST_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Load watermarked images for featured artworks
  useEffect(() => {
    const loadWatermarks = async () => {
      for (const art of LATEST_ACQUISITIONS) {
        try {
          const watermarked = await getArtworkImageWithWatermark(art);
          setWatermarkedImages(prev => ({
            ...prev,
            [art.id]: watermarked
          }));
        } catch (error) {
          console.error(`Error watermarking artwork ${art.id}:`, error);
        }
      }
    };
    loadWatermarks();
  }, []);

  const nextTestimonial = () => {
    setTestimonialSlide((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setTestimonialSlide((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <div className="bg-paper-white text-primary font-body-md selection:bg-gallery-gold/30 min-h-screen">
      <TopNavBar />

      { /* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full scale-110">
          <img
            className="w-full h-full object-cover"
            alt="Welcoming luxury workspace with seating and art"
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2500&q=80"
          />
        </motion.div>
        {/* Gradient overlays to ensure premium text legibility over any structural lines */}
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60"></div>

        <motion.div
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-margin-mobile md:px-margin-desktop text-paper-white max-w-[1800px] mx-auto"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={heroChildVariants} className="font-display-lg text-4xl md:text-5xl lg:text-7xl max-w-4xl mb-6 leading-[1.05] drop-shadow-lg text-paper-white">
            Illuminating the Corporate Landscape
          </motion.h1>
          <motion.p variants={heroChildVariants} className="font-headline-md italic text-paper-white/90 text-xl md:text-2xl mb-10 max-w-2xl drop-shadow-md leading-relaxed">
            Premium Art Leasing & Curation for High-Profile Workspaces
          </motion.p>
          <motion.div variants={heroChildVariants} className="flex flex-col md:flex-row gap-6 mt-2">
            <Link to="/subscriptions" className="bg-paper-white text-primary font-body-sm text-[12px] font-bold px-10 py-4 uppercase tracking-[0.15em] hover:bg-gallery-gold hover:text-paper-white transition-all duration-500 text-center shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">Explore Programs</Link>
            <Link to="/inquire" className="border border-paper-white/50 text-paper-white font-body-sm text-[12px] font-bold px-10 py-4 uppercase tracking-[0.15em] hover:bg-paper-white hover:text-primary transition-all duration-500 backdrop-blur-md text-center hover:border-paper-white shadow-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transform">Consult Curation</Link>
          </motion.div>
        </motion.div>
        <motion.div
          variants={heroChildVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-12 left-margin-desktop hidden md:flex flex-col items-center gap-4 text-paper-white/60"
        >
          <span className="font-body-md text-[10px] font-bold tracking-[0.2em] transform -rotate-90 origin-bottom mb-12 uppercase">SCROLL</span>
          <div className="w-px h-16 bg-paper-white/30 relative overflow-hidden">
            <motion.div
              className="absolute top-0 w-full h-1/2 bg-paper-white"
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      { /* Featured Artwork Grid */}
      <motion.section
        className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1600px] mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex justify-between items-end mb-10 md:mb-16">
          <div>
            <p className="font-label-caps text-label-caps text-gallery-gold mb-4 uppercase tracking-[0.2em]">Curated Selection</p>
            <h2 className="font-headline-lg text-headline-lg">Latest Acquisitions</h2>
          </div>
          <a className="font-label-caps text-label-caps border-b border-primary/20 pb-1 hover:border-primary transition-colors" href="/collections">VIEW COLLECTION</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[300px] gap-2 md:gap-4 grid-flow-row-dense">
          {LATEST_ACQUISITIONS.map((art, index) => {
            let layoutClass = "col-span-1 row-span-1";
            if (index === 0) layoutClass = "md:col-span-2 md:row-span-2";
            else if (index === 3) layoutClass = "md:col-span-3 md:row-span-1";

            const imageUrl = watermarkedImages[art.id] || art.image;

            return (
              <div
                key={art.id}
                className={`group cursor-pointer relative overflow-hidden bg-subtle-smoke ${layoutClass} h-[350px] md:h-auto border border-outline/5 hover:border-gallery-gold/30 transition-colors duration-700`}
                onClick={() => navigate('/artwork/' + art.id)}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  alt={art.title}
                  src={imageUrl}
                />
                {/* Shadow gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

                <div className="absolute bottom-8 left-8 right-8 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-30 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-label-caps text-[10px] text-gallery-gold uppercase tracking-[0.2em]">{art.artist}</p>
                    {art.tier && <ArtworkTierBadge tier={art.tier} showLabel={true} className="text-xs" />}
                  </div>
                  <h3 className="font-headline-md text-2xl text-paper-white leading-tight">{art.title}</h3>
                  <div className="flex justify-between items-end pt-2 border-t border-paper-white/20">
                    <span className="text-sm text-paper-white/90">{art.price}</span>
                    {art.replacementValue && (
                      <span className="text-xs text-paper-white/70">Value: ${(art.replacementValue / 1000).toFixed(0)}K</span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.section>

      { /* Artifact Spotlight: Spaces Carousel */}
      <motion.section
        className="w-full relative bg-subtle-smoke min-h-[80vh] flex items-center justify-center overflow-hidden py-32" id="spotlight"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute inset-0 z-0 bg-matte-black">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentSlide}
              src={SPACES_DATA[currentSlide].image}
              alt={SPACES_DATA[currentSlide].title}
              className="w-full h-full object-cover grayscale-[30%] opacity-30 mix-blend-luminosity"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center text-paper-white">

          <div className="md:col-span-5 active">
            <p className="font-label-caps text-label-caps text-gallery-gold tracking-[0.2em] mb-6 drop-shadow-sm uppercase">Artifact Spotlight</p>
            <h2 className="font-display-lg text-4xl lg:text-6xl mb-8 leading-[1.1] text-paper-white break-words drop-shadow-sm">
              Contextual Brilliance
            </h2>
            <p className="font-body-md text-paper-white/80 mb-12 max-w-md">
              Experience how masterfully curated pieces transform the atmospheric weight and architectural flow of high-profile environments.
            </p>

            <div className="flex gap-4">
              {SPACES_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-12 h-[2px] transition-all duration-300 ${currentSlide === index ? 'bg-gallery-gold' : 'bg-paper-white/30'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 mt-16 md:mt-0 relative h-[400px] flex items-center">
            <div className="absolute w-full max-w-lg bg-surface/90 backdrop-blur-md border border-gallery-gold/30 p-8 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] text-primary">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-label-caps text-[10px] text-gallery-gold tracking-widest block mb-4 uppercase">
                    {SPACES_DATA[currentSlide].subtitle}
                  </span>
                  <h3 className="font-headline-md text-2xl md:text-3xl text-primary mb-4">
                    {SPACES_DATA[currentSlide].title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
                    {SPACES_DATA[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-primary/10 flex justify-between items-center group cursor-pointer">
                <span className="font-label-caps text-[11px] text-primary group-hover:text-gallery-gold transition-colors uppercase">Inquire About This Curation</span>
                <span className="material-symbols-outlined text-sm text-primary group-hover:text-gallery-gold transition-colors group-hover:translate-x-2">arrow_forward</span>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      { /* How it Works */}
      <motion.section
        className="py-section-gap px-margin-mobile md:px-margin-desktop bg-subtle-smoke"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="font-label-caps text-label-caps text-gallery-gold mb-4 uppercase tracking-[0.2em] text-[10px]">Our Process</p>
          <h2 className="font-headline-md text-2xl md:text-3xl">Art Simplified for Your Life</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <span className="material-symbols-outlined text-[28px] text-primary/80">search</span>
            </div>
            <h3 className="font-headline-md text-lg">Browse</h3>
            <p className="font-body-md text-on-surface-variant max-w-[200px] mx-auto text-[13px] leading-relaxed">Explore our vault of thousands of museum-grade pieces curated by experts.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <span className="material-symbols-outlined text-[28px] text-primary/80">calendar_today</span>
            </div>
            <h3 className="font-headline-md text-lg">Subscribe</h3>
            <p className="font-body-md text-on-surface-variant max-w-[200px] mx-auto text-[13px] leading-relaxed">Choose a monthly plan that fits your space and commitment level.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <span className="material-symbols-outlined text-[28px] text-primary/80">home_pin</span>
            </div>
            <h3 className="font-headline-md text-lg">Install</h3>
            <p className="font-body-md text-on-surface-variant max-w-[200px] mx-auto text-[13px] leading-relaxed">White-glove delivery and professional installation included in your plan.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <span className="material-symbols-outlined text-[28px] text-primary/80">autorenew</span>
            </div>
            <h3 className="font-headline-md text-lg">Rotate</h3>
            <p className="font-body-md text-on-surface-variant max-w-[200px] mx-auto text-[13px] leading-relaxed">Refresh your space whenever you want. Trade for a new piece at any time.</p>
          </div>
        </div>
      </motion.section>

      { /* The Art of Curation Simplified */}
      <motion.section
        className="py-section-gap px-margin-mobile md:px-margin-desktop bg-paper-white relative"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start max-w-7xl mx-auto">
          <div className="lg:col-span-5 sticky top-32 self-start bg-paper-white z-10 py-4 lg:py-12">
            <p className="font-label-caps text-[10px] text-gallery-gold mb-4 uppercase tracking-[0.2em]">THE METHOD</p>
            <h2 className="font-display-lg text-4xl md:text-5xl text-primary mb-8 tracking-tight">The Art of Curation Simplified</h2>
            <p className="font-body-md text-on-surface-variant max-w-md leading-relaxed text-[16px]">
              We bridge the gap between world-class creators and sophisticated environments through a seamless, white-glove rental and acquisition ecosystem.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-24 py-12">
            <div className="flex gap-8 group">
              <span className="font-display-lg text-4xl text-gallery-gold/40 group-hover:text-gallery-gold transition-colors duration-500">01</span>
              <div>
                <h4 className="font-headline-lg text-2xl text-primary mb-4">Digital Consultation</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-[15px]">Our curators review your spatial architecture and existing aesthetic to propose a cohesive visual narrative.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <span className="font-display-lg text-4xl text-gallery-gold/40 group-hover:text-gallery-gold transition-colors duration-500">02</span>
              <div>
                <h4 className="font-headline-lg text-2xl text-primary mb-4">Vault Access</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-[15px]">Gain private access to our unlisted collection of physical and digital assets, reserved for enterprise partners.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <span className="font-display-lg text-4xl text-gallery-gold/40 group-hover:text-gallery-gold transition-colors duration-500">03</span>
              <div>
                <h4 className="font-headline-lg text-2xl text-primary mb-4">Precision Logistics</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-[15px]">Climate-controlled transport and museum-grade installation handled by our specialized interior technicians.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <span className="font-display-lg text-4xl text-gallery-gold/40 group-hover:text-gallery-gold transition-colors duration-500">04</span>
              <div>
                <h4 className="font-headline-lg text-2xl text-primary mb-4">Asset Rotation</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-[15px]">Maintain a living gallery with quarterly rotations that keep your environment inspiring and dynamic.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      { /* Trust Section / Gallery Context */}
      <motion.section
        className="py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden relative">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={trustSlide}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="A premium luxury interior"
                  src={TRUST_IMAGES[trustSlide]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
            <div className="absolute -bottom-10 -right-10 hidden md:block w-64 aspect-square border-8 border-paper-white bg-surface-container-highest overflow-hidden shadow-xl">
              <img className="w-full h-full object-cover" alt="A detailed close-up shot of a white-glove professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9hgPKm3x2DG62NPUAcYKLIHPkK6WSbVlR0DFSeLOnHIBKMPZuxOHRMlC5KJStxLq9Q27AerCIrcUEnAuMGXEqXBX7UiAPVHAmYFo4fgl4sTu5DGqtc1YwOQswHQDHID5tqG4wFmdzvkfC4fXdyicI46HcOUTD-hOWjp6kXjoPqKpwrOZbkulXL4Wbrv4QxURF81MIVXtGwS1n1rQEV6YDVxnJrJ_NjbpN5AhJfdKRSvRJQu9LqAYvO4FQ5Cg6N5QwSA67u40tFNs" />
            </div>
          </div>
          <div className="space-y-12 md:pl-8">
            <div>
              <h2 className="font-headline-md text-2xl md:text-3xl mb-6 leading-tight">Empowering Corporate Environments</h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-[15px]">
                We transform sterile workspaces into dynamic galleries that reflect your brand's sophistication. The Kala Vault provides access to premium artwork without the substantial upfront capital bound to permanent acquisition.
              </p>
            </div>
            <div className="pt-8 border-t border-gallery-gold/20">
              <p className="font-label-caps text-label-caps text-charcoal-text mb-8 uppercase tracking-widest text-[10px]">Trusted by leading designers</p>
              <div className="flex gap-8 grayscale opacity-50 flex-wrap">
                <div className="font-display-lg-mobile text-[16px] font-bold">ITC</div>
                <div className="font-display-lg-mobile text-[16px] font-bold">JLL</div>
                <div className="font-display-lg-mobile text-[16px] font-bold">Lucias</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      { /* Client Testimonials Section - Redesigned Premium Editorial Layout */ }
      <motion.section 
        className="py-section-gap px-margin-mobile md:px-margin-desktop bg-matte-black text-paper-white overflow-hidden relative"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          backgroundImage: 'radial-gradient(ellipse at top right, rgba(212, 175, 55, 0.05) 0%, transparent 70%)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-0 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
            <div>
              <p className="font-label-caps text-[10px] text-gallery-gold tracking-[0.3em] uppercase mb-4">// PORTFOLIO PLACEMENTS</p>
              <h2 className="font-headline-lg text-headline-lg text-paper-white leading-none">Client Testimonials</h2>
            </div>
            <div className="mt-6 md:mt-0 font-label-caps text-[11px] text-paper-white/50 tracking-[0.2em] uppercase">
              SELECT INSTALLATIONS & EXHIBITIONS
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column: Framed Image Showcase */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="border border-white/10 p-3 bg-black/40 backdrop-blur-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] relative group rounded-sm max-w-md mx-auto lg:max-w-none">
                <div className="aspect-[3/4] w-full overflow-hidden bg-matte-black relative rounded-[1px] border border-white/5">
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={testimonialSlide}
                      src={TESTIMONIALS_DATA[testimonialSlide].image}
                      alt={`${TESTIMONIALS_DATA[testimonialSlide].client} Installation`}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </AnimatePresence>
                  
                  <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-3 rounded-[2px] z-20 flex justify-between items-center text-[10px] tracking-widest font-label-caps text-paper-white">
                    <span className="text-paper-white/60 uppercase">CASE STUDY: 0{testimonialSlide + 1}</span>
                    <span className="text-gallery-gold font-bold">VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Testimonial Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between min-h-[480px]">
              <div className="space-y-6">
                <span className="font-label-caps text-[11px] text-gallery-gold tracking-[0.25em] uppercase block">
                  {TESTIMONIALS_DATA[testimonialSlide].project}
                </span>
                
                <div className="w-16 h-px bg-gallery-gold/40 my-6" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                  >
                    <blockquote className="font-quote italic text-2xl md:text-3xl lg:text-4xl text-paper-white/95 leading-relaxed font-light tracking-wide">
                      {TESTIMONIALS_DATA[testimonialSlide].quote}
                    </blockquote>
                    
                    <div className="pt-4">
                      <cite className="font-label-caps text-sm text-gallery-gold tracking-[0.2em] uppercase not-italic block font-bold">
                        {TESTIMONIALS_DATA[testimonialSlide].client}
                      </cite>
                      <span className="text-xs text-paper-white/50 block mt-1 uppercase tracking-[0.15em]">
                        {TESTIMONIALS_DATA[testimonialSlide].location}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Editorial bottom navigation bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-12 mt-12 border-t border-white/5 gap-6">
                {/* Custom Slide Number */}
                <div className="flex items-center gap-6">
                  <span className="font-quote italic text-2xl text-gallery-gold">
                    0{testimonialSlide + 1}
                  </span>
                  <div className="w-12 h-px bg-white/20" />
                  <span className="font-quote italic text-sm text-paper-white/40">
                    0{TESTIMONIALS_DATA.length}
     