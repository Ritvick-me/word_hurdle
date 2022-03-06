import React, { useState, useEffect } from "react";
import "./index.css";

import { getNewWord } from "../../shared/api/wordRequest";
import { Popup } from "../../shared/components/index";
import { GameGrid, KeyboardSection, PickDifficulty } from "./components";

const Landing = () => {
  const [newWord, setNewWord] = useState("SHAKES");
  const [word, setWord] = useState("");
  const [initiateSubmit, setInitiateSubmit] = useState(false);
  const [difficulty, setDifficulty] = useState(5);
  const [step, setStep] = useState(1);

  const startGame = async (val) => {
    try {
      const data = await getNewWord(difficulty);
      setNewWord(data.toUpperCase());
      setStep(val);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="landing">
      <div className="landing-body">
        <div className="landing-blob"></div>
        <div className="landing-glass">
          <GameGrid
            difficulty={difficulty}
            newWord={newWord}
            word={word}
            setWord={setWord}
            initiateSubmit={initiateSubmit}
            setInitiateSubmit={setInitiateSubmit}
            setStep={setStep}
          />
          {step === 1 && (
            <PickDifficulty
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              step={step}
              setStep={startGame}
              isDisabled={false}
            />
          )}
          {step === 2 && (
            <KeyboardSection
              difficulty={difficulty}
              word={word}
              setWord={setWord}
              setInitiateSubmit={setInitiateSubmit}
            />
          )}
        </div>
      </div>
      <Popup guest />
    </div>
  );
};

export default Landing;
