// config/db.js
require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  {
    dialect: process.env.DB_DIALECT,
  }
);
sequelize.sync();

module.exports = sequelize;
