import React from "react";
import { slotImageMap } from "./SlotMachine";

// randomly cycle thru other icons every 200 ms as an animation
export const PendingSlotIcon = () => {
  const slotIconsExceptPending = Object.entries(slotImageMap).filter(
    ([key]) => key !== "?"
  );

  const [currIcon, setCurrIcon] = React.useState(slotIconsExceptPending[0]);

  React.useEffect(() => {
    const getRandomSlotImage = () => {
      const iconCount = slotIconsExceptPending.length;
      const stepThreshold = 1 / iconCount;
      const randomResult = Math.random();
      const randomIcon = Math.floor(randomResult / stepThreshold);
      return slotIconsExceptPending[randomIcon];
    };

    const timer = setTimeout(() => {
      let nextIcon = getRandomSlotImage();

      while (currIcon[0] === nextIcon[0]) {
        nextIcon = getRandomSlotImage();
      }

      setCurrIcon(nextIcon);
    }, 200);
    return () => clearTimeout(timer);
  }, [currIcon, slotIconsExceptPending]);

  return <>{currIcon[1]}</>;
};
