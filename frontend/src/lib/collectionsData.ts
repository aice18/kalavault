/**
 * Collections data from the data/collection folder
 * Each collection groups artworks by size/tier with name and count
 */

export interface CollectionArtwork {
  id: string;
  name: string;
  size: string; // file size representation
  fileName: string;
  localPath: string;
  tier: 'small' | 'medium' | 'large' | 'extra-large';
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  count: number;
  artworks: CollectionArtwork[];
  imageExample?: string; // First artwork image for preview
}

/**
 * Raw artwork data from data/collection folder
 */
const ARTWORK_FILES = [
  { name: 'ImperialNoir', ext: 'jpeg', size: '15k' },
  { name: 'Summer_sLaughter', ext: 'jpeg', size: '15k' },
  { name: 'BurnishedWaters', ext: 'jpeg', size: '20k' },
  { name: 'Citadel', ext: 'jpeg', size: '20k' },
  { name: 'NeonMuse', ext: 'png', size: '20k' },
  { name: 'Urban Siren', ext: 'png', size: '20k' },
  { name: 'SilentPromises', ext: 'png', size: '25k' },
  { name: 'TheLastDance', ext: 'png', size: '30k' },
  { name: 'ThreeSentinels', ext: 'jpeg', size: '30k' },
  { name: 'DivineMajesty', ext: 'png', size: '35k' },
  { name: 'Ferryman_sTale', ext: 'png', size: '35k' },
  { name: 'Geoplay', ext: 'jpeg', size: '35k' },
  { name: 'InterBalance', ext: 'jpeg', size: '35k' },
  { name: 'Iridescene', ext: 'jpeg', size: '35k' },
  { name: 'MysticOfSanyasi', ext: 'jpeg', size: '35k' },
  { name: 'Predator', ext: 'png', size: '35k' },
  { name: 'Roots&Eternity', ext: 'png', size: '35k' },
  { name: 'StructuredChaos', ext: 'jpeg', size: '35k' },
  { name: 'TriBuddha', ext: 'png', size: '35k' },
  { name: 'WhereTimeRests', ext: 'jpeg', size: '35k' },
  { name: 'AriaMelody', ext: 'png', size: '45k' },
  { name: 'BheegeGhats', ext: 'jpeg', size: '45k' },
  { name: 'GildedAwakening', ext: 'jpeg', size: '45k' },
  { name: 'HourOfReverence', ext: 'jpeg', size: '45k' },
  { name: 'NocturneOfKashi', ext: 'jpeg', size: '45k' },
  { name: 'SanctumAtDawn', ext: 'jpeg', size: '45k' },
  { name: 'TheSacredHour', ext: 'jpeg', size: '45k' },
  { name: 'GangesGhats', ext: 'jpeg', size: '50k' },
  { name: 'GoldenBenediction', ext: 'jpeg', size: '50k' },
  { name: 'WhereTimePrays', ext: 'jpeg', size: '50k' },
  { name: 'AartiOfEternity', ext: 'jpeg', size: '55k' },
  { name: 'IlluminatedGanges', ext: 'jpeg', size: '55k' },
  { name: 'LastLight', ext: 'jpeg', size: '55k' },
  { name: 'GhatsOfVaranasi', ext: 'jpeg', size: '60k' },
  { name: 'HorizonOfLife', ext: 'jpeg', size: '60k' },
  { name: 'Nirvana', ext: 'png', size: '60k' },
  { name: 'SevenStallions', ext: 'png', size: '60k' },
];

/**
 * Helper to determine tier from size
 */
function determineTier(size: string): 'small' | 'medium' | 'large' | 'extra-large' {
  const sizeNum = parseInt(size);
  if (sizeNum >= 50) return 'extra-large';
  if (sizeNum >= 35) return 'large';
  if (sizeNum >= 20) return 'medium';
  return 'small';
}

/**
 * Helper to get file extension
 */
