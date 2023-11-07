import { Router } from 'express';
import ProductController from '../controllers/product';

const router = Router();

router.get('/', ProductController.getAll);
router.post('/', ProductController.createOne);

router.use('*', (_req, res) => {
	res.status(404).json({ message: 'Resource not found' });
});

export default router;