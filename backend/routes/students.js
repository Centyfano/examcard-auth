const express = require("express");
const router = express.Router();
const {
  getStudent,
  getStudents,
  createStudents,
} = require("../controllers/students");

router.route("/").get(getStudents);
router.route("/:id").get(getStudent);
router.route("/").post(createStudents);

module.exports = router;
