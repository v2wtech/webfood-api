'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deliverer = sequelize.define('Deliverer', {
    name: DataTypes.STRING,
    dateBirth: DataTypes.STRING,
    rg: DataTypes.STRING,
    cpf: DataTypes.STRING,
    phone: DataTypes.STRING,
    registrationNumber: DataTypes.STRING,
    enablingCategory: DataTypes.STRING,
    expirationDate: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
  }, {});
  
  Deliverer.associate = (models) => {
    Deliverer.hasMany(models.Order);
  };

  return Deliverer;
};