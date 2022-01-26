const EligibleStudent = require("../models/EligibleStudent");
const ExamQr = require("../models/ExamQr");
const crypto = require("crypto-js");
const Examination = require("../models/Examination");
const erroRes = require("../middleware/error");
const Student = require("../models/Student");
const Course = require("../models/Course");
const School = require("../models/School");
const CurrentExam = require("../models/CurrentExam");
const EligibleStudentId = require("../models/EligibleStudentId");
require("dotenv").config({ path: "config/config.env" });

// Table relationships
EligibleStudentId.belongsTo(Student);
EligibleStudent.belongsTo(EligibleStudentId);
// EligibleStudent.belongsTo(Examination);
Student.belongsTo(Course);
Course.belongsTo(School);

/**
 * Get QR details
 *
 */

exports.getQrDetails = async (req, res, next) => {
  try {
    const { qrcode } = req.body;
    console.log(qrcode);
    let bytes = crypto.AES.decrypt(qrcode, process.env.QR_SECRET).toString(
      crypto.enc.Utf8
    );

    if (!bytes) {
      return res
        .status(404)
        .json({ message: "Illegal exam card, not in the system" });
    }

    if (bytes) {
      const { studentReg, examId } = JSON.parse(bytes); // {"studentReg": "xxx","examId": "xx"}
      const exam = await CurrentExam.findOne(),
        currentExamID = exam.examinationExaminationId;

      if (examId != currentExamID)
        return res.status(403).json({
          message:
            "Illegal exam card, Student not authorized to sit for this exam", //"exam card had expired",
        });

      /**
       * Check if student is eligible
       */
      const check = await EligibleStudent.findOne({
        where: [
          { eligibleStudentIdStudentStudentRegNumber: studentReg },
          { examinationExaminationId: examId },
        ],
        include: [
          {
            model: EligibleStudentId,
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: {
              model: Student,
              attributes: ["firstName", "middleName", "lastName"],
              include: [
                {
                  model: Course,
                  attributes: ["courseName"],
                  include: [{ model: School, attributes: ["schoolName"] }],
                },
              ],
            },
          },
          {
            model: Examination,
            attributes: ["academicYear", "startDate", "endDate"],
          },
        ],
      });

      if (!check) {
        return res.status(403).json({
          message: "Illegal exam card, Student not authorized for this exam",
        });
      }

      if (check) {
        res.status(200).json(check);
      }
    }
  } catch (error) {
    console.log(error);
    if (error.message) {
      return res.status(400).json({ message: "Illegal exam card" });
    }
  }
};
