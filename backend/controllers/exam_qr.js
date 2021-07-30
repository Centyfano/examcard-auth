const EligibleStudent = require("../models/EligibleStudent");
const ExamQr = require("../models/ExamQr");
const crypto = require("crypto-js");
const Examination = require("../models/Examination");
const erroRes = require("../middleware/error");
const Student = require("../models/Student");
const Course = require("../models/Course");
const School = require("../models/School");
require("dotenv").config({ path: "config/config.env" });

// Table relationships
EligibleStudent.belongsTo(Student);
EligibleStudent.belongsTo(Examination);
Student.belongsTo(Course);
Course.belongsTo(School);

/**
 * Get QR details
 *
 */

exports.getQrDetails = async (req, res, next) => {
  try {
    const { qrcode } = req.body;
    let bytes = crypto.AES.decrypt(qrcode, process.env.QR_SECRET).toString(
      crypto.enc.Utf8
    );

    if (!bytes) {
      return res.status(404).json({ message: "QR code not found" });
    }

    if (bytes) {
      const { studentReg, examId } = JSON.parse(bytes); // {"studentReg": "xxx","examId": "xx"}

      /**
       * Check if student is eligible
       */
      const check = await EligibleStudent.findOne({
        where: [
          { studentStudentRegNumber: studentReg },
          { examinationExaminationId: examId },
        ],
        include: [
          {
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
          {
            model: Examination,
            attributes: ["academicYear", "startDate", "endDate"],
          },
        ],
      });

      if (!check) {
        return res.status(403).json({ message: "Student not authorized" });
      }

      if (check) {
        res.status(200).json(check);
      }
    }
  } catch (error) {
    if (error.message) {
      return res.status(400).json({ message: "Illegal exam card" });
    }
  }
};
