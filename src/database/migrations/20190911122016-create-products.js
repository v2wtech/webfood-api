module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      valuePaid: {
        allowNull: true,
        type: DataTypes.DECIMAL(10, 2),
      },
      priceSell: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
      },
      GroupId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Groups', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      CategoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      SubCategoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'Subcategories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      enabled: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
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
    return queryInterface.dropTable('Products');
  }
};
