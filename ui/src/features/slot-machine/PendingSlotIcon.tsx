import React from "react";
import { slotImageMap } from "./SlotMachine";

// randomly cycle thru other icons every 200 ms as an animation
export const PendingSlotIcon = () => {
  const slotIconsExceptPending = Object.entries(slotImageMap).filter(
    ([key]) => key !== "?"
  );

  const [currIcon, setCurrIcon] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currIcon + 1) % slotIconsExceptPending.length;
      setCurrIcon(nextIndex);
    }, 100);
    return () => clearTimeout(timer);
  }, [currIcon, slotIconsExceptPending]);

  return <>{slotIconsExceptPending[currIcon][1]}</>;
};
