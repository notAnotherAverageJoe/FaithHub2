const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AdminUser = sequelize.define("AdminUser", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = AdminUser;
