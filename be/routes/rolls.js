const express = require("express");
const router = express.Router();
const rollService = require("../services/rolls");

// tokens are kind of like a financial information,
//   so post over get for secure obfuscation
router.patch("/", function (req, res) {
  const { playerCount } = req.body;

  if (playerCount < 1) {
    res.send({
      error: {
        description: "Failed to roll because player has no remaining credits.",
      },
    });
  } else {
    const roll = rollService.createRoll(playerCount, 0.1);
    res.send(roll);
  }
});

module.exports = router;
