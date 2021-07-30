const express = require("express");
const router = express.Router();
const { getStudent, getStudents, createStudents } = require("../controllers/students");

router.route("/").get(getStudents);
router.route("/").post(createStudents);
router.route("/:id").get(getStudent);

module.exports = router;
