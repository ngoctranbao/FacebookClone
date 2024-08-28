'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ownerId: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
      },
      parentId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // references: {
        //   model: 'comments',
        //   key: 'id',
        // },
        // onDelete: 'CASCADE',
        // onUpdate: 'CASCADE',
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // references: {
        //   model: 'posts',
        //   key: 'id',
        // },
        // onDelete: 'CASCADE',
        // onUpdate: 'CASCADE',
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('comments');
  }
};
