import React, { useState, useEffect } from "react";
import "./index.css";

import { getNewWord } from "../../shared/api/wordRequest";
import { GameGrid, KeyboardSection, PickDifficulty } from "./components";

const Landing = () => {
  const [newWord, setNewWord] = useState("");
  const [wordMeaning, setWordMeaning] = useState("");
  const [word, setWord] = useState("");
  const [initiateSubmit, setInitiateSubmit] = useState(false);
  const [difficulty, setDifficulty] = useState(5);
  // const [step, setStep] = useState(1);
  const [keyStatus, setKeyStatus] = useState({});

  useEffect(() => {
    startGame(5);
  }, []);

  const startGame = async (val) => {
    try {
      const data = await getNewWord();
      setNewWord(data.word.word.toUpperCase());
      setDifficulty(data.word.word.length);
      setWordMeaning(data.word.meaning);
      // setStep(val);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="landing">
      <div className="landing-body">
        {/* <div className="landing-blob"></div> */}
        <div className="landing-glass">
          <GameGrid
            difficulty={difficulty}
            newWord={newWord}
            word={word}
            setWord={setWord}
            initiateSubmit={initiateSubmit}
            setInitiateSubmit={setInitiateSubmit}
            wordMeaning={wordMeaning}
            // setStep={setStep}
            keyStatus={keyStatus}
            setKeyStatus={setKeyStatus}
            startGame={startGame}
          />
          {/* {step === 1 && (
            <PickDifficulty
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              step={step}
              setStep={startGame}
              isDisabled={false}
            />
          )} */}
          {/* {step === 2 && ( */}
          {/* )} */}
          <div className="attachKeybd-bottom">
            <KeyboardSection
              difficulty={difficulty}
              word={word}
              setWord={setWord}
              initiateSubmit={initiateSubmit}
              setInitiateSubmit={setInitiateSubmit}
              keyStatus={keyStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
