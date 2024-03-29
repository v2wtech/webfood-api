'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderType: DataTypes.BOOLEAN,
    orderTo: DataTypes.INTEGER,
    tableId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    receiveMethod: DataTypes.BOOLEAN,
    deliverymanId: DataTypes.INTEGER,
    paymentMethod: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {});

  Order.associate = (models) => {
    Order.belongsTo(models.Deliverer);
    Order.belongsTo(models.OrderItem);
    Order.belongsTo(models.Table);
    Order.belongsTo(models.Client);
  };

  return Order;
};