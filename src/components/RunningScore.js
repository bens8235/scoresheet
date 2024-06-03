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
              {num[0].map((n, idx) => (
                <div className="cell font-bold" key={`A-${index}-${idx}`}>
                  {n.key}
                </div>
              ))}
            </div>
            <div className="grid-container  w-[60px]">
              <div className="header">B</div>
              {num[1].map((n, idx) => (
                <div className="cell font-bold" key={`B-${index}-${idx}`}>
                  {n.key}
                </div>
              ))}

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
