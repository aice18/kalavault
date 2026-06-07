import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { getArtworkImageWithWatermark } from '../services/artworkService';
import { ArtworkTierBadge } from './ArtworkTierInfo';
import { CollectionArtwork } from '../lib/collectionsData';

interface ArtworkCardProps {
  artwork: CollectionArtwork;
  index?: number;
}

export default function ArtworkCard({ artwork, index = 0 }: ArtworkCardProps) {
  const navigate = useNavigate();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });
  const [watermarkedImage, setWatermarkedImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const loadWatermark = async () => {
      try {
        setIsLoading(true);
        const fakeArtwork = {
          id: artwork.id,
          title: artwork.name,
          localImagePath: artwork.localPath,
        };
        const watermarked = await getArtworkImageWithWatermark(fakeArtwork);
        setWatermarkedImage(watermarked);
      } catch (err) {
        console.error(`Error watermarking ${artwork.id}:`, err);
      } finally {
        setIsLoading(false);
      }
    };

    loadWatermark();
  }, [isVisible, artwork]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.05 }}
      className="group cursor-pointer flex flex-col break-inside-avoid mb-6 md:mb-8"
      onClick={() => navigate(`/artwork/${artwork.id}`)}
    >
      <div className="relative overflow-hidden bg-subtle-smoke shadow-sm hover:shadow-xl transition-shadow duration-700">
        {watermarkedImage ? (
          <img
            className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            alt={artwork.name}
            src={watermarkedImage}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-64 bg-gradient-to-br from-subtle-smoke to-subtle-smoke/50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-2 border-gallery-gold/30 border-t-gallery-gold rounded-full animate-spin" />
              <p className="text-on-surface-variant text-xs text-center px-4">
                {isLoading ? 'Loading...' : 'Preparing image...'}
              </p>
            </div>
          </div>
        )}

        {/* Shadow gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

        {/* Golden frame effect */}
        <div className="absolute inset-0 border-[0.15cm] border-[#cca550] shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] z-20 pointer-events-none mix-blend-multiply opacity-90" />
        <div className="absolute inset-0 border-[0.15cm] border-gallery-gold z-20 pointer-events-none shadow-[inset_0_4px_15px_rgba(0,0,0,0.5),0_10px_30px_rgba(0,0,0,0.3)] opacity-80" />
      </div>

      <div className="mt-4 flex justify-between items-start gap-3">
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="font-display-md text-lg text-primary tracking-tight transition-colors duration-300 group-hover:text-gallery-gold break-words truncate">
            {artwork.name}
          </h3>
          <p className="font-label-caps text-[9px] text-on-surface-variant uppercase tracking-[0.2em] mt-1">
            {artwork.size}
          </p>
        </div>
        <ArtworkTierBadge tier={artwork.tier} showLabel={true} className="text-xs flex-shrink-0" />
      </div>
    </motion.div>
  );
}
