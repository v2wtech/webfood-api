module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    title: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
  }, {});

  Group.associate = (models) => {
    Group.hasMany(models.Category);
    Group.hasMany(models.Product);
  };

  return Group;
};
