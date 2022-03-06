import React from "react";
import "./index.css";

import { Button } from "../../../../shared/components";

const PickDifficulty = (props) => {
  return (
    <div
      className={`pickDifficulty ${
        props.isDisabled ? "pickDifficulty-desiable" : ""
      }`}
    >
      <div className="pickDifficulty-selector">
        <Button type="primary">Letter Difficulty</Button>
        <div className="pickDifficulty-tiles">
          <Button
            type={props.difficulty === 5 ? "primary" : "secondary"}
            onClick={() => !props.isDisabled && props.setDifficulty(5)}
          >
            5
          </Button>
          <Button
            type={props.difficulty === 6 ? "primary" : "secondary"}
            onClick={() => !props.isDisabled && props.setDifficulty(6)}
          >
            6
          </Button>
          <Button
            type={props.difficulty === 7 ? "primary" : "secondary"}
            onClick={() => !props.isDisabled && props.setDifficulty(7)}
          >
            7
          </Button>
        </div>
      </div>
      {!props.isDisabled && (
        <div className="pickDifficulty-submission">
          <Button type="primary" onClick={() => props.setStep(2)}>
            Start Game
          </Button>
        </div>
      )}
    </div>
  );
};

export default PickDifficulty;
