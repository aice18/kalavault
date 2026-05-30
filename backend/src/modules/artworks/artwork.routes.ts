import { Router } from 'express';
import { authGuard, roleGuard } from '../../shared/middleware/auth.middleware';
import { ArtworkController } from './artwork.controller';
import { asyncHandler } from '../../shared/utils/async-handler';

const router = Router();
const controller = new ArtworkController();

router.get('/', authGuard, asyncHandler((req, res) => controller.list(req, res)));
router.get('/:id', authGuard, asyncHandler((req, res) => controller.getById(req, res)));
router.post('/', authGuard, roleGuard(['admin', 'operations']), asyncHandler((req, res) => controller.create(req, res)));
router.put('/:id', authGuard, roleGuard(['admin', 'operations']), asyncHandler((req, res) => controller.update(req, res)));
router.post('/:id/images', authGuard, roleGuard(['admin', 'operations']), asyncHandler((req, res) => controller.generateUploadUrl(req, res)));
router.get('/:id/images/:imageId/url', authGuard, asyncHandler((req, res) => controller.getImageUrl(req, res)));

export { router as artworkRouter };
