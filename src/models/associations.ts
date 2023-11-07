import Product from './product';
import Category from './category';

Category.hasMany(Product);
Product.belongsTo(Category);
