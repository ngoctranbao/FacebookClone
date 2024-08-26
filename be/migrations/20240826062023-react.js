'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ownerId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      typeOf: {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // references: {
        //   model: 'posts', // Name of the target table
        //   key: 'id', // Key in the target table
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL', // Adjust based on your needs
      },
      commentId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // references: {
        //   model: 'comments', // Name of the target table
        //   key: 'id', // Key in the target table
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL', // Adjust based on your needs
      },
    });

    // Optionally, you can create indexes here if you expect frequent queries on specific fields
    await queryInterface.addIndex('reacts', ['postId']);
    await queryInterface.addIndex('reacts', ['commentId']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reacts');
  }
};
