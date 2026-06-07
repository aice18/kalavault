import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import { getArtworkById, getAdjacentArtworks, ArtworkDetailedInfo } from '../services/artworkDetailService';
import { getArtworkImageWithWatermark } from '../services/artworkService';
import { ArtworkTierBadge, PricingDetails } from '../components/ArtworkTierInfo';

export default function ArtworkDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [artwork, setArtwork] = useState<ArtworkDetailedInfo | null>(null);
  const [watermarkedImage, setWatermarkedImage] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [adjacent, setAdjacent] = useState({ prev: null as any, next: null as any });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!id) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      const artworkData = getArtworkById(id);
      if (artworkData) {
        setArtwork(artworkData);
        setAdjacent(getAdjacentArtworks(id));
        
        // Load watermarked image
        const fakeArtwork = {
          id: artworkData.id,
          title: artworkData.name,
          localImagePath: artworkData.localPath,
        };
        getArtworkImageWithWatermark(fakeArtwork).then(img => {
          setWatermarkedImage(img);
          setImageLoading(false);
        });
      }
      setLoading(false);
    }, 50);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="bg-paper-white text-primary min-h-screen flex flex-col pt-16 md:pt-24">
        <TopNavBar />
        <main className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-3 border-gallery-gold/30 border-t-gallery-gold rounded-full animate-spin" />
            <p className="font-body-md text-on-surface-variant">Loading artwork...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!artwork) {
    return (
      <div className="bg-paper-white text-primary min-h-screen flex flex-col pt-16 md:pt-24">
        <TopNavBar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display-lg text-4xl mb-4">Artwork Not Found</h1>
            <p className="font-body-md text-on-surface-variant mb-8">The artwork you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/collections')}
              className="font-label-caps text-[10px] uppercase tracking-[0.1em] px-8 py-3 bg-primary text-paper-white hover:bg-primary/90 transition-colors duration-300"
            >
              Back to Collections
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-paper-white text-primary min-h-screen flex flex-col pt-16 md:pt-24">
      <TopNavBar />

      <main className="flex-1 w-full max-w-[1600px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/collections')}
          className="mb-12 font-label-caps text-[10px] uppercase tracking-[0.1em] text-gallery-gold hover:text-gallery-gold/80 transition-colors flex items-center gap-2"
        >
          ← Back to Collections
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden bg-subtle-smoke shadow-xl rounded-sm">
              {watermarkedImage ? (
                <img
                  src={watermarkedImage}
                  alt={artwork.name}
                  className="w-full h-auto object-cover transition-transform duration-300"
                  onLoad={() => setImageLoading(false)}
                />
              ) : (
                <div className="w-full aspect-square bg-gradient-to-br from-subtle-smoke to-subtle-smoke/50 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 border-3 border-gallery-gold/30 border-t-gallery-gold rounded-full animate-spin" />
                    <p className="text-on-surface-variant text-sm">Loading image...</p>
                  </div>
                </div>
              )}

              {/* Golden Frame */}
              <div className="absolute inset-0 border-[0.15cm] border-[#cca550] shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] z-10 pointer-events-none mix-blend-multiply opacity-90" />
              <div className="absolute inset-0 border-[0.15cm] border-gallery-gold z-10 pointer-events-none shadow-[inset_0_4px_15px_rgba(0,0,0,0.5),0_10px_30px_rgba(0,0,0,0.3)] opacity-80" />
            </div>

            {/* Artwork Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-subtle-smoke/50 rounded border border-gallery-gold/10">
                <p className="font-label-caps text-[9px] text-gallery-gold uppercase tracking-wider mb-2">Size</p>
                <p className="font-display-md text-xl text-primary">{artwork.size}</p>
              </div>
              <div className="p-4 bg-subtle-smoke/50 rounded border border-gallery-gold/10">
                <p className="font-label-caps text-[9px] text-gallery-gold uppercase tracking-wider mb-2">Year</p>
                <p className="font-display-md text-xl text-primary">{artwork.yearCreated}</p>
              </div>
              <div className="p-4 bg-subtle-smoke/50 rounded border border-gallery-gold/10">
                <p className="font-label-caps text-[9px] text-gallery-gold uppercase tracking-wider mb-2">Tier</p>
                <div className="flex items-center justify-center">
                  <ArtworkTierBadge tier={artwork.tier} showLabel={true} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Title & Artist */}
            <div>
              <h1 className="font-display-lg text-4xl md:text-5xl text-primary mb-4 tracking-tight">
                {artwork.name}
              </h1>
              <p className="font-body-lg text-lg text-on-surface-variant mb-6">
                by {artwork.artist}
              </p>
              
              {/* Description */}
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {artwork.description}
              </p>
            </div>

            {/* Details */}
            <div className="border-t border-outline/10 pt-6 space-y-4">
              <div>
                <p className="font-label-caps text-[9px] text-gallery-gold uppercase tracking-wider mb-1">Medium</p>
                <p className="font-body-md text-primary">{artwork.medium}</p>
              </div>
              <div>
                <p className="font-label-caps text-[9px] text-gallery-gold uppercase tracking-wider mb-1">Condition</p>
                <p className="font-body-md text-primary">{artwork.condition}</p>
              </div>
              <div>
                <p className="font-label-caps text-[9px] text-gallery-gold uppercase tracking-wider mb-1">Provenance</p>
                <p className="font-body-md text-primary text-sm">{artwork.provenance}</p>
              </div>
            </div>

            {/* Pricing */}
            {artwork.pricing && (
              <div className="border-t border-outline/10 pt-6">
                <p className="font-label-caps text-[9px] text-gallery-gold uppercase tracking-wider mb-4">Rental Pricing</p>
                <PricingDetails 
                  tier={artwork.tier}
                  pricing={artwork.pricing}
                />
              </div>
            )}

            {/* CTA Buttons */}
            <div className="border-t border-outline/10 pt-6 flex flex-col gap-3">
              <button className="w-full font-label-caps text-[10px] uppercase tracking-[0.1em] px-6 py-3 bg-primary text-paper-white hover:bg-primary/90 transition-colors duration-300 shadow-sm">
                Inquire for Rental
              </button>
              <button className="w-full font-label-caps text-[10px] uppercase tracking-[0.1em] px-6 py-3 border border-primary text-primary hover:bg-primary/5 transition-colors duration-300">
                Request Information
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related Artworks */}
        {artwork.relatedArtworks && artwork.relatedArtworks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24 pt-16 border-t border-outline/10"
          >
            <h2 className="font-display-md text-3xl mb-12 text-primary">Related Artworks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {artwork.relatedArtworks.map((related, idx) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onClick={() => navigate(`/artwork/${related.id}`)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-subtle-smoke shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-sm mb-3">
                    <div className="aspect-square bg-gradient-to-br from-subtle-smoke to-subtle-smoke/50 flex items-center justify-center">
                      <p className="text-on-surface-variant text-sm text-center px-4">{related.name}</p>
                    </div>
                    <div className="absolute inset-0 border-[0.1cm] border-gallery-gold/50 z-10 pointer-events-none opacity-60" />
                  </div>
                  <h3 className="font-display-sm text-sm text-primary group-hover:text-gallery-gold transition-colors duration-300">
                    {related.name}
                  </h3>
                  <p className="font-label-caps text-[9px] text-on-surface-variant uppercase tracking-wider mt-1">
                    {related.size}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        {(adjacent.prev || adjacent.next) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24 pt-16 border-t border-outline/10 flex justify-between"
          >
            {adjacent.prev ? (
              <button
                onClick={() => navigate(`/artwork/${adjacent.prev.id}`)}
                className="font-label-caps text-[10px] uppercase tracking-[0.1em] text-gallery-gold hover:text-gallery-gold/80 transition-colors flex items-center gap-2"
              >
                ← Previous
              </button>
            ) : (
              <div />
            )}
            {adjacent.next ? (
              <button
                onClick={() => navigate(`/artwork/${adjacent.next.id}`)}
                className="font-label-caps text-[10px] uppercase tracking-[0.1em] text-gallery-gold hover:text-gallery-gold/80 transition-colors flex items-center gap-2"
              >
                Next →
              </button>
            ) : (
              <div />
            )}
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}