function getFileExtension(ext: string): string {
  return `.${ext}`;
}

/**
 * Helper to escape filename for URL
 */
function formatImagePath(name: string, size: string, ext: string): string {
  // URL encode the filename to handle spaces and special characters
  const encodedName = encodeURIComponent(name);
  return `/assets/artworks/(${size})${encodedName}${getFileExtension(ext)}`;
}

/**
 * Collections organized by theme/tier
 */
export const COLLECTIONS: Collection[] = [
  {
    id: 'small-format',
    name: 'Small Format',
    description: 'Compact artworks for personal spaces, home offices, and intimate settings.',
    count: 2,
    artworks: ARTWORK_FILES.filter(f => f.size === '15k').map((art, idx) => ({
      id: `small-${idx}`,
      name: art.name,
      size: art.size,
      fileName: art.name,
      localPath: formatImagePath(art.name, art.size, art.ext),
      tier: 'small',
    })),
  },
  {
    id: 'medium-format',
    name: 'Medium Format',
    description: 'Standard gallery-sized pieces for living rooms, executive offices, and meeting rooms.',
    count: ARTWORK_FILES.filter(f => f.size === '20k' || f.size === '25k' || f.size === '30k').length,
    artworks: ARTWORK_FILES.filter(f => f.size === '20k' || f.size === '25k' || f.size === '30k').map((art, idx) => ({
      id: `medium-${idx}`,
      name: art.name,
      size: art.size,
      fileName: art.name,
      localPath: formatImagePath(art.name, art.size, art.ext),
      tier: 'medium',
    })),
  },
  {
    id: 'large-format',
    name: 'Large Format',
    description: 'Statement pieces for conference rooms, corporate atriums, and gallery spaces.',
    count: ARTWORK_FILES.filter(f => f.size === '35k' || f.size === '45k').length,
    artworks: ARTWORK_FILES.filter(f => f.size === '35k' || f.size === '45k').map((art, idx) => ({
      id: `large-${idx}`,
      name: art.name,
      size: art.size,
      fileName: art.name,
      localPath: formatImagePath(art.name, art.size, art.ext),
      tier: 'large',
    })),
  },
  {
    id: 'extra-large-format',
    name: 'Architectural Scale',
    description: 'Large-format installations for headquarters, atriums, and landmark spaces.',
    count: ARTWORK_FILES.filter(f => parseInt(f.size) >= 50).length,
    artworks: ARTWORK_FILES.filter(f => parseInt(f.size) >= 50).map((art, idx) => ({
      id: `xlarge-${idx}`,
      name: art.name,
      size: art.size,
      fileName: art.name,
      localPath: formatImagePath(art.name, art.size, art.ext),
      tier: 'extra-large',
    })),
  },
];

/**
 * Flat list of all artworks for grid view
 */
export const ALL_ARTWORKS: CollectionArtwork[] = ARTWORK_FILES.map((art, idx) => ({
  id: `art-${idx}`,
  name: art.name,
  size: art.size,
  fileName: art.name,
  localPath: formatImagePath(art.name, art.size, art.ext),
  tier: determineTier(art.size),
}));

/**
 * Get collection by ID
 */
export function getCollectionById(id: string): Collection | undefined {
  return COLLECTIONS.find(c => c.id === id);
}

/**
 * Get artworks by tier
 */
export function getArtworksByTier(tier: 'small' | 'medium' | 'large' | 'extra-large'): CollectionArtwork[] {
  return ALL_ARTWORKS.filter(art => art.tier === tier);
}

/**
 * Get stats for all collections
 */
export function getCollectionStats() {
  return {
    total: ALL_ARTWORKS.length,
    collections: COLLECTIONS.length,
    byTier: {
      small: getArtworksByTier('small').length,
      medium: getArtworksByTier('medium').length,
      large: getArtworksByTier('large').length,
      'extra-large': getArtworksByTier('extra-large').length,
    },
  };
}
