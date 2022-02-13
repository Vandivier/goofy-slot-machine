const rewardMap = {
  c: 5,
  l: 10,
  o: 20,
  w: 40,
};

const possibleSlotValues = Object.keys(rewardMap);
const countPossibleSlotValues = possibleSlotValues.length;
const slotValueStep = 1 / countPossibleSlotValues;

const getCheatRoll = (cheatChance) => {
  let currSlotValues = getSlotValues();
  let isWin = getIsWin(currSlotValues);

  while (isWin) {
    const shouldReroll = Math.random() < cheatChance;

    if (shouldReroll) {
      currSlotValues = getSlotValues();
      isWin = getIsWin(currSlotValues);
    } else {
      break;
    }
  }

  return currSlotValues;
};

const getIsWin = (slotValues) => {
  if (slotValues[0] === slotValues[1] && slotValues[0] === slotValues[2]) {
    return true;
  }

  return false;
};

const getRewardAmount = (slotValues) => {
  const firstSymbol = (slotValues[0] || "").toLowerCase();
  const isWin = getIsWin(slotValues);
  return isWin ? rewardMap[firstSymbol] : 0;
};

const getSingleSlotResult = () => {
  const randomFloat = Math.random();
  const stepCount = Math.floor(randomFloat / slotValueStep);
  return possibleSlotValues[stepCount];
};

const getSlotValues = () => [
  getSingleSlotResult(),
  getSingleSlotResult(),
  getSingleSlotResult(),
];

const service = {
  createRoll: (playerCount, cheatChance) => {
    const slotValues = getCheatRoll(cheatChance);
    const reward = getRewardAmount(slotValues);

    return {
      playerCount: playerCount + reward - 1,
      slotValues,
    };
  },
};

export default service;
