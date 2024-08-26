'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      groupName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      private: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
      },
      ownerId: {
          type: Sequelize.INTEGER,
          allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('groups');
  }
};
