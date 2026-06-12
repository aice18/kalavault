import { addWatermarkToImage, WatermarkOptions } from '../lib/watermark';

export interface Artwork {
  id: string;
  title: string;
  artist?: string;
  description?: string;
  medium?: string;
  dimensions?: string;
  rentalPriceCents?: number;
  status?: string;
  localImagePath?: string; // Path to local image file
  images?: {
    id: string;
    fileKey: string;
    variant: string;
    mimeType: string;
  }[];
}

export interface ArtworksResponse {
  page: number;
  limit: number;
  total: number;
  items: Artwork[];
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Local artworks data - for development/demo
const LOCAL_ARTWORKS: Artwork[] = [
  {
    id: '1',
    artist: 'Elena Rossi',
    title: 'The Gaze of Silence',
    description: 'A vertical contemporary portrait with bold, expressionistic brushstrokes.',
    medium: 'Oil on Canvas',
    dimensions: '120 x 150 cm',
    rentalPriceCents: 15000,
    status: 'Available for Lease',
    localImagePath: '/assets/artworks/gaze-of-silence.jpg',
  },
  {
    id: '2',
    artist: 'Marcus Chen',
    title: 'Urban Tectonic II',
    description: 'A square minimalist abstract composition featuring geometric shapes.',
    medium: 'Mixed Media, Charcoal & Ash',
    dimensions: '100 x 100 cm',
    rentalPriceCents: 18500,
    status: 'Available for Acquisition',
    localImagePath: '/assets/artworks/urban-tectonic.jpg',
  },
  {
    id: '3',
    artist: 'Sana Varma',
    title: 'Monsoon Whispers',
    description: 'A vertical atmospheric landscape painting showing a misty morning.',
    medium: 'Watercolor & Ink on Raw Silk',
    dimensions: '90 x 120 cm',
    rentalPriceCents: 21000,
    status: 'Available for Lease',
    localImagePath: '/assets/artworks/monsoon-whispers.jpg',
  },
  {
    id: '4',
    artist: 'Vikram Seth',
    title: 'Celestial Flow',
    description: 'A sophisticated abstract work featuring complex layers of metallic gold leaf.',
    medium: 'Gold Leaf and Indigo Ink on Canvas',
    dimensions: '140 x 180 cm',
    rentalPriceCents: 24000,
    status: 'Acquired',
    localImagePath: '/assets/artworks/celestial-flow.jpg',
  },
  {
    id: '5',
    artist: 'Anya Gupta',
    title: 'Heritage Rhythms',
    description: 'A vibrant contemporary artwork using saturated reds and earthy browns.',
    medium: 'Acrylic and Earth Pigments',
    dimensions: '100 x 100 cm',
    rentalPriceCents: 13000,
    status: 'Available for Lease',
    localImagePath: '/assets/artworks/heritage-rhythms.jpg',
  },
  {
    id: '6',
    artist: 'Kaito Tanaka',
    title: 'Zen Garden I',
    description: 'A serene minimalist line drawing of a floral arrangement.',
    medium: 'Sumi Ink on Washi Paper',
    dimensions: '60 x 80 cm',
    rentalPriceCents: 11000,
    status: 'Available for Acquisition',
    localImagePath: '/assets/artworks/zen-garden.jpg',
  },
];

export async function fetchArtworks(page = 1, limit = 24): Promise<ArtworksResponse> {
  try {
    // Try to fetch from API first
    const response = await fetch(`${API_BASE_URL}/api/artworks?page=${page}&limit=${limit}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn('API fetch failed, using local artworks:', error);
  }

  // Fallback to local artworks
  const startIdx = (page - 1) * limit;
  const endIdx = startIdx + limit;
  const items = LOCAL_ARTWORKS.slice(startIdx, endIdx);

  return {
    page,
    limit,
    total: LOCAL_ARTWORKS.length,
    items,
  };
}

export function getArtworkImagePath(artwork: Artwork): string {
  // Use local image path if available
  if (artwork.localImagePath) {
    return artwork.localImagePath;
  }

  // Otherwise try to get from API images
  if (artwork.images?.[0]) {
    // This would need to be a private endpoint
    return `/api/artworks/${artwork.id}/images/${artwork.images[0].id}`;
  }

  return '';
}

export async function getArtworkImageWithWatermark(
  artwork: Artwork,
  watermarkOptions?: WatermarkOptions
): Promise<string> {
  const imagePath = getArtworkImagePath(artwork);

  if (!imagePath) {
    return '';
  }

  try {
    const watermarkedUrl = await addWatermarkToImage(imagePath, {
      text: '© KALAVAULT',
      fontSize: 28,
      opacity: 0.4,
      position: 'bottom-right',
      color: '#FFFFFF',
      ...watermarkOptions,
    });
    return watermarkedUrl;
  } catch (error) {
    console.error('Error adding watermark:', error);
    return imagePath; // Return original if watermarking fails
  }
}

export function formatPrice(priceInRupees?: number): string {
  if (!priceInRupees) return 'Contact for pricing';
  return `₹${priceInRupees.toLocaleString('en-IN')} / mo`;
}
