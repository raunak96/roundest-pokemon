import arrayShuffle from "array-shuffle";

const MAX_DEX_ID = 493;
const ids = [...Array(MAX_DEX_ID).keys()].map((i) => i + 1);

export const getOptionsForVote = () => {
  return arrayShuffle(ids).slice(0, 2);
};
