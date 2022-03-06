import React, { useState, useEffect } from "react";
import "./index.css";

import { checkWord } from "../../../../shared/api/wordRequest";
import { Key } from "../../../../shared/components";
import { PickDifficulty } from "../../components";
import { keyboardRows } from "../../../../shared/utils/keyCollection";

const KeyboardSection = (props) => {
  const [rowOne, setRowOne] = useState(keyboardRows(1));
  const [rowTwo, setRowTwo] = useState(keyboardRows(2));
  const [rowThree, setRowThree] = useState(keyboardRows(3));

  useEffect(() => {
    const onKeyPressEvent = async (event) => {
      if (event.key === "Backspace") {
        props.setWord((prev) => prev.slice(0, -1));
      } else if (event.key === "Enter") {
        if (props.word.length === props.difficulty) {
          try {
            const res = await checkWord(props.word);
            if (res) {
              // let newRowOne = rowOne;
              // newRowOne.forEach((r1, i) => {
              //   Array.from(props.word).forEach((w, index) => {
              //     if (w.toUpperCase() === props.newWord[index].toUpperCase()) {
              //       r1.type = "correct";
              //       letterMap[w]--;
              //       isEnded++;
              //     }
              //   })
              // })
              props.setInitiateSubmit(true);
            } else props.setWord("");
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

  const keyPress = async (event) => {
    if (event === "Backspace") {
      props.setWord((prev) => prev.slice(0, -1));
    } else if (event === "Enter") {
      if (props.word.length === props.difficulty) {
        try {
          const res = await checkWord(props.word);
          if (res) props.setInitiateSubmit(true);
          else props.setWord("");
          props.setInitiateSubmit(true);
        } catch (err) {
          console.log(err);
        }
      }
    } else if (event.length === 1 && event.match(/[a-z]/i)) {
      if (props.word.length < props.difficulty) {
        props.setWord((prev) => prev + event.toUpperCase());
      }
    }
  };

  return (
    <div className="keyModule">
      <PickDifficulty isDisabled={true} difficulty={props.difficulty} />
      <div className="keyModule-board">
        <div className="keyModule-row keyModule-row-one">
          {rowOne.map((r) => {
            return (
              <Key key={r.key} text={r.key} type={r.type} pressKey={keyPress} />
            );
          })}
        </div>
        <div className="keyModule-row keyModule-row-two">
          {rowTwo.map((r) => {
            return (
              <Key key={r.key} text={r.key} type={r.type} pressKey={keyPress} />
            );
          })}
        </div>
        <div className="keyModule-row keyModule-row-three">
          {rowThree.map((r) => {
            return (
              <Key key={r.key} text={r.key} type={r.type} pressKey={keyPress} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KeyboardSection;
