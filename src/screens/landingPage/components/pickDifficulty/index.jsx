import React from "react";
import "./index.css";

import { Button } from "../../../../shared/components";

const PickDifficulty = (props) => {
  return (
    <div
      className={`pickDifficulty ${
        props.isDisabled && "pickDifficulty-desiable"
      }`}
    >
      <div className="pickDifficulty-selector">
        <Button title="Letter Difficulty" type="primary" />
        <div className="pickDifficulty-tiles">
          <Button
            title="5"
            type={props.difficulty === 5 ? "primary" : "secondary"}
            onClick={() => !props.isDisabled && props.setDifficulty(5)}
          />
          <Button
            title="6"
            type={props.difficulty === 6 ? "primary" : "secondary"}
            onClick={() => !props.isDisabled && props.setDifficulty(6)}
          />
          <Button
            title="7"
            type={props.difficulty === 7 ? "primary" : "secondary"}
            onClick={() => !props.isDisabled && props.setDifficulty(7)}
          />
        </div>
      </div>
      {!props.isDisabled && (
        <div className="pickDifficulty-submission">
          <Button
            title="Start Round"
            type="primary"
            onClick={() => props.setStep(2)}
          />
        </div>
      )}
    </div>
  );
};

export default PickDifficulty;
