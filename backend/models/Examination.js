const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Examination = sequelize.define("examination", {
  examinationId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  academicYear: { type: DataTypes.STRING, allowNull: false },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true,
      // isBefore: this.endDate,
    },
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true,
      // isAfter: this.startDate,
    },
  },
});

module.exports = Examination;
