const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const EligibleStudent = require("./EligibleStudent");

const ExamQr = sequelize.define("exam_qr", {
  examinationCardId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  eligibleStudentStudentStudentRegNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: EligibleStudent,
      key: "studentStudentRegNumber",
    },
  },
  qrcode: { type: DataTypes.STRING, allowNull: false },
});

module.exports = ExamQr;
