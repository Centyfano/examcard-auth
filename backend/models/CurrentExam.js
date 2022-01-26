const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Examination = require("./Examination");

const CurrentExam = sequelize.define("currentExam", {
  examinationExaminationId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
    references: {
      model: Examination,
      key: "examinationId",
    },
  },
});

module.exports = CurrentExam;
