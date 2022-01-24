const express = require("express");
const router = express.Router();
const {
  createEligibleStudents,
  getEligibleStudents,
  getStudent,
  createEligibleStudent,
} = require("../controllers/eligible_students");

router.route("/").get(getEligibleStudents);
router.route("/:id").get(getStudent);
router.route("/").post(createEligibleStudents);
router.route("/student").post(createEligibleStudent);
// router.route("/:id").get(getStudent);

module.exports = router;
