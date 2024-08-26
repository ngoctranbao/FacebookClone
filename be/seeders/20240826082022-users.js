"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        userName: "user1",
        email: "user1@gmail.com",
        isActive: true,
        password: "password",
        avatar: ""
      },
      {
        userName: "user2",
        email: "user2@gmail.com",
        isActive: true,
        password: "password",
        avatar: ""
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};