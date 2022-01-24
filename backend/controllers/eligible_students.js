const EligibleStudent = require("../models/EligibleStudent");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890", 4);
const crypto = require("crypto-js");
require("dotenv").config({ path: "config/config.env" });
const fs = require("fs");
const path = require("path");

const Student = require("../models/Student");
const Examination = require("../models/Examination");
const ExamQr = require("../models/ExamQr");
const Course = require("../models/Course");
const School = require("../models/School");
const EligibleStudentId = require("../models/EligibleStudentId");

const { currentExamID } = require("./currentExam");

// Inner joins
EligibleStudentId.belongsTo(Student);
EligibleStudent.belongsTo(EligibleStudentId);
// EligibleStudentId.hasMany(EligibleStudent);
// EligibleStudent.hasMany(ExamQr);
// EligibleStudentId.hasMany(ExamQr);
// ExamQr.belongsTo(EligibleStudentId);

Student.belongsTo(Course);
Course.belongsTo(School);

// GET eligible students
exports.getEligibleStudents = async (req, res, next) => {
  try {
    const students = await EligibleStudent.findAll();

    if (!students) {
      return res.status(404).json({ msg: "No student found" });
    }

    res.status(200).json({ students });
  } catch (error) {
    console.error(error.message);
  }
};

// GET one eligible student
exports.getStudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const student = await EligibleStudent.findOne({
      where: [
        { studentStudentRegNumber: id },
        { examinationExaminationId: currentExamID },
      ],

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
      return res.status(404).json({ msg: `Student ${id} not found` });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error(error.message);
  }
};

// CREATE ELIGIBLE STUDENTS
exports.createEligibleStudents = async (req, res, next) => {
  try {
    // const tran = await sequelize.transaction(async (t) => {
    const pathto = path.join(__dirname, "../models/schema/_data");
    const qrdetails = {
      studentReg: "",
      examId: "",
    };
    // Fetch students from API
    const students = JSON.parse(
      fs.readFileSync(`${pathto}/eligibles.json`, "utf-8")
    );

    // // Sync students table
    await EligibleStudentId.sync();
    await EligibleStudent.sync();
    // await ExamQr.sync();

    //   Iterate through each student
    students.forEach(async (student) => {
      // console.log(student);
      // await EligibleStudentId.upsert(student.studentStudentRegNumber);
      await EligibleStudentId.findOrCreate({
        where: { studentStudentRegNumber: student.studentStudentRegNumber },
        defaults: { studentStudentRegNumber: student.studentStudentRegNumber },
      });

      student.id = nanoid();
      student.eligibleStudentIdStudentStudentRegNumber =
        student.studentStudentRegNumber;

      qrdetails.studentReg = student.studentStudentRegNumber;
      qrdetails.examId = student.examinationExaminationId;

      // Encrypt into QR code
      const cipher = crypto.AES.encrypt(
        JSON.stringify(qrdetails),
        process.env.QR_SECRET
      ).toString();

      // Insert encrypted qr details into database
      // const examqr = {
      (student.examinationCardId = nanoid()),
        (student.qrcode = cipher),
        // };
        // console.log(examqr);

        // console.log(examqr);

        await EligibleStudent.create(student /*, { transaction: t } */);
      // await ExamQr.create(examqr /*, { transaction: t } */);
    });

    res.status(201).json({
      success: true,
      message: `Students imported successfuly, QR created`,
    });
    // });
  } catch (error) {
    console.error(error);
    res.json(error.message);
  }
};

exports.createEligibleStudent = async (req, res, next) => {
  try {
    // const tran = await sequelize.transaction(async (t) => {
    const pathto = path.join(__dirname, "../models/schema/_data");
    const qrdetails = {
      studentReg: "",
      examId: "",
    };
    // Fetch students from API
    const students = JSON.parse(
      fs.readFileSync(`${pathto}/eligible.json`, "utf-8")
    );

    // // Sync students table
    await EligibleStudentId.sync();
    await EligibleStudent.sync();
    // await ExamQr.sync();

    //   Iterate through each student
    students.forEach(async (student) => {
      // console.log(student);
      // await EligibleStudentId.upsert(student.studentStudentRegNumber);
      await EligibleStudentId.findOrCreate({
        where: { studentStudentRegNumber: student.studentStudentRegNumber },
        defaults: { studentStudentRegNumber: student.studentStudentRegNumber },
      });

      student.id = nanoid();
      student.eligibleStudentIdStudentStudentRegNumber =
        student.studentStudentRegNumber;

      qrdetails.studentReg = student.studentStudentRegNumber;
      qrdetails.examId = student.examinationExaminationId;

      // Encrypt into QR code
      const cipher = crypto.AES.encrypt(
        JSON.stringify(qrdetails),
        process.env.QR_SECRET
      ).toString();

      // Insert encrypted qr details into database
      // const examqr = {
      (student.examinationCardId = nanoid()),
        (student.qrcode = cipher),
        // };
        // console.log(examqr);

        // console.log(examqr);

        await EligibleStudent.create(student /*, { transaction: t } */);
      // await ExamQr.create(examqr /*, { transaction: t } */);
    });

    res.status(201).json({
      success: true,
      message: `Student imported successfuly, QR created`,
    });
    // });
  } catch (error) {
    console.error(error);
    res.json(error.message);
  }
};
exports.createEligibleStudentss = async (req, res, next) => {
  try {
    // const tran = await sequelize.transaction(async (t) => {
    const pathto = path.join(__dirname, "../models/schema/_data");
    const qrdetails = {
      studentReg: "",
      examId: "",
    };
    // Fetch students from API
    const students = JSON.parse(
      fs.readFileSync(`${pathto}/eligible.json`, "utf-8")
    );

    // // Sync students table
    await EligibleStudent.sync();
    await ExamQr.sync();

    //   Iterate through each student
    students.forEach(async (student) => {
      student.id = nanoid();
      await EligibleStudent.create(student /*, { transaction: t } */);

      qrdetails.studentReg = student.studentStudentRegNumber;
      qrdetails.examId = student.examinationExaminationId;

      // Encrypt into QR code
      const cipher = crypto.AES.encrypt(
        JSON.stringify(qrdetails),
        process.env.QR_SECRET
      ).toString();

      // Insert encrypted qr details into database
      const examqr = {
        examinationCardId: nanoid(),
        qrcode: cipher,
        eligibleStudentStudentStudentRegNumber: student.studentStudentRegNumber,
      };

      // console.log(examqr);

      await ExamQr.create(examqr /*, { transaction: t } */);
    });

    res.status(201).json({
      success: true,
      message: `Student imported successfuly, QR created`,
    });
    // });
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};
