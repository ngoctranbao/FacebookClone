"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        userName: "user1",
        email: "user1@gmail.com",
        isActive: true,
        password: "$10$YF7gRTCS0WxZCZv8VUt2Fu1TVPltQ3ReYM3MQwXoY8IdNV.sUGQ3y",
        avatar: ""
      },
      {
        userName: "user2",
        email: "user2@gmail.com",
        isActive: true,
        password: "$10$YF7gRTCS0WxZCZv8VUt2Fu1TVPltQ3ReYM3MQwXoY8IdNV.sUGQ3y",
        avatar: ""
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};