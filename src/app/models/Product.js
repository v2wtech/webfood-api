module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    valuePaid: DataTypes.DECIMAL(10,2),
    priceSell: DataTypes.DECIMAL(10,2),
    groupId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    subcategoryId: DataTypes.INTEGER,
    enabled: DataTypes.BOOLEAN,
  }, {});
  
  Product.associate = (models) => {
    Product.belongsTo(models.Group);
    Product.belongsTo(models.Category);
    Product.belongsTo(models.Subcategory);
    Product.belongsTo(models.OrderItem);
  };

  return Product;
};