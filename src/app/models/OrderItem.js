'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    orderId: DataTypes.INTEGER, 
    items: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
  }, {});

  OrderItem.associate = (models) => {
    OrderItem.hasOne(models.Order);
    OrderItem.hasMany(models.Product);
  };
  return OrderItem;
};