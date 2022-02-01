const EligibleStudent = require("../models/EligibleStudent");
const path = require("path");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890", 4);
const crypto = require("crypto-js");
require("dotenv").config({
  path: path.join(__dirname, "..", "config", "config.env"),
});
const fs = require("fs");

const Student = require("../models/Student"),
  Examination = require("../models/Examination"),
  ExamQr = require("../models/ExamQr"),
  Course = require("../models/Course"),
  School = require("../models/School"),
  EligibleStudentId = require("../models/EligibleStudentId"),
  CurrentExam = require("../models/CurrentExam");

// Inner joins
Course.belongsTo(School);
Student.belongsTo(Course);
EligibleStudentId.belongsTo(Student);
EligibleStudent.belongsTo(EligibleStudentId);
EligibleStudent.belongsTo(Examination);

// GET eligible students
exports.getEligibleStudents = async (req, res, next) => {
  try {
    const examId = req.query.examId;
    console.log(examId);
    if (examId) {
      const query = await EligibleStudent.findAll({
        where: { examinationExaminationId: examId },
        include: [
          {
            model: EligibleStudentId,
            include: [
              {
                model: Student,
                attributes: ["firstName", "middleName", "lastName"],
              },
            ],
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["units", "createdAt", "updatedAt"],
        },
      });

      if (query.length < 1) {
        return res
          .status(404)
          .json({ msg: `No student found under exam ${examId}` });
      }

      return res.status(200).json({ len: query.length, students: query });
    }
    const students = await EligibleStudent.findAll({
      include: [
        {
          model: EligibleStudentId,
          include: [
            {
              model: Student,
              attributes: ["firstName", "middleName", "lastName"],
            },
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["units", "createdAt", "updatedAt"],
      },
    });

    if (!students) {
      return res.status(404).json({ msg: "No student found" });
    }

    res.status(200).json({ len: students.length, students });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: error.message });
  }
};

// GET one eligible student
exports.getStudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const exam = await CurrentExam.findOne(),
      currentExamId = exam.examinationExaminationId;

    const student = await EligibleStudent.findOne({
      where: [
        { eligibleStudentIdStudentStudentRegNumber: id },
        { examinationExaminationId: currentExamId },
      ],

      include: [
        {
          model: EligibleStudentId,
          include: [
            {
              model: Student,
              attributes: ["firstName", "middleName", "lastName"],
              include: [
                {
                  model: Course,
                  attributes: ["courseName"],
                  include: [
                    {
                      model: School,
                      attributes: ["schoolName"],
                    },
                  ],
                },
              ],
            },
          ],
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: Examination,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt",
          "eligibleStudentIdStudentStudentRegNumber",
          "id",
        ],
      },
    });

    if (!student) {
      return res
        .status(404)
        .json({ msg: `Student ${id} not found for exam ID ${currentExamId}` });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error(error.message);
  }
};

/**
 * Create one eligible student
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.createEligibleStudent = async (req, res, next) => {
  try {
    const qrdetails = {
      studentReg: "",
      examId: "",
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const student = { ...req.body };

    await EligibleStudentId.sync();
    // await EligibleStudent.sync();

    const query = await EligibleStudentId.findOrCreate({
      where: { studentStudentRegNumber: student.studentRegNumber },
      defaults: { studentStudentRegNumber: student.studentRegNumber },
    });

    // student.id = nanoid();
    student.eligibleStudentIdStudentStudentRegNumber = student.studentRegNumber;
    student.id = nanoid();

    qrdetails.studentReg = student.studentRegNumber;
    qrdetails.examId = student.examinationExaminationId;

    // Encrypt into QR code
    const cipher = crypto.AES.encrypt(
      JSON.stringify(qrdetails),
      process.env.QR_SECRET
    ).toString();

    // Insert encrypted qr details into database
    student.examinationCardId = nanoid();
    student.qrcode = cipher;

    console.log(student);
    await EligibleStudent.create(student);

    res.status(201).json({
      success: true,
      message: `Student created successfuly, QR created`,
    });
    // });
  } catch (error) {
    console.error(error);
    res.json(error.message);
  }
};
