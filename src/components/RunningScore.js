import React from "react";
import "./RunningScore.css";

export default function RunningScore() {
  const firstRowScores = [1, 41, 81, 121];
  const rows = [];

  while (firstRowScores[3] <= 160) {
    rows.push(
      <React.Fragment key={firstRowScores[0]}>
        <div className="cell"></div>
        <div className="cell">{firstRowScores[0]}</div>
        <div className="cell">{firstRowScores[0]}</div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell">{firstRowScores[1]}</div>
        <div className="cell">{firstRowScores[1]}</div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell">{firstRowScores[2]}</div>
        <div className="cell">{firstRowScores[2]}</div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell">{firstRowScores[3]}</div>
        <div className="cell">{firstRowScores[3]}</div>
        <div className="cell"></div>
      </React.Fragment>
    );
    firstRowScores[0] += 1;
    firstRowScores[1] += 1;
    firstRowScores[2] += 1;
    firstRowScores[3] += 1;
  }

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-center">Running Score</h1>
        <div className="grid-container">
          {/* Header Row */}
          <div className="header cell" style={{ gridColumn: "span 2" }}>
            A
          </div>
          <div className="header cell" style={{ gridColumn: "span 2" }}>
            B
          </div>
          <div className="header cell" style={{ gridColumn: "span 2" }}>
            A
          </div>
          <div className="header cell" style={{ gridColumn: "span 2" }}>
            B
          </div>
          <div className="header cell" style={{ gridColumn: "span 2" }}>
            A
          </div>
          <div className="header cell" style={{ gridColumn: "span 2" }}>
            B
          </div>
          <div className="header cell" style={{ gridColumn: "span 2" }}>
            A
          </div>
          <div className="header cell" style={{ gridColumn: "span 2" }}>
            B
          </div>
          {rows}
        </div>
      </div>
    </>
  );
}
