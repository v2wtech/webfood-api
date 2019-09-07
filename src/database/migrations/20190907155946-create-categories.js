module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idSubCategory: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Categories');
  }
};
