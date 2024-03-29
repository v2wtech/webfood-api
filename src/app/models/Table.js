'use strict';
module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    description: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
  }, {});
  
  Table.associate = (models) => {
    Table.hasMany(models.Order);
  };
  
  return Table;
};