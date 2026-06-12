import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArtworkTierBadge } from './ArtworkTierInfo';
import { CollectionArtwork, parseArtworkValueFromSize } from '../lib/collectionsData';

interface ArtworkCardProps {
  artwork: CollectionArtwork;
  index?: number;
  key?: any;
}

export default function ArtworkCard({ artwork, index = 0 }: ArtworkCardProps) {
  const navigate = useNavigate();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

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
        <img
          className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center group-hover:scale-115"
          alt={artwork.name}
          src={artwork.localPath}
          loading="lazy"
        />

        {/* Tiled watermark repeating overlay - disappears on hover */}
        <div className="watermark-tiled transition-opacity duration-500 group-hover:opacity-0" />

        {/* Shadow gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Golden frame effect - fades out on hover */}
        <div className="absolute inset-0 border-[0.15cm] border-[#cca550] shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] z-20 pointer-events-none mix-blend-multiply opacity-90 transition-opacity duration-500 group-hover:opacity-0" />
        <div className="absolute inset-0 border-[0.15cm] border-gallery-gold z-20 pointer-events-none shadow-[inset_0_4px_15px_rgba(0,0,0,0.5),0_10px_30px_rgba(0,0,0,0.3)] opacity-80 transition-opacity duration-500 group-hover:opacity-0" />
      </div>

      <div className="mt-4 pt-3 border-t border-gallery-gold/10 flex justify-between items-center gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-display-sm text-[16px] font-semibold text-primary tracking-tight group-hover:text-gallery-gold transition-colors duration-300 truncate leading-tight">
            {artwork.name}
          </h3>
          <span className="text-[9px] font-label-caps tracking-widest text-on-surface-variant/60 uppercase block mt-1">
            Value: ₹{parseArtworkValueFromSize(artwork.size).toLocaleString('en-IN')}
          </span>
        </div>
        <div className="text-right flex flex-col items-end justify-center flex-shrink-0">
          <span className="text-[10px] font-bold font-label-caps tracking-wider text-gallery-gold bg-gallery-gold/5 px-2 py-0.5 rounded border border-gallery-gold/15 shadow-[0_2px_8px_rgba(212,175,55,0.04)]">
            ₹{Math.round(parseArtworkValueFromSize(artwork.size) * 0.012).toLocaleString('en-IN')}/mo
          </span>
          <span className="text-[8px] font-label-caps tracking-widest text-on-surface-variant/50 uppercase mt-0.5 block">
            Lease
          </span>
        </div>
      </div>
    </motion.div>
  );
}
