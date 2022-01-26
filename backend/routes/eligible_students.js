const express = require("express");
const router = express.Router();
const {
  getEligibleStudents,
  getStudent,
  createEligibleStudent,
} = require("../controllers/eligible_students");

router.route("/").get(getEligibleStudents);
router.route("/:id").get(getStudent);
router.route("/").post(createEligibleStudent);

module.exports = router;
