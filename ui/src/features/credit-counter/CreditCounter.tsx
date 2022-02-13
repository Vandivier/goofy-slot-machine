import { Button } from "@mui/material";
import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getNewSession,
  patchRollRequest,
  putBankBalance,
  selectBankCount,
  selectPlayerCount,
  selectPlayerCountErrorMessage,
  selectSessionId,
} from "./creditCounterSlice";
import styles from "./CreditCounter.module.css";

export const CreditCounter = () => {
  const bankCount = useAppSelector(selectBankCount);
  const playerCount = useAppSelector(selectPlayerCount);
  const playerCountErrorMessage = useAppSelector(selectPlayerCountErrorMessage);
  const sessionId = useAppSelector(selectSessionId);
  const dispatch = useAppDispatch();

  const handleClickCashOut = () => {
    dispatch(putBankBalance({ playerCount }));
  };

  const handleClickSlotMachineLever = () => {
    new Audio(
      "https://github.com/Vandivier/goofy-slot-machine/raw/main/ui/public/slot-machine-crank.mp3"
    ).play();
    dispatch(patchRollRequest({ playerCount }));
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getNewSession());
    };

    if (!sessionId) {
      fetchData();
    }
  });

  return (
    <section>
      <Button
        disabled={!!playerCountErrorMessage || playerCount === 0}
        onClick={handleClickSlotMachineLever}
        size="large"
        variant="contained"
      >
        Pull the Lever! (Start Game)
      </Button>
      <Button
        onClick={handleClickCashOut}
        size="large"
        style={{
          marginLeft: "2rem",
        }}
        variant="contained"
      >
        Cash out!
      </Button>

      {playerCountErrorMessage ? (
        <div
          className={styles.row}
          style={{ margin: "2rem auto 0", maxWidth: "60%" }}
        >
          <p
            className={styles.value}
            style={{ color: "red", fontSize: "1.5rem" }}
          >
            Error Message: {playerCountErrorMessage}
          </p>
        </div>
      ) : null}
      <div className={styles.row}>
        <span className={styles.value}>Session Total: {playerCount}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.value}>Bank Total: {bankCount}</span>
      </div>
    </section>
  );
};
