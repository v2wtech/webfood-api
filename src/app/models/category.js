module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
  }, {});

  Category.associate = (models) => {
    Category.hasMany(models.Subcategory);
    Category.hasMany(models.Product);
  };

  return Category;
};
