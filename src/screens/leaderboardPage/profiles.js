import React from "react";

export default function profiles({ Leaderboard }) {
  return <div id="profile">{Item(Leaderboard)}</div>;
}

function Item(data) {
  return (
    <div className="parent">
      <div className="flex-header">
        <div className="item">
          <span>
            <h4>Player Details</h4>
          </span>
        </div>

        <div className="item-container">
          <div className="score">
            <h4 className="heading">Score</h4>
          </div>
          <div className="rank">
            <h4 className="heading">Rank</h4>
          </div>
          <div className="current">
            <h4 className="heading">Current Streak</h4>
          </div>
          <div className="alltime">
            <h4 className="heading">Best Streak</h4>
          </div>
        </div>
      </div>
      <>
        {data.map((value, index) => (
          <div className="flex" key={index}>
            <div className="item">
              <img src={value.img} alt="" />

              <div className="info">
                <h4 className="name text-dark">{value.name}</h4>
                <span>{value.username}</span>
              </div>
            </div>

            <div className="item-container">
              <div className="score">
                <span className="score-span">{value.score}</span>
              </div>
              <div className="rank">
                <span className="rank-span">{value.rank}</span>
              </div>
              <div className="current">
                <span className="current-span">{value.curst}</span>
              </div>
              <div className="alltime">
                <span className="alltime-span">{value.allst}</span>
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
