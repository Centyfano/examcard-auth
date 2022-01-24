const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const EligibleStudentId = require("./EligibleStudentId");

const ExamQr = sequelize.define("exam_qr", {
  examinationCardId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  eligibleStudentIdStudentStudentRegNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: EligibleStudentId,
      key: "studentStudentRegNumber",
    },
  },
  qrcode: { type: DataTypes.STRING, allowNull: false },
});

module.exports = ExamQr;
