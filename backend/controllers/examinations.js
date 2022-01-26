const Examination = require("../models/Examination");
const fs = require("fs");
const path = require("path");
const { customAlphabet } = require("nanoid");

/**
 * @description Get all examinations
 * @method GET
 * @access private
 * @param {*} req request
 * @param {*} res response
 * @param {*} next error callback
 */
exports.getExams = async (req, res, next) => {
  try {
    const exams = await Examination.findAll();
    res.status(200).json(exams);
    if (!exams) {
      return res.status(404).json({ success: false, error: "No exams found" });
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 * @description Create exams into databse
 * @method POST
 * @access private
 * @param {*} req request
 * @param {*} res response
 * @param {*} next error callback
 */
exports.createExams = async (req, res, next) => {
  try {
    const pathto = path.join(__dirname, "../models/schema/_data");
    console.log(pathto);
    //   let users;

    // Fetch students from API
    const exams = JSON.parse(fs.readFileSync(`${pathto}/exams.json`, "utf-8"));

    //   Sync
    await Examination.sync();

    exams.forEach(async (exam) => {
      await Examination.upsert(exam);
      res.status(201).json({
        success: true,
        message: `Exams imported successfuly`,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

exports.createExam = async (req, res, next) => {
  try {
    req.body.examinationId = customAlphabet("1234567890", 4);
    console.log(req.body);
    await Examination.sync();
    const exam = await Examination.create(req.body);

    res.status(201).json({
      success: true,
      message: `Exam created`,
      exam,
    });
    // });
  } catch (error) {
    console.error(error);
    res.json(error.message);
  }
};
