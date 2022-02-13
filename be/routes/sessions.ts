import express from "express";
import { v4 as uuidv4 } from "uuid";

import bankService from "../services/bank";

const router = express.Router();

router.get("/", function (req, res) {
  const sessionId = uuidv4();
  res.send({
    sessionId,
    playerCount: 5,
    bankCount: bankService.getBankBalance(),
  });
});

export default router;
