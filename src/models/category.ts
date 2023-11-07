import sequelize, { DataTypes, Model } from './db';

class Category extends Model {}

Category.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Category',
		tableName: 'Categories',
	}
);

export default Category;