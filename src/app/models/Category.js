'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    groupId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN
  }, {});

  Category.associate = models => {
    Category.belongsTo(models.Group);
    Category.hasMany(models.Subcategory, { onDelete: 'CASCADE', onUpdate: 'CASCADE', hooks: true } );
    Category.hasMany(models.Product, { onDelete: 'CASCADE', onUpdate: 'CASCADE', hooks: true });
  };
  
  return Category;
};