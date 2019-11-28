'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
  });

  Client.associate = models => {
    Client.hasMany(models.Order);
  };

  return Client;
};