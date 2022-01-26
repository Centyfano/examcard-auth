const express = require("express");
const router = express.Router();
const {
  getCurrentExam,
  setCurrentExam,
} = require("../controllers/currentExam");

router.route("/").get(getCurrentExam);
router.route("/").post(setCurrentExam);

module.exports = router;
