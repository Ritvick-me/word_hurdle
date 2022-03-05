import React, { useState, useEffect } from "react";
import "./index.css";

import BajajIcon from "../../../../assets/vector/BajajIcon.svg";
import { toggleGrid, currentGrid } from "../../../../shared/utils/gridBody";
import { LetterBox } from "../../../../shared/components";

const GameGrid = (props) => {
  const [currentRow, setCurrentRow] = useState([]);
  const [emptyGrid, setEmptyGrid] = useState([]);

  useEffect(() => {
    setCurrentRow(currentGrid(props.difficulty));
    setEmptyGrid(toggleGrid(props.difficulty));
  }, [props.difficulty]);

  return (
    <div className="gameGrid">
      <img
        className={`landing-body-bajaj-logo`}
        src={BajajIcon}
        alt="Bajaj Finserv Health Word Hurdle game similar to wordle"
      />
      {currentRow.length > 0 && (
        <div className="gameGrid-row">
          {currentRow.map((cell) => {
            return <LetterBox type={cell.type}>{cell.text}</LetterBox>;
          })}
        </div>
      )}
      {emptyGrid.length > 0 &&
        emptyGrid.map((col) => {
          return (
            <div className="gameGrid-row">
              {col.map((cell) => {
                return <LetterBox type={cell.type}>{cell.text}</LetterBox>;
              })}
            </div>
          );
        })}
    </div>
  );
};

export default GameGrid;
