import React, { useEffect } from "react";

import { PickDifficulty } from "../../components";

const KeyboardSection = (props) => {
  useEffect(() => {
    const onKeyPressEvent = (event) => {
      if (event.key === "Backspace") {
        props.setWord((prev) => prev.slice(0, -1));
      } else if (event.key === "Enter") {
        if (props.word.length === props.difficulty)
          props.setInitiateSubmit(true);
      } else if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        if (props.word.length < props.difficulty) {
          props.setWord((prev) => prev + event.key.toUpperCase());
        }
      }
    };

    window.addEventListener("keyup", onKeyPressEvent);

    return () => {
      window.removeEventListener("keyup", onKeyPressEvent);
    };
  }, [props.word]);

  return (
    <div className="keyModule">
      <PickDifficulty isDisabled={true} difficulty={props.difficulty} />
    </div>
  );
};

export default KeyboardSection;
