import { Request, Response } from 'express';
import Product from '../models/product';
import Category from '../models/category';

abstract class ProductController {
	static async getAll(_req: Request, res: Response) {
        // De esta forma hacemos un JOIN entre las tablas Products y Categories
		const allProducts = await Product.findAll({ include: Category });
		res.status(200).json({ allProducts });
	}

	static async createOne(req: Request, res: Response) {
		const { name, stock, description, cost, brand, category } = req.body;

		if (!name || !stock || !description || !cost)
			return res.status(400).json({ error: 'All data is required' });

		const stockINT = Number(stock);
		const costINT = Number(cost);

		const newProduct = (await Product.create({
			name,
			stock: stockINT,
			description,
			cost: costINT,
		})) as any;

		await newProduct.setCategory(Number(category));

		res.status(201).json({ newProduct });
	}
}

export default ProductController;
