const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Student = require("./Student");

const EligibleStudentId = sequelize.define("eligible_student_id", {
  studentStudentRegNumber: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Student,
      key: "studentRegNumber",
    },
  },
});

module.exports = EligibleStudentId;
