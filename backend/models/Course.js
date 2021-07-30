const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const School = require("./School");

const Course = sequelize.define("course", {
  courseId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  courseName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  schoolSchoolId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: School,
      key: "schoolId",
    },
  },
});

module.exports = Course;
