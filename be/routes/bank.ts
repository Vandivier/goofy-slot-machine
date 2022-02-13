import express from "express";

import bankService from "../services/bank";

const router = express.Router();

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

export default router;
