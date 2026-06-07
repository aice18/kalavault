import { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import { ALL_ARTWORKS, COLLECTIONS, getCollectionStats, CollectionArtwork } from '../lib/collectionsData';
import ArtworkCard from '../components/ArtworkCard';

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
        {/* Header Section */}
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between md:items-end gap-8 border-b border-outline/10 pb-16">
          <div className="max-w-2xl">
            <span className="font-label-caps text-[10px] text-gallery-gold uppercase tracking-[0.2em] mb-4 block">
              Curated Selection
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display-lg text-5xl md:text-7xl tracking-tight mb-6"
            >
              The Collection
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body-lg text-xl text-on-surface-variant"
            >
              {stats.total} curated artworks across {stats.collections} collections. Enterprise acquisition and rotational leasing available.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="p-4 bg-subtle-smoke/50 rounded border border-gallery-gold/10">
                <p className="font-label-caps text-[10px] text-gallery-gold uppercase tracking-widest mb-2">Small</p>
                <p className="font-display-md text-3xl text-primary">{stats.byTier.small}</p>
              </div>
              <div className="p-4 bg-subtle-smoke/50 rounded border border-gallery-gold/10">
                <p className="font-label-caps text-[10px] text-gallery-gold uppercase tracking-widest mb-2">Medium</p>
                <p className="font-display-md text-3xl text-primary">{stats.byTier.medium}</p>
              </div>
              <div className="p-4 bg-subtle-smoke/50 rounded border border-gallery-gold/10">
                <p className="font-label-caps text-[10px] text-gallery-gold uppercase tracking-widest mb-2">Large</p>
                <p className="font-display-md text-3xl text-primary">{stats.byTier.large}</p>
              </div>
              <div className="p-4 bg-subtle-smoke/50 rounded border border-gallery-gold/10">
                <p className="font-label-caps text-[10px] text-gallery-gold uppercase tracking-widest mb-2">Architectural</p>
                <p className="font-display-md text-3xl text-primary">{stats.byTier['extra-large']}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Collection Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 flex flex-wrap gap-2 border-b border-outline/10 pb-6 overflow-x-auto"
        >
          <button
            onClick={() => setActiveTab('all')}
            className={`font-label-caps text-[10px] uppercase tracking-[0.1em] px-6 py-2 whitespace-nowrap transition-all duration-300 ${
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
              className={`font-label-caps text-[10px] uppercase tracking-[0.1em] px-6 py-2 whitespace-nowrap transition-all duration-300 ${
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
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8"
        >
          {loading && (
            <div className="w-full col-span-full flex items-center justify-center py-24">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-3 border-gallery-gold/30 border-t-gallery-gold rounded-full animate-spin" />
                <p className="font-body-md text-on-surface-variant">
                  Loading {activeTab === 'all' ? 'all artworks' : 'collection'}...
                </p>
              </div>
            </div>
          )}

          {!loading && displayedArtworks.length === 0 && (
            <div className="w-full col-span-full flex items-center justify-center py-24">
              <p className="font-body-md text-on-surface-variant">No artworks found in this collection</p>
            </div>
          )}

          {!loading && displayedArtworks.map((art, idx) => (
            <ArtworkCard key={art.id} artwork={art} index={idx} />
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
