import React, { useEffect } from "react";

import { checkWord } from "../../../../shared/api/wordRequest";
import { PickDifficulty } from "../../components";

const KeyboardSection = (props) => {
  useEffect(() => {
    const onKeyPressEvent = async (event) => {
      if (event.key === "Backspace") {
        props.setWord((prev) => prev.slice(0, -1));
      } else if (event.key === "Enter") {
        if (props.word.length === props.difficulty) {
          try {
            const res = await checkWord(props.word);
            props.setInitiateSubmit(true);
          } catch (err) {
            console.log(err);
          }
        }
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
      <div className="keyModule-board"></div>
    </div>
  );
};

export default KeyboardSection;
