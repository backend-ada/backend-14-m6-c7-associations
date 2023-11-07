import { Router } from 'express';
import CategoryController from '../controllers/category';

const router = Router();

router.get('/', CategoryController.getAll);
router.post('/', CategoryController.createOne);

router.use('*', (_req, res) => {
	res.status(404).json({ message: 'Resource not found' });
});

export default router;
