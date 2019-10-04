'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    groupId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN
  }, {});

  Category.associate = models => {
    Category.belongsTo(models.Group);
    Category.hasMany(models.Subcategory);
    Category.hasMany(models.Product);
  };
  
  return Category;
};