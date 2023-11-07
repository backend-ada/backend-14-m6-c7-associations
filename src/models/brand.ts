import sequelize, { DataTypes, Model } from './db';

class Brand extends Model {}

Brand.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Brand',
		tableName: 'Brands',
	}
);

export default Brand;
