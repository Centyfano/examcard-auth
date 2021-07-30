const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Course = require("./Course");

const Student = sequelize.define("student", {
  studentRegNumber: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middleName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // school: { type: DataTypes.STRING, allowNull: false },
  courseCourseId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Course,
      key: "courseId",
    },
  },
});

module.exports = Student;
