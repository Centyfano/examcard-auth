const Examination = require("../models/Examination");
const fs = require("fs");
const path = require("path");

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
    const exam = await Examination.findAll();
    res.status(200).json({
      exam,
    });
    if (!exam) {
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
    const exam = {
      examinationId: "2213",
      academicYear: "2019/2020",
      startDate: "02/10/2019",
      endDate: "02/12/2020",
    };
    await Examination.sync();
    await Examination.upsert(exam /*, { transaction: t } */);

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
