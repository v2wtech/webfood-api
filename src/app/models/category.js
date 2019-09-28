module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    GroupId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
  }, {});

  Category.associate = (models) => {
    Category.belongsTo(models.Group);
    Category.hasMany(models.Subcategory);
    Category.hasMany(models.Product);
  };

  return Category;
};
