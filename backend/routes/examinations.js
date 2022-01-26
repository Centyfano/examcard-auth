const express = require("express");
const router = express.Router();
const {
  createExams,
  getExams,
  createExam,
} = require("../controllers/examinations");

router.route("/").get(getExams);
router.route("/").post(createExam);
router.route("/all").post(createExams);
// router.route("/:id").get(getStudent);

module.exports = router;
