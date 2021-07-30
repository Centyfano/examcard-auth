const express = require("express");
const router = express.Router();
const {
  createEligibleStudents,
  getEligibleStudents,
  getStudent,
} = require("../controllers/eligible_students");

router.route("/").get(getEligibleStudents);
router.route("/:id").get(getStudent);
router.route("/").post(createEligibleStudents);
// router.route("/:id").get(getStudent);

module.exports = router;
