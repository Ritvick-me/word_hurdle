const ROW_ONE = [
  {
    key: "Q",
    type: "default",
    status: 0,
  },
  {
    key: "W",
    type: "default",
    status: 0,
  },
  {
    key: "E",
    type: "default",
    status: 0,
  },
  {
    key: "R",
    type: "default",
    status: 0,
  },
  {
    key: "T",
    type: "default",
    status: 0,
  },
  {
    key: "Y",
    type: "default",
    status: 0,
  },
  {
    key: "U",
    type: "default",
    status: 0,
  },
  {
    key: "I",
    type: "default",
    status: 0,
  },
  {
    key: "O",
    type: "default",
    status: 0,
  },
  {
    key: "P",
    type: "default",
    status: 0,
  },
];

const ROW_TWO = [
  {
    key: "A",
    type: "default",
    status: 0,
  },
  {
    key: "S",
    type: "default",
    status: 0,
  },
  {
    key: "D",
    type: "default",
    status: 0,
  },
  {
    key: "F",
    type: "default",
    status: 0,
  },
  {
    key: "G",
    type: "default",
  },
  {
    key: "H",
    type: "default",
    status: 0,
  },
  {
    key: "J",
    type: "default",
    status: 0,
  },
  {
    key: "K",
    type: "default",
    status: 0,
  },
  {
    key: "L",
    type: "default",
    status: 0,
  },
];

const ROW_THREE = [
  {
    key: "Backspace",
    type: "default",
    status: 0,
  },
  {
    key: "Z",
    type: "default",
    status: 0,
  },
  {
    key: "X",
    type: "default",
    status: 0,
  },
  {
    key: "C",
    type: "default",
    status: 0,
  },
  {
    key: "V",
    type: "default",
    status: 0,
  },
  {
    key: "B",
    type: "default",
    status: 0,
  },
  {
    key: "N",
    type: "default",
    status: 0,
  },
  {
    key: "M",
    type: "default",
    status: 0,
  },
  {
    key: "Enter",
    type: "default",
    status: 0,
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
