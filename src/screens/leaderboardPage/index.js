import React from "react";
import "./index.css";
import Profiles from "./profiles";
import { Leaderboard } from "./database";

export default function LeaderboardPage() {
  return (
    <div>
      <div className="main">
        <div className="board">
          <h1 className="leaderboard"> Leader Board </h1>
          <Profiles Leaderboard={Leaderboard} />
        </div>
      </div>
    </div>
  );
}
