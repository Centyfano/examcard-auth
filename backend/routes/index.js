const students = require("./students");
const eligible = require("./eligible_students");
const exams = require("./examinations");
const qrdetails = require("./exam_qr");

module.exports = (app) => {
  app.use("/students", students);
  app.use("/eligible", eligible);
  app.use("/exams", exams);
  app.use("/qr", qrdetails);
};
