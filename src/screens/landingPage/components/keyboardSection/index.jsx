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
  const [dummyState, setDummyState] = useState(1);

  useEffect(() => {
    const onKeyPressEvent = async (event) => {
      if (event.key === "Backspace") {
        props.setWord((prev) => prev.slice(0, -1));
      } else if (event.key === "Enter") {
        if (props.word.length === props.difficulty) {
          try {
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

  useEffect(() => {
    let r1 = rowOne;
    let r2 = rowTwo;
    let r3 = rowThree;
    r1.forEach((r) => {
      if (props.keyStatus[r.key.toUpperCase()] > 0) {
        r.status = setKeyType(props.keyStatus[r.key.toUpperCase()], r.status);
        r.type = getKeyType(r.status);
      }
    });
    r2.forEach((r) => {
      if (props.keyStatus[r.key.toUpperCase()] > 0) {
        r.status = setKeyType(props.keyStatus[r.key.toUpperCase()], r.status);
        r.type = getKeyType(r.status);
      }
    });
    r3.forEach((r) => {
      if (props.keyStatus[r.key.toUpperCase()] > 0) {
        r.status = setKeyType(props.keyStatus[r.key.toUpperCase()], r.status);
        r.type = getKeyType(r.status);
      }
    });
    setRowOne(r1);
    setRowTwo(r2);
    setRowThree(r3);
    setDummyState((prev) => prev + 1);
  }, [props.initiateSubmit]);

  const setKeyType = (newVal, oldVal) => {
    return oldVal < newVal ? newVal : oldVal;
  };

  const getKeyType = (val) => {
    switch (val) {
      case 0:
        return "default";
      case 1:
        return "close";
      case 2:
        return "found";
      case 3:
        return "notFound";
    }
  };

  const keyPress = async (event) => {
    if (event === "Backspace") {
      props.setWord((prev) => prev.slice(0, -1));
    } else if (event === "Enter") {
      if (props.word.length === props.difficulty) {
        try {
          // const res = await checkWord(props.word);
          // if (res)
          props.setInitiateSubmit(true);
          // else props.setWord("");
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
      {/* <PickDifficulty isDisabled={true} difficulty={props.difficulty} /> */}
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
