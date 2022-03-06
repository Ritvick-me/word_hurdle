const ROW_ONE = [
  {
    key: "Q",
    type: "default",
  },
  {
    key: "W",
    type: "default",
  },
  {
    key: "E",
    type: "default",
  },
  {
    key: "R",
    type: "default",
  },
  {
    key: "T",
    type: "default",
  },
  {
    key: "Y",
    type: "default",
  },
  {
    key: "U",
    type: "default",
  },
  {
    key: "I",
    type: "default",
  },
  {
    key: "O",
    type: "default",
  },
  {
    key: "P",
    type: "default",
  },
];

const ROW_TWO = [
  {
    key: "A",
    type: "default",
  },
  {
    key: "S",
    type: "default",
  },
  {
    key: "D",
    type: "default",
  },
  {
    key: "F",
    type: "default",
  },
  {
    key: "G",
    type: "default",
  },
  {
    key: "H",
    type: "default",
  },
  {
    key: "J",
    type: "default",
  },
  {
    key: "K",
    type: "default",
  },
  {
    key: "L",
    type: "default",
  },
];

const ROW_THREE = [
  {
    key: "Backspace",
    type: "default",
  },
  {
    key: "Z",
    type: "default",
  },
  {
    key: "X",
    type: "default",
  },
  {
    key: "C",
    type: "default",
  },
  {
    key: "V",
    type: "default",
  },
  {
    key: "B",
    type: "default",
  },
  {
    key: "N",
    type: "default",
  },
  {
    key: "M",
    type: "default",
  },
  {
    key: "Enter",
    type: "default",
  },
];

export const keyboardRows = (rowValue) => {
  switch (rowValue) {
    case 1:
      return ROW_ONE;
    case 2:
      return ROW_TWO;
    default:
      return ROW_THREE;
  }
};
