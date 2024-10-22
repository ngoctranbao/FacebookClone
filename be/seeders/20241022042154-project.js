'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Posts", [
      {
        content: "nothing much",
        fileUrl: "https://storage.googleapis.com/facebook-c6f5f.appspot.com/Screenshot 2024-08-02 091329.png",
        userId: 3,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
