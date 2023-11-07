import { Router } from 'express';
import DB from '../controllers/database';
import categoryRouter from './category';
import brandRouter from './brand';
import productRouter from './product';

const router = Router();

router.get('/', DB.testConnection);

router.use('/categories', categoryRouter);
router.use('/brands', brandRouter);
router.use('/products', productRouter);

router.use('*', (_req, res) => {
	res.status(404).json({ message: 'Resource not found' });
});

export default router;
