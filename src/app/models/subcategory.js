module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define('Subcategory', {
    CategoryId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
  }, {});

  Subcategory.associate = (models) => {
    Subcategory.belongsTo(models.Category);
    Subcategory.hasMany(models.Product);
  };

  return Subcategory;
};
