// models/Sermon.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import the sequelize instance

const Sermon = sequelize.define("sermon", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preacher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  media_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Sermon;
