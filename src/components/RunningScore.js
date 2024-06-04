import React from "react";
import "./RunningScore.css";

export default function RunningScore({ scores }) {
  const scores1to40teamA = scores.teamAScore.slice(0, 40);
  const scores1to40teamB = scores.teamBScore.slice(0, 40);
  const scores41to80teamA = scores.teamAScore.slice(40, 80);
  const scores41to80teamB = scores.teamBScore.slice(40, 80);
  const scores81to120teamA = scores.teamAScore.slice(80, 120);
  const scores81to120teamB = scores.teamBScore.slice(80, 120);
  const scores121to160teamA = scores.teamAScore.slice(120, 160);
  const scores121to160teamB = scores.teamBScore.slice(120, 160);

  const arrayofScores = [
    [scores1to40teamA, scores1to40teamB],
    [scores41to80teamA, scores41to80teamB],
    [scores81to120teamA, scores81to120teamB],
    [scores121to160teamA, scores121to160teamB],
  ];

  return (
    <>
      <h1 className="text-center font-bold mt-4 mb-2">Running Score</h1>
      <div className="flex gap-0">
        {arrayofScores.map((num, index) => (
          <React.Fragment key={index}>
            <div className="grid-container w-[60px]">
              <div className="header">A</div>
              {num[0].map((event, idx) => {
                const nextEventQuarter =
                  idx < num[0].length - 1 ? num[0][idx + 1].quarter : null;

                const textColorClass =
                  event.quarter === "Q1" || event.quarter === "Q3"
                    ? "text-[#FF0000]"
                    : "text-[#0000FF]";

                let borderColorClass = "";
                if (
                  idx < num[1].length - 1 &&
                  (event.quarter === "Q1" || event.quarter === "Q3") &&
                  event.quarter !== nextEventQuarter
                ) {
                  borderColorClass = "!border-b-4 !border-b-red-600";
                } else if (
                  idx < num[1].length - 1 &&
                  (event.quarter === "Q2" || event.quarter === "Q4") &&
                  event.quarter !== nextEventQuarter
                ) {
                  borderColorClass = "!border-b-4 !border-b-blue-600";
                } else {
                  borderColorClass = "";
                }

                return (
                  <div
                    className={`cell font-bold ${borderColorClass} ${textColorClass}`}
                    key={`A-empty-${index}-${idx}`}
                  >
                    {event.playerNumber !== false && (
                      <div
                        className={`${
                          event.points === 3 &&
                          (event.quarter === "Q1" || event.quarter === "Q3") &&
                          "outer-circle-red"
                        } ${
                          event.points === 3 &&
                          (event.quarter === "Q2" || event.quarter === "Q4") &&
                          "outer-circle-blue"
                        }`}
                      >
                        <p>{event.playerNumber}</p>
                      </div>
                    )}
                  </div>
                );
              })}
              {num[0].map((n, idx) => {
                const nextEventQuarter =
                  idx < num[0].length - 1 ? num[0][idx + 1].quarter : null;

                const endGame = n.quarter === "ENDGAME" ? "endline" : "";
                const height =
                  n.quarter === "ENDGAME" ? (num[0].length - idx) * 30 : null;

                const heightStyle = height ? { height: `${height}px` } : {};

                let outerCircle = "";
                let borderColorClass = "";
                if (
                  idx < num[1].length - 1 &&
                  (n.quarter === "Q1" || n.quarter === "Q3") &&
                  n.quarter !== nextEventQuarter
                ) {
                  borderColorClass = "!border-b-4 !border-b-red-600";
                  outerCircle = "outer-circle-red";
                } else if (
                  idx < num[1].length - 1 &&
                  (n.quarter === "Q2" || n.quarter === "Q4") &&
                  n.quarter !== nextEventQuarter
                ) {
                  borderColorClass = "!border-b-4 !border-b-blue-600";
                  outerCircle = "outer-circle-blue";
                } else {
                  borderColorClass = "";
                  outerCircle = "";
                }

                let diagonal = "";

                if (
                  (n.points === 3 || n.points === 2) &&
                  (n.quarter === "Q1" || n.quarter === "Q3")
                ) {
                  diagonal = "diagonal-line-red";
                } else if (
                  (n.points === 3 || n.points === 2) &&
                  (n.quarter === "Q2" || n.quarter === "Q4")
                ) {
                  diagonal = "diagonal-line-blue";
                } else {
                  diagonal = "";
                }

                let circleScore = "";

                if (
                  n.points === 1 &&
                  (n.quarter === "Q1" || n.quarter === "Q3")
                ) {
                  circleScore = "circle-point-red";
                } else if (
                  n.points === 1 &&
                  (n.quarter === "Q2" || n.quarter === "Q4")
                ) {
                  circleScore = "circle-point-blue";
                } else {
                  circleScore = "";
                }

                return (
                  <div
                    className={`cell font-bold relative ${borderColorClass}`}
                    key={`A-${index}-${idx}`}
                  >
                    <div className={outerCircle}>{n.key}</div>
                    <div className={`${diagonal} ${circleScore}`}></div>
                    <div className={endGame} style={heightStyle}></div>
                  </div>
                );
              })}
            </div>
            <div className="grid-container  w-[60px]">
              <div className="header">B</div>
              {num[1].map((n, idx) => {
                const nextEventQuarter =
                  idx < num[1].length - 1 ? num[1][idx + 1].quarter : null;

                const endGame2 = n.quarter === "ENDGAME" ? "endline" : "";

                const height2 =
                  n.quarter === "ENDGAME" ? (num[0].length - idx) * 30 : null;

                const heightStyle2 = height2 ? { height: `${height2}px` } : {};

                let borderColorClass2 = "";
                let outerCircle2 = "";
                if (
                  idx < num[1].length - 1 &&
                  (n.quarter === "Q1" || n.quarter === "Q3") &&
                  n.quarter !== nextEventQuarter
                ) {
                  borderColorClass2 = "!border-b-4 !border-b-red-600";
                  outerCircle2 = "outer-circle-red";
                } else if (
                  idx < num[1].length - 1 &&
                  (n.quarter === "Q2" || n.quarter === "Q4") &&
                  n.quarter !== nextEventQuarter
                ) {
                  borderColorClass2 = "!border-b-4 !border-b-blue-600";
                  outerCircle2 = "outer-circle-blue";
                } else {
                  borderColorClass2 = "";
                  outerCircle2 = "";
                }
                let diagonal2 = "";

                if (
                  (n.points === 3 || n.points === 2) &&
                  (n.quarter === "Q1" || n.quarter === "Q3")
                ) {
                  diagonal2 = "diagonal-line-red";
                } else if (
                  (n.points === 3 || n.points === 2) &&
                  (n.quarter === "Q2" || n.quarter === "Q4")
                ) {
                  diagonal2 = "diagonal-line-blue";
                } else {
                  diagonal2 = "";
                }

                let circleScore2 = "";

                if (
                  n.points === 1 &&
                  (n.quarter === "Q1" || n.quarter === "Q3")
                ) {
                  circleScore2 = "circle-point-red";
                } else if (
                  n.points === 1 &&
                  (n.quarter === "Q2" || n.quarter === "Q4")
                ) {
                  circleScore2 = "circle-point-blue";
                } else {
                  circleScore2 = "";
                }
                return (
                  <div
                    className={`cell font-bold relative ${borderColorClass2}`}
                    key={`B-${index}-${idx}`}
                  >
                    <div className={outerCircle2}>{n.key}</div>
                    <div className={`${diagonal2} ${circleScore2}`}></div>
                    <div className={endGame2} style={heightStyle2}></div>
                  </div>
                );
              })}

              {num[1].map((event2, idx) => {
                const nextEventQuarter =
                  idx < num[1].length - 1 ? num[1][idx + 1].quarter : null;

                const textColorClass =
                  event2.quarter === "Q1" || event2.quarter === "Q3"
                    ? "text-[#FF0000]"
                    : "text-[#0000FF]";

                let borderColorClass = "";
                if (
                  idx < num[1].length - 1 &&
                  (event2.quarter === "Q1" || event2.quarter === "Q3") &&
                  event2.quarter !== nextEventQuarter
                ) {
                  borderColorClass = "!border-b-4 !border-b-red-600";
                } else if (
                  idx < num[1].length - 1 &&
                  (event2.quarter === "Q2" || event2.quarter === "Q4") &&
                  event2.quarter !== nextEventQuarter
                ) {
                  borderColorClass = "!border-b-4 !border-b-blue-600";
                } else {
                  borderColorClass = "";
                }

                return (
                  <div
                    className={`cell font-bold ${textColorClass} ${borderColorClass} `}
                    key={`B-empty-${index}-${idx}`}
                  >
                    {event2.playerNumber !== false && (
                      <div
                        className={`${
                          event2.points === 3 &&
                          (event2.quarter === "Q1" ||
                            event2.quarter === "Q3") &&
                          "outer-circle-red"
                        } ${
                          event2.points === 3 &&
                          (event2.quarter === "Q2" ||
                            event2.quarter === "Q4") &&
                          "outer-circle-blue"
                        }`}
                      >
                        <p>{event2.playerNumber}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
