import { Grid } from "@mui/material";

import { useAppSelector } from "../../app/hooks";
import { selectRolls } from "../../features/credit-counter/creditCounterSlice";
import { SlotValue } from "../credit-counter/creditCounterSlice";
import { Cherry } from "./Cherry";
import { Lemon } from "./Lemon";
import { Orange } from "./Orange";
import { PendingSlotIcon } from "./PendingSlotIcon";
import { Watermelon } from "./Watermelon";

type SlotImageMapType = {
  [key: string]: string | JSX.Element;
};

export const slotImageMap: SlotImageMapType = {
  "?": <PendingSlotIcon />,
  c: <Cherry />,
  l: <Lemon />,
  o: <Orange />,
  w: <Watermelon />,
};

export const SlotMachine = () => {
  const slotValues: SlotValue[] = useAppSelector(selectRolls);

  return Array.isArray(slotValues) ? (
    <section style={{ marginBottom: "2rem" }}>
      <Grid container style={{ margin: "auto", maxWidth: "400px" }}>
        {slotValues.map((char: SlotValue, i) => (
          <Grid item key={char + i.toString()} xs={4}>
            {slotImageMap[char]}
          </Grid>
        ))}
      </Grid>
    </section>
  ) : null;
};
