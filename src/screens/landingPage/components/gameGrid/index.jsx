import React, { useState, useEffect, useContext } from "react";
import "./index.css";

import BajajIcon from "../../../../assets/vector/BajajIcon.svg";
import UserContext from "../../../../shared/contexts/userContext";
import { toggleGrid, currentGrid } from "../../../../shared/utils/gridBody";
import { fetchScore } from "../../../../shared/utils/score";
import { updateScore } from "../../../../shared/api/scoring";
import { LetterBox, Popup } from "../../../../shared/components";

const GameGrid = (props) => {
  const [previousRows, setPreviousRows] = useState([]);
  const [currentRow, setCurrentRow] = useState([]);
  const [emptyGrid, setEmptyGrid] = useState([]);
  const [gameCompleted, setGameCompleted] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [score, setScore] = useState(0);

  const { user } = useContext(UserContext);

  useEffect(() => {
    setPreviousRows([]);
    props.setWord("");
    setCurrentRow(currentGrid(props.difficulty));
    setEmptyGrid(toggleGrid(props.difficulty));
  }, [props.difficulty]);

  useEffect(() => {
    if (previousRows.length < props.difficulty + 1) {
      let updatedWord = currentGrid(props.difficulty);
      for (let i = 0; i < props.word.length; i++) {
        updatedWord[i].text = props.word[i].toUpperCase();
      }
      setCurrentRow(updatedWord);
    }
  }, [props.word]);

  useEffect(() => {
    if (props.initiateSubmit) {
      if (props.word.length === props.difficulty) {
        emptyGrid.length > 0 && setEmptyGrid((prev) => prev.slice(0, -1));
        let updatedWord = currentRow;
        let letterMap = new Object();
        Array.from(props.newWord).forEach((w) => {
          letterMap[w] && letterMap[w]++;
          !letterMap[w] && (letterMap[w] = 1);
        });
        let isEnded = 0;
        Array.from(props.word).some((w, index) => {
          if (w.toUpperCase() === props.newWord[index].toUpperCase()) {
            updatedWord[index].type = "correct";
            letterMap[w]--;
            isEnded++;
            // props.setKeyStatus[w.toUpperCase()] < 2 &&
            //   props.setKeyStatus((prev) => {
            //     return { ...prev, [w.toUpperCase()]: 2 };
            //   });
          }
        });
        if (
          isEnded !== props.difficulty &&
          previousRows.length === props.difficulty
        ) {
          return endGame("Lost");
        }
        if (isEnded === props.difficulty) {
          let newArr = new Array(updatedWord);
          setPreviousRows((prev) => [...prev, ...newArr]);
          return endGame("Won");
        }
        Array.from(props.word).some((w, index) => {
          let count = 0;
          Array.from(props.newWord).forEach((nw, loc) => {
            if (
              count < 1 &&
              w.toUpperCase() === nw.toUpperCase() &&
              letterMap[w] &&
              updatedWord[index].type !== "correct"
            ) {
              updatedWord[index].type = "alert";
              letterMap[w]--;
              count++;
              // props.setKeyStatus[w.toUpperCase()] < 1 &&
              //   props.setKeyStatus((prev) => {
              //     return { ...prev, [w.toUpperCase()]: 1 };
              //   });
            } else if (
              count < 1 &&
              w.toUpperCase() === nw.toUpperCase() &&
              letterMap[w] &&
              updatedWord[index].type !== "correct" &&
              updatedWord[index].type !== "alert"
            ) {
              // props.setKeyStatus((prev) => {
              //   return { ...prev, [w.toUpperCase()]: 3 };
              // });
            }
          });
        });
        if (previousRows.length === props.difficulty) {
          setCurrentRow([]);
        } else setCurrentRow(currentGrid(props.difficulty));
        let newArr = new Array(updatedWord);
        setPreviousRows((prev) => [...prev, ...newArr]);
        props.setInitiateSubmit(false);
      }
    }
    props.setWord("");
  }, [props.initiateSubmit]);

  const endGame = async (val) => {
    if (val === "Won") {
      if (previousRows.length !== props.difficulty)
        setCurrentRow(currentGrid(props.difficulty));
      else setCurrentRow([]);
      // props.setStep(1);
      // let newScore = fetchScore(props.difficulty, previousRows.length + 1);
      // if (!user) {
      //   setScore(newScore);
      // } else {
      //   const updatedScore = await updateScore(user.email, newScore);
      //   setScore(updatedScore.score);
      // }
      props.setInitiateSubmit(false);
      console.log("You Win!!");
      setGameCompleted("Fantastic! You Won!");
    } else {
      let updatedWord = currentGrid(props.difficulty);
      for (let i = 0; i < props.word.length; i++) {
        updatedWord[i].text = props.word[i].toUpperCase();
        updatedWord[i].type = "wrong";
      }
      // if (!user) {
      //   setScore(0);
      // } else {
      //   const updatedScore = await updateScore(user.email, 0);
      //   setScore(updatedScore.score);
      // }
      let newArr = new Array(updatedWord);
      setPreviousRows((prev) => [...prev, ...newArr]);
      setCurrentRow([]);
      // props.setStep(1);
      props.setInitiateSubmit(false);
      console.log("You Lost.");
      setGameCompleted("Oops! You Lost!");
    }
    setToggleModal(true);
  };

  const resetGame = () => {
    props.startGame();
    setCurrentRow(currentGrid(props.difficulty));
    setEmptyGrid(toggleGrid(props.difficulty));
    setPreviousRows([]);
    props.setWord("");
    setGameCompleted("");
  };

  return (
    <>
      <h1 className="landing-body-heading">WORDLE</h1>
      <Popup
        toggleModal={toggleModal}
        gameCompleted={gameCompleted}
        newWord={props.newWord}
        setToggleModal={setToggleModal}
        resetGame={resetGame}
        score={score}
        wordMeaning={props.wordMeaning}
      />
      <div className="gameGrid">
        <img
          className={`landing-body-bajaj-logo`}
          src={BajajIcon}
          alt="Bajaj Finserv Health Word Hurdle game similar to wordle"
        />
        {previousRows.length > 0 &&
          previousRows.map((col, index) => {
            return (
              <div
                key={index}
                className={`gameGrid-row gamegrid-col-count-${props.difficulty}`}
              >
                {col.map((cell, index) => {
                  return (
                    <LetterBox key={index} type={cell.type}>
                      {cell.text}
                    </LetterBox>
                  );
                })}
              </div>
            );
          })}
        {currentRow.length > 0 && (
          <div
            className={`gameGrid-row gamegrid-col-count-${props.difficulty}`}
          >
            {currentRow.map((cell, index) => {
              return (
                <LetterBox key={index} type={cell.type}>
                  {cell.text}
                </LetterBox>
              );
            })}
          </div>
        )}
        {emptyGrid.length > 0 &&
          emptyGrid.map((col, index) => {
            return (
              <div
                key={index}
                className={`gameGrid-row gamegrid-col-count-${props.difficulty}`}
              >
                {col.map((cell, index) => {
                  return (
                    <LetterBox key={index} type={cell.type}>
                      {cell.text}
                    </LetterBox>
                  );
                })}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default GameGrid;
