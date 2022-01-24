const students = require("./students");
const eligible = require("./eligible_students");
const exams = require("./examinations");
const qrdetails = require("./exam_qr");

module.exports = (app) => {
  app.use("/api/students", students);
  app.use("/api/eligible", eligible);
  app.use("/api/exams", exams);
  app.use("/api/qr", qrdetails);
};
