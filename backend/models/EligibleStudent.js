const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Student = require("./Student");
const Examination = require("./Examination");

const EligibleStudent = sequelize.define("eligible_student", {
  studentStudentRegNumber: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Student,
      key: "studentRegNumber",
    },
  },
  yearOfStudy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1, max: 5 },
  },
  semesterOfStudy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1, max: 3 },
  },
  units: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    allowNull: false,
  },
  examinationExaminationId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Examination,
      key: "examinationId",
    },
  },
});

module.exports = EligibleStudent;
