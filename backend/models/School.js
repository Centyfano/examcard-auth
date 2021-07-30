const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const School = sequelize.define("school", {
  schoolId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  schoolName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = School;
