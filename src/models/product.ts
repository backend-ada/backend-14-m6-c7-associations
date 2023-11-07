import sequelize, { DataTypes, Model } from './db';

class Product extends Model {}

Product.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		cost: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Product',
		tableName: 'Products',
	}
);

export default Product;