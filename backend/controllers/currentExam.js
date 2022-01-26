const CurrentExam = require("../models/CurrentExam");
const Examination = require("../models/Examination");

CurrentExam.belongsTo(Examination);

exports.getCurrentExam = async (req, res, next) => {
  try {
    const exam = await CurrentExam.findOne({
      include: {
        model: Examination,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
      attributes: { exclude: ["updatedAt"] },
    });
    if (!exam) {
      return res.status(404).json({ success: false, error: "No exams found" });
    }
    res.status(200).json(exam);
  } catch (err) {
    console.log(err);
  }
};

exports.setCurrentExam = async (req, res, next) => {
  try {
    const { examinationExaminationId } = req.body;
    // req.body.examinationExaminationId = currentExamId;
    // req.body.currentExamId = undefined;
    console.log(req.body);

    if (!examinationExaminationId)
      return res.status(400).json({
        msg: "Please select current exam (examinationExaminationId)",
      });

    await CurrentExam.sync({ force: true });
    const exam = await CurrentExam.create(req.body);
    res.status(200).json(exam);
  } catch (err) {
    console.log(res.json(err));
  }
};
