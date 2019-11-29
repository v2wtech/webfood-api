'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    title: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN
  }, {});

  Group.associate = models => {
    Group.hasMany(models.Category, { onDelete: 'CASCADE', onUpdate: 'CASCADE', hooks: true });
    Group.hasMany(models.Product, { onDelete: 'CASCADE', onUpdate: 'CASCADE', hooks: true });
  };
  
  return Group;
};