export const fetchScore = (difficulty, tries) => {
  switch (difficulty) {
    case 5:
      return 90 / tries;
    case 6:
      return 168 / tries;
    case 7:
      return 280 / tries;
    default:
      return 0;
  }
};
