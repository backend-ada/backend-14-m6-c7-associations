import { Router } from 'express';
import BrandController from '../controllers/brand';

const router = Router();

router.get('/', BrandController.getAll);
router.post('/', BrandController.createOne);

router.use('*', (_req, res) => {
	res.status(404).json({ message: 'Resource not found' });
});

export default router;