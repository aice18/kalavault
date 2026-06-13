import { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import { ALL_ARTWORKS, COLLECTIONS, getCollectionStats, CollectionArtwork } from '../lib/collectionsData';
import ArtworkCard from '../components/ArtworkCard';
import { getArtworkImageWithWatermark } from '../services/artworkService';



export default function Collections() {
  const [activeTab, setActiveTab] = useState('all');
  const [artworks, setArtworks] = useState<CollectionArtwork[]>([]);
  const [loading, setLoading] = useState(true);
  const stats = getCollectionStats();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fast data loading with minimal delay
    const timer = setTimeout(() => {
      if (activeTab === 'all') {
        setArtworks(ALL_ARTWORKS);
      } else {
        const collection = COLLECTIONS.find(c => c.id === activeTab);
        setArtworks(collection?.artworks || []);
      }
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab]);

  // Memoize artworks to prevent unnecessary re-renders
  const displayedArtworks = useMemo(() => artworks, [artworks]);

  return (
    <div className="bg-paper-white text-primary min-h-screen font-body-md flex flex-col pt-16 md:pt-24">
      <TopNavBar />

      <main className="flex-1 w-full max-w-[1800px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        {/* Header Section - 12-Column Architectural Layout */}
        <div className="relative mb-20 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-outline/10 pb-16 items-stretch overflow-visible">
          {/* Ambient Luxury Blur Backdrops */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10" />

          {/* Left Column: Editorial Banner (4-Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between relative lg:border-r lg:border-outline/10 lg:pr-12">
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-label-caps text-[10px] text-gallery-gold uppercase tracking-[0.3em] block font-bold">
                  Curated Catalog
                </span>
                <div className="h-[1px] w-12 bg-gallery-gold/30" />
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display-lg text-5xl md:text-7xl tracking-tight mb-8 text-primary leading-[1.1]"
              >
                The <span className="italic font-light text-gallery-gold font-serif">Collection</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-body-lg text-[15px] md:text-[16px] text-on-surface-variant/95 leading-relaxed border-l-2 border-gallery-gold/30 pl-5 mb-8"
              >
                A highly structured directory of <span className="text-primary font-semibold">{stats.total}</span> curated corporate-grade assets across <span className="text-primary font-semibold">{stats.collections}</span> distinct themes. Programmed for flexible rotational workspaces.
              </motion.p>
            </div>

            {/* Catalog Info Footer Badge (Desktop only) */}
            <div className="hidden lg:block pt-6 border-t border-outline/5 mt-auto">
              <div className="flex items-center justify-between text-[10px] font-mono text-on-surface-variant/50 uppercase tracking-widest">
                <span>System Status</span>
                <span className="text-gallery-gold font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gallery-gold animate-pulse" />
                  Active Registry
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Symmetrical 2x2 Grid (8-Columns) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1
                }
              }
            }}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
          >
            {[
              { 
                idx: '01',
                label: 'Small Format', 
                count: stats.byTier.small, 
                range: 'From ₹180/mo', 
                desc: 'Tier I', 
                details: 'Intimate private desks, shelving units, and study niches.',
                dimension: 'Up to 18" × 24"'
              },
              { 
                idx: '02',
                label: 'Medium Format', 
                count: stats.byTier.medium, 
                range: 'From ₹240/mo', 
                desc: 'Tier II', 
                details: 'Executive offices, conference booths, and focal corridors.',
                dimension: 'Up to 36" × 48"'
              },
              { 
                idx: '03',
                label: 'Large Scale', 
                count: stats.byTier.large, 
                range: 'From ₹420/mo', 
                desc: 'Tier III', 
                details: 'Boardrooms, open receptions, and shared collaboration spaces.',
                dimension: 'Up to 60" × 80"'
              },
              { 
                idx: '04',
                label: 'Architectural', 
                count: stats.byTier['extra-large'], 
                range: 'From ₹600/mo', 
                desc: 'Tier IV', 
                details: 'Double-height building lobbies, main atriums, and public installs.',
                dimension: 'Site-specific'
              }
            ].map((item) => (
              <motion.div 
                key={item.idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative p-6 bg-white/50 backdrop-blur-md rounded-xl border border-gallery-gold/15 hover:border-gallery-gold/35 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.06)] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300"
              >
                {/* Corner mounts / brackets representing structured framing */}
                <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-gallery-gold/0 group-hover:border-gallery-gold/40 transition-colors duration-500" />
                <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-gallery-gold/0 group-hover:border-gallery-gold/40 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-gallery-gold/0 group-hover:border-gallery-gold/40 transition-colors duration-500" />
                <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-gallery-gold/0 group-hover:border-gallery-gold/40 transition-colors duration-500" />

                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-gallery-gold/50 transition-all duration-500" />
                
                {/* Internal card hover gradient light */}
                <div className="absolute -right-12 -bottom-12 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                <div>
                  {/* Card Header Row */}
                  <div className="flex justify-between items-center mb-4 pb-3 border-b border-outline/5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[11px] text-gallery-gold font-bold tracking-widest">
                        {item.idx}
                      </span>
                      <div className="w-[1px] h-3 bg-outline/25" />
                      <span className="text-[10px] text-on-surface-variant/50 font-mono tracking-widest block uppercase font-medium">
                        {item.desc}
                      </span>
                    </div>
                    <span className="font-mono text-[9.5px] text-on-surface-variant/60 tracking-wider bg-outline/5 px-2.5 py-0.5 rounded">
                      {item.dimension}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display-sm text-xl text-primary tracking-wide mb-2.5 group-hover:text-gallery-gold transition-colors duration-300 font-medium">
                    {item.label}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[13px] text-on-surface-variant/80 font-body-md leading-relaxed mb-6 group-hover:text-primary transition-colors duration-300">
                    {item.details}
                  </p>
                </div>

                {/* Card Symmetrical Footer columns */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline/5 relative z-10">
                  <div className="flex flex-col border-r border-outline/5">
                    <span className="text-[9.5px] text-on-surface-variant/40 uppercase tracking-widest block mb-1 font-semibold">
                      Inventory
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display-lg text-2xl font-light text-primary group-hover:text-gallery-gold transition-colors duration-500 leading-none">
                        {item.count}
                      </span>
                      <span className="text-[10px] text-on-surface-variant/50 font-mono">units</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-end items-end">
                    <span className="text-[9.5px] text-on-surface-variant/40 uppercase tracking-widest block mb-1.5 font-semibold">
                      Lease Cost
                    </span>
                    <span className="font-mono text-[11.5px] text-gallery-gold font-bold tracking-wider whitespace-nowrap bg-gallery-gold/5 border border-gallery-gold/15 px-2.5 py-1 rounded">
                      {item.range}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Collection Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 flex flex-wrap gap-2 border-b border-outline/10 pb-6 overflow-x-auto hide-scrollbar"
        >
          <button
            onClick={() => setActiveTab('all')}
            className={`font-label-caps text-[10px] uppercase tracking-[0.1em] px-6 py-2.5 whitespace-nowrap transition-all duration-300 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-primary text-paper-white shadow-[0_2px_10px_rgba(0,0,0,0.1)]'
                : 'text-on-surface-variant hover:text-gallery-gold hover:bg-paper-white/50 border border-transparent hover:border-gallery-gold/20'
            }`}
          >
            All Works ({stats.total})
          </button>
          {COLLECTIONS.map(collection => (
            <button
              key={collection.id}
              onClick={() => setActiveTab(collection.id)}
              className={`font-label-caps text-[10px] uppercase tracking-[0.1em] px-6 py-2.5 whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeTab === collection.id
                  ? 'bg-primary text-paper-white shadow-[0_2px_10px_rgba(0,0,0,0.1)]'
                  : 'text-on-surface-variant hover:text-gallery-gold hover:bg-paper-white/50 border border-transparent hover:border-gallery-gold/20'
              }`}
            >
              {collection.name} ({collection.count})
            </button>
          ))}
        </motion.div>

        {/* Artworks Grid */}
        {loading ? (
          <div className="w-full flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-3 border-gallery-gold/30 border-t-gallery-gold rounded-full animate-spin" />
              <p className="font-body-md text-on-surface-variant">
                Loading {activeTab === 'all' ? 'all artworks' : 'collection'}...
              </p>
            </div>
          </div>
        ) : displayedArtworks.length === 0 ? (
          <div className="w-full flex items-center justify-center py-24">
            <p className="font-body-md text-on-surface-variant">No artworks found in this collection</p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8"
          >
            {displayedArtworks.map((art, idx) => (
              <ArtworkCard key={art.id} artwork={art} index={idx} />
            ))}
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}
