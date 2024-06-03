import React from "react";
import "./RunningScore.css";

export default function RunningScore() {
  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const array1to40 = range(1, 40);
  const array41to80 = range(41, 80);
  const array81to120 = range(81, 120);
  const array121to160 = range(121, 160);

  const arrays = [array1to40, array41to80, array81to120, array121to160];

  return (
    <>
      <h1 className="text-center font-bold mt-4 mb-2">Running Score</h1>
      <div className="flex">
        {arrays.map((num, index) => (
          <React.Fragment key={index}>
            <div className="grid-container">
              <div className="header">A</div>
              {num.map((_, idx) => (
                <div className="cell" key={`A-empty-${index}-${idx}`}></div>
              ))}
              {num.map((n, idx) => (
                <div className="cell" key={`A-${index}-${idx}`}>
                  {n}
                </div>
              ))}
            </div>
            <div className="grid-container">
              <div className="header">B</div>
              {num.map((n, idx) => (
                <div className="cell" key={`B-${index}-${idx}`}>
                  {n}
                </div>
              ))}
              {num.map((_, idx) => (
                <div className="cell" key={`B-empty-${index}-${idx}`}></div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
