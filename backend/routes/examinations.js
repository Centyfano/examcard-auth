const express = require("express");
const router = express.Router();
const {
  createExams,
  getExams,
  createExam,
} = require("../controllers/examinations");

router.route("/").get(getExams);
router.route("/").post(createExams);
router.route("/exam").post(createExam);
// router.route("/:id").get(getStudent);

module.exports = router;
