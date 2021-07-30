const express = require("express");
const router = express.Router();
const { createExams, getExams } = require("../controllers/examinations");

router.route("/").get(getExams);
router.route("/").post(createExams);
// router.route("/:id").get(getStudent);

module.exports = router;
