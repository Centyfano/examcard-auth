const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Examination = require("./Examination");
const EligibleStudentId = require("./EligibleStudentId");

const EligibleStudent = sequelize.define("eligible_student", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  eligibleStudentIdStudentStudentRegNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: EligibleStudentId,
      key: "studentStudentRegNumber",
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
  examinationCardId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  qrcode: { type: DataTypes.STRING, allowNull: false },
});

module.exports = EligibleStudent;
