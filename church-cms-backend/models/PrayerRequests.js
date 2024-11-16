const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PrayerRequest = sequelize.define(
  "prayerrequests",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    is_approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    submitted_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false, // Disable createdAt and updatedAt
  }
);

module.exports = PrayerRequest;
