module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    idSubCategory: DataTypes.INTEGER,
    title: DataTypes.STRING,
  });

  return Category;
};
