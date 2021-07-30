const express = require("express"),
  router = express.Router(),
  { getQrDetails } = require("../controllers/exam_qr");

router.route("/").post(getQrDetails);

module.exports = router;
