"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        userName: "user1",
        email: "user1@gmail.com",
        isActive: true,
        password: "$2b$10$6iWVKByokPgfOVuU6SH6yO/JG64Gxb8/.kmM4Xl0wgm.NLv3AaUa",
        avatar: ""
      },
      {
        userName: "user2",
        email: "user2@gmail.com",
        isActive: true,
        password: "$2b$10$6iWVKByokPgfOVuU6SH6yO/JG64Gxb8/.kmM4Xl0wgm.NLv3AaUa",
        avatar: ""
      },
      {
        userName: "user3",
        email: "user3@gmail.com",
        isActive: true,
        password: "$2b$10$6iWVKByokPgfOVuU6SH6yO/JG64Gxb8/.kmM4Xl0wgm.NLv3AaUa",
        avatar: ""
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};