import React, { useState } from "react";
import "./index.css";

import { GameGrid, KeyboardSection, PickDifficulty } from "./components";

const Landing = () => {
  const [word, setWord] = useState("");
  const [difficulty, setDifficulty] = useState(5);
  const [step, setStep] = useState(1);

  const onSubmit = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  return (
    <div className="landing">
      <div className="landing-body">
        <div className="landing-blob"></div>
        <div className="landing-glass">
          <GameGrid difficulty={difficulty} />
          {step === 1 && (
            <PickDifficulty
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              step={step}
              setStep={setStep}
            />
          )}
          {step === 2 && <KeyboardSection />}
        </div>
      </div>
    </div>
  );
};

export default Landing;
