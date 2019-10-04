'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
  });

  Client.associate = models => {
    // associations can be defined here
  };

  return Client;
};