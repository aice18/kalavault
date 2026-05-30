import crypto from 'crypto';
import { ArtworkRepository } from './artwork.repository';
import { ApiError } from '../../shared/errors/api-error';
import { CloudflareR2Service } from '../integrations/cloudflare-r2';
import { createArtworkSchema, createArtworkImageSchema, updateArtworkSchema } from './artwork.dto';

const artworkRepository = new ArtworkRepository();
const r2Service = new CloudflareR2Service();

export class ArtworkService {
  async listArtworks(query: Record<string, any>) {
    const page = Number(query.page ?? 1);
    const limit = Math.min(Number(query.limit ?? 24), 50);
    const skip = (page - 1) * limit;
    const where: Record<string, any> = {};

    if (query.status) where.status = query.status;
    if (query.category) where.category = query.category;
    if (query.warehouseId) where.warehouseId = query.warehouseId;
    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { artist: { contains: query.search, mode: 'insensitive' } },
        { description: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const [items, total] = await Promise.all([
      artworkRepository.findArtworks(where, skip, limit),
      artworkRepository.countArtworks(where),
    ]);

    return { page, limit, total, items };
  }

  async getArtworkById(id: string) {
    const artwork = await artworkRepository.findArtworkById(id);
    if (!artwork) {
      throw new ApiError('Artwork not found', 404);
    }
    return artwork;
  }

  async createArtwork(data: Record<string, any>) {
    const parsed = createArtworkSchema.parse(data);
    return artworkRepository.createArtwork({
      sku: parsed.sku,
      title: parsed.title,
      description: parsed.description,
      artist: parsed.artist,
      style: parsed.style,
      medium: parsed.medium,
      yearCreated: parsed.yearCreated,
      dimensions: parsed.dimensions,
      category: parsed.category,
      warehouseId: parsed.warehouseId,
      rentalPriceCents: parsed.rentalPriceCents,
      replacementValue: parsed.replacementValue,
      metadata: parsed.metadata || {},
    });
  }

  async updateArtwork(id: string, data: Record<string, any>) {
    const parsed = updateArtworkSchema.parse(data);
    return artworkRepository.updateArtwork(id, {
      title: parsed.title,
      description: parsed.description,
      artist: parsed.artist,
      status: parsed.status,
      rentalPriceCents: parsed.rentalPriceCents,
      warehouseId: parsed.warehouseId,
    });
  }

  async createImageUploadUrl(artworkId: string, body: Record<string, any>) {
    const artwork = await artworkRepository.findArtworkById(artworkId);
    if (!artwork) {
      throw new ApiError('Artwork not found', 404);
    }

    const parsed = createArtworkImageSchema.parse(body);
    const imageId = crypto.randomUUID();
    const extension = parsed.mimeType.split('/')[1] ?? 'jpg';
    const fileKey = `artworks/${artworkId}/${imageId}.${extension}`;

    const imageRecord = await artworkRepository.createArtworkImage({
      artworkId,
      fileKey,
      variant: parsed.variant,
      mimeType: parsed.mimeType,
      width: parsed.width,
      height: parsed.height,
      order: parsed.order,
    });

    const uploadUrl = await r2Service.createUploadUrl(fileKey, parsed.mimeType);
    return {
      image: {
        id: imageRecord.id,
        fileKey: imageRecord.fileKey,
        variant: imageRecord.variant,
      },
      uploadUrl,
    };
  }

  async getSignedImageUrl(imageId: string) {
    const image = await artworkRepository.findArtworkImageById(imageId);
    if (!image) {
      throw new ApiError('Artwork image not found', 404);
    }

    const url = await r2Service.getSignedAssetUrl(image.fileKey);
    return { url, mimeType: image.mimeType, variant: image.variant };
  }
}
