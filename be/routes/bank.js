const express = require("express");
const router = express.Router();
const bankService = require("../services/bank");

router.put("/", function (req, res) {
  const { playerCount } = req.body;
  const asNumber = parseInt(playerCount, 10);

  if (!isNaN(asNumber)) {
    bankService.updateBankBalance(asNumber);
  } else {
    throw new Error("Tried to updateBankBalance with invalid number");
  }

  res.send({
    playerCount: 0,
    bankCount: bankService.getBankBalance(),
  });
});

module.exports = router;
