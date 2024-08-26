'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fileUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      reactNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      groupId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // references: {
        //   model: 'groups', // Name of the target table
        //   key: 'id', // Key in the target table
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL', // Adjust based on your needs
      },
      userId: { // This is the foreign key to User
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'users', // Name of the target table
        //   key: 'id', // Key in the target table
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL', // Adjust based on your needs
        allowNull: false,
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
    await queryInterface.dropTable('posts');
  }
};