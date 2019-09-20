module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    valuePaid: DataTypes.DECIMAL(10,2),
    priceSell: DataTypes.DECIMAL(10,2),
    idCategory: DataTypes.INTEGER,
    idSubCategory: DataTypes.INTEGER,
    enabled: DataTypes.BOOLEAN,
  });
  
  return Product;
};