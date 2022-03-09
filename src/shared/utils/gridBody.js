const CELL_EMPTY = {
  text: "",
  type: "empty",
};

const CELL_CURRENT = {
  text: "",
  type: "current",
};

class CurrentCell {
  constructor() {
    this.text = "";
    this.type = "current";
  }
}

export const DUMMY_CELL_CONTENT_HEART = [
  {
    text: "H",
    type: "correct",
  },
  {
    text: "E",
    type: "current",
  },
  {
    text: "A",
    type: "current",
  },
  {
    text: "R",
    type: "current",
  },
  {
    text: "T",
    type: "current",
  },
];

export const DUMMY_CELL_CONTENT_SLICE = [
  {
    text: "S",
    type: "current",
  },
  {
    text: "L",
    type: "current",
  },
  {
    text: "I",
    type: "alert",
  },
  {
    text: "C",
    type: "current",
  },
  {
    text: "E",
    type: "current",
  },
];

export const DUMMY_CELL_CONTENT_ABSENT = [
  {
    text: "B",
    type: "current",
  },
  {
    text: "R",
    type: "current",
  },
  {
    text: "U",
    type: "current",
  },
  {
    text: "T",
    type: "absent",
  },
  {
    text: "E",
    type: "current",
  },
];

export const toggleGrid = (letterCount) => {
  let ROW = [];
  switch (letterCount) {
    case 5: {
      for (let count = 0; count < 7; count++) {
        let COLUMN = [];
        for (let colCount = 0; colCount < 5; colCount++) {
          COLUMN.push(CELL_EMPTY);
        }
        ROW.push(COLUMN);
      }
      break;
    }
    case 6: {
      for (let count = 0; count < 7; count++) {
        let COLUMN = [];
        for (let colCount = 0; colCount < 6; colCount++) {
          COLUMN.push(CELL_EMPTY);
        }
        ROW.push(COLUMN);
      }
      break;
    }
    case 7: {
      for (let count = 0; count < 7; count++) {
        let COLUMN = [];
        for (let colCount = 0; colCount < 7; colCount++) {
          COLUMN.push(CELL_EMPTY);
        }
        ROW.push(COLUMN);
      }
      break;
    }
    default: {
      for (let count = 0; count < 7; count++) {
        let COLUMN = [];
        for (let colCount = 0; colCount < 4; colCount++) {
          COLUMN.push(CELL_EMPTY);
        }
        ROW.push(COLUMN);
      }
      break;
    }
  }
  return ROW;
};

export const currentGrid = (letterCount) => {
  let COLUMN = [];
  switch (letterCount) {
    case 5: {
      for (let colCount = 0; colCount < 5; colCount++) {
        let colCur = new CurrentCell();
        COLUMN.push(colCur);
      }
      break;
    }
    case 6: {
      for (let colCount = 0; colCount < 6; colCount++) {
        let colCur = new CurrentCell();
        COLUMN.push(colCur);
      }
      break;
    }
    case 7: {
      for (let colCount = 0; colCount < 7; colCount++) {
        let colCur = new CurrentCell();
        COLUMN.push(colCur);
      }
      break;
    }
    default: {
      for (let colCount = 0; colCount < 4; colCount++) {
        let colCur = new CurrentCell();
        COLUMN.push(colCur);
      }
    }
  }
  return COLUMN;
};
