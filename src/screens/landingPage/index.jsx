import React, { useState } from "react";
import "./index.css";
import { Popup } from "../../shared/components/index";
import { GameGrid, KeyboardSection, PickDifficulty } from "./components";

const Landing = () => {
  const [newWord, setNewWord] = useState("SHAKES");
  const [word, setWord] = useState("");
  const [initiateSubmit, setInitiateSubmit] = useState(false);
  const [difficulty, setDifficulty] = useState(5);
  const [step, setStep] = useState(1);

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
              setStep={setStep}
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
