'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('relationships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'pending',
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'users', // Name of the target table
        //   key: 'id', // Key in the target table
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE', // Adjust based on your needs
      },
      friendId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'users', // Name of the target table
        //   key: 'id', // Key in the target table
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE', // Adjust based on your needs
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('relationships');
  }
};
