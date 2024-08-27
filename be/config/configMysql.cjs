
const { Sequelize } = require('sequelize');
require("dotenv").config()

const DB_PASSWORD = process.env.MYSQL_DATABASE_PASSWORD

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('facebook', 'root', DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: true
});

let connectMysql = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connect MYSQL has been successful");
    } catch (err) {
      console.error("Error connecting: " + err);
    }
  };

module.exports = { connectMysql }