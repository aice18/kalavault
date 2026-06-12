import { ALL_ARTWORKS, CollectionArtwork, parseArtworkValueFromSize } from '../lib/collectionsData';
import { PRICING_TIERS } from '../lib/rentalPricing';

export interface ArtworkDetailedInfo extends CollectionArtwork {
  artist?: string;
  description?: string;
  medium?: string;
  yearCreated?: number;
  provenance?: string;
  condition?: string;
  pricing?: typeof PRICING_TIERS[keyof typeof PRICING_TIERS];
  monthlyRent?: string;
  replacementValue?: number;
  relatedArtworks?: CollectionArtwork[];
}

/**
 * Get artwork by ID with full details
 */
export function getArtworkById(id: string): ArtworkDetailedInfo | null {
  let artwork = ALL_ARTWORKS.find(art => art.id === id);
  
  if (!artwork) {
    // Fallback: Map landing page string IDs to corresponding filenames
    if (id === "1") artwork = ALL_ARTWORKS.find(art => art.name === "ImperialNoir");
    else if (id === "2") artwork = ALL_ARTWORKS.find(art => art.name === "BurnishedWaters");
    else if (id === "3") artwork = ALL_ARTWORKS.find(art => art.name === "DivineMajesty");
    else if (id === "4") artwork = ALL_ARTWORKS.find(art => art.name === "GangesGhats");
  }
  
  if (!artwork) return null;

  const artworkValue = parseArtworkValueFromSize(artwork.size);
  const baseMonthlyRent = Math.round(artworkValue * 0.02); // 2% per month

  const pricing = {
    tier: artwork.tier,
    label: PRICING_TIERS[artwork.tier].label,
    valueRange: PRICING_TIERS[artwork.tier].valueRange,
    yearlyRent: Math.round(artworkValue * 0.012 * 12),     // 1.2% per month discounted
    halfYearlyRent: Math.round(artworkValue * 0.015 * 6), // 1.5% per month discounted
    quarterlyRent: Math.round(artworkValue * 0.018 * 3),   // 1.8% per month discounted
    monthlyRent: baseMonthlyRent,
    description: PRICING_TIERS[artwork.tier].description,
  };

  // Generate mock details based on artwork name and tier
  const details: ArtworkDetailedInfo = {
    ...artwork,
    artist: generateArtistName(artwork.name),
    description: generateDescription(artwork.name, artwork.tier),
    medium: getRandomMedium(),
    yearCreated: 2020 + Math.floor(Math.random() * 4),
    provenance: `Curated by Kalavault Gallery | ₹${artworkValue.toLocaleString('en-IN')} acquisition value`,
    condition: 'Excellent',
    pricing: pricing as any,
    monthlyRent: `₹${pricing.monthlyRent.toLocaleString('en-IN')}/month`,
    replacementValue: artworkValue,
    relatedArtworks: getRelatedArtworks(artwork.id, artwork.tier),
  };

  return details;
}

/**
 * Get related artworks by tier
 */
function getRelatedArtworks(currentId: string, tier: string): CollectionArtwork[] {
  return ALL_ARTWORKS
    .filter(art => art.id !== currentId && art.tier === tier)
    .slice(0, 4);
}

/**
 * Generate artist name based on artwork
 */
function generateArtistName(artworkName: string): string {
  const artists = [
    'Elena Rossi', 'Marcus Chen', 'Sana Varma', 'Vikram Seth', 'Anya Gupta',
    'Rajesh Kumar', 'Priya Sharma', 'Arjun Patel', 'Deepika Singh', 'Aryan Datta',
    'Nisha Kapoor', 'Rohit Verma', 'Sneha Gupta', 'Aditya Menon', 'Kavya Iyer'
  ];
  
  // Use artwork name length as seed for consistent artist assignment
  const index = artworkName.length % artists.length;
  return artists[index];
}

/**
 * Generate artwork description
 */
function generateDescription(name: string, tier: string): string {
  const descriptions: Record<string, string[]> = {
    'small': [
      'An intimate contemporary work exploring personal narratives through bold, expressive brushstrokes.',
      'A delicate composition that invites quiet reflection through carefully composed forms.',
      'A minimalist statement piece that challenges traditional perspectives through color and form.',
    ],
    'medium': [
      'A sophisticated abstract exploration of movement and light, perfect for corporate spaces.',
      'A curated work that bridges traditional and contemporary artistic sensibilities.',
      'A striking composition designed for gallery walls and executive environments.',
    ],
    'large': [
      'A monumental piece commanding attention through its scale and intricate layering of materials.',
      'An ambitious work that transforms architectural spaces with its bold presence.',
      'A gallery-scale statement establishing new conversations around contemporary art.',
    ],
    'extra-large': [
      'An architectural installation designed for landmark spaces and institutional settings.',
      'A transformative work that redefines how we experience contemporary art at scale.',
      'A masterwork commanding iconic spaces with its unprecedented visual impact.',
    ],
  };

  const tierDescriptions = descriptions[tier] || descriptions['medium'];
  const index = name.charCodeAt(0) % tierDescriptions.length;
  return tierDescriptions[index];
}

/**
 * Get random medium
 */
function getRandomMedium(): string {
  const mediums = [
    'Oil on Canvas',
    'Mixed Media, Charcoal & Ash',
    'Watercolor & Ink on Raw Silk',
    'Gold Leaf and Indigo Ink on Canvas',
    'Acrylic & Graphite on Linen',
    'Pigment & Resin on Wood',
    'Digital Print on Museum Board',
    'Textile & Found Objects',
  ];
  return mediums[Math.floor(Math.random() * mediums.length)];
}

/**
 * Get next and previous artworks for navigation
 */
export function getAdjacentArtworks(currentId: string) {
  const currentIndex = ALL_ARTWORKS.findIndex(art => art.id === currentId);
  if (currentIndex === -1) return { prev: null, next: null };

  return {
    prev: currentIndex > 0 ? ALL_ARTWORKS[currentIndex - 1] : null,
    next: currentIndex < ALL_ARTWORKS.length - 1 ? ALL_ARTWORKS[currentIndex + 1] : null,
  };
}
