'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderType: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      orderTo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      receiveMethod: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      deliverymanId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'Deliverers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      paymentMethod: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};