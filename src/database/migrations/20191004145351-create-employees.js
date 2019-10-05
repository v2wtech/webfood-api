module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cpf: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      phone: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      role: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      permission: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      user: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      enabled: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employees');
  }
};
