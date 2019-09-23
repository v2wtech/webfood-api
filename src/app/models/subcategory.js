module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define('Subcategory', {
    idCategory: DataTypes.INTEGER,
    title: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
  });

  return Subcategory;
};
