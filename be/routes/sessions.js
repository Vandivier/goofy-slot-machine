const bankService = require("../services/bank");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

router.get("/", function (req, res) {
  const sessionId = uuidv4();
  res.send({
    sessionId,
    playerCount: 5,
    bankCount: bankService.getBankBalance(),
  });
});

module.exports = router;
