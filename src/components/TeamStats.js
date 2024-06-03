import "./teamsheet.css";

export default function TeamStats({ team, teamName, teamDetails }) {
  console.log(teamDetails.HCC[0]);
  return (
    <>
      <div className="flex mt-4">
        <label className="font-bold">Team {team}:</label>
        <div className="flex flex-col">
          <span className="ml-2 text-[#0000FF] font-bold">{teamName}</span>
          <div className="w-[400px] h-0.5 bg-black"></div>
        </div>
      </div>
      <div className="flex mt-4 gap-4">
        <div className="flex flex-col gap-1 ">
          <h2 className="font-bold">Time-outs</h2>
          <div className="flex">
            <h3 className="mr-1">H1</h3>
            <div className="relative">
              <span
                className={`border border-black w-6 h-6 flex items-center justify-center font-bold ${
                  teamDetails.timeOuts[0].H1[0][1] === "Q1" ||
                  teamDetails.timeOuts[0].H1[0][1] === "Q3"
                    ? "text-[#FF0000]"
                    : "text-[#0000FF]"
                }`}
              >
                {teamDetails.timeOuts[0].H1[0][0] ? (
                  teamDetails.timeOuts[0].H1[0][0]
                ) : (
                  <>
                    {teamDetails.timeOuts[0].H1[0][1] === "Q1" ||
                    teamDetails.timeOuts[0].H1[0][1] === "Q3" ? (
                      <>
                        <span className="horizontal-line-red top-line"></span>
                        <span className="horizontal-line-red bottom-line"></span>
                      </>
                    ) : (
                      <>
                        <span className="horizontal-line top-line"></span>
                        <span className="horizontal-line bottom-line"></span>
                      </>
                    )}
                  </>
                )}
              </span>
            </div>
            <div className="relative">
              <span
                className={`border border-black w-6 h-6 flex items-center justify-center font-bold ${
                  teamDetails.timeOuts[0].H1[1][1] === "Q1" ||
                  teamDetails.timeOuts[0].H1[1][1] === "Q3"
                    ? "text-[#FF0000]"
                    : "text-[#0000FF]"
                }`}
              >
                {teamDetails.timeOuts[0].H1[1][0] ? (
                  teamDetails.timeOuts[0].H1[1][0]
                ) : (
                  <>
                    {teamDetails.timeOuts[0].H1[1][1] === "Q1" ||
                    teamDetails.timeOuts[0].H1[1][1] === "Q3" ? (
                      <>
                        <span className="horizontal-line-red top-line"></span>
                        <span className="horizontal-line-red bottom-line"></span>
                      </>
                    ) : (
                      <>
                        <span className="horizontal-line top-line"></span>
                        <span className="horizontal-line bottom-line"></span>
                      </>
                    )}
                  </>
                )}
              </span>
            </div>
          </div>
          <div className="flex">
            <h3 className="mr-1">H2</h3>
            <div className="relative">
              <span
                className={`border border-black w-6 h-6 flex items-center justify-center font-bold ${
                  teamDetails.timeOuts[1].H2[0][1] === "Q1" ||
                  teamDetails.timeOuts[1].H2[0][1] === "Q3"
                    ? "text-[#FF0000]"
                    : "text-[#0000FF]"
                }`}
              >
                {teamDetails.timeOuts[1].H2[0][0] ? (
                  teamDetails.timeOuts[1].H2[0][0]
                ) : (
                  <>
                    {teamDetails.timeOuts[1].H2[0][1] === "Q1" ||
                    teamDetails.timeOuts[1].H2[0][1] === "Q3" ? (
                      <>
                        <span className="horizontal-line-red top-line"></span>
                        <span className="horizontal-line-red bottom-line"></span>
                      </>
                    ) : (
                      <>
                        <span className="horizontal-line top-line"></span>
                        <span className="horizontal-line bottom-line"></span>
                      </>
                    )}
                  </>
                )}
              </span>
            </div>
            <div className="relative">
              <span
                className={`border border-black w-6 h-6 flex items-center justify-center font-bold ${
                  teamDetails.timeOuts[1].H2[1][1] === "Q1" ||
                  teamDetails.timeOuts[1].H2[1][1] === "Q3"
                    ? "text-[#FF0000]"
                    : "text-[#0000FF]"
                }`}
              >
                {teamDetails.timeOuts[1].H2[1][0] ? (
                  teamDetails.timeOuts[1].H2[1][0]
                ) : (
                  <>
                    {teamDetails.timeOuts[1].H2[1][1] === "Q1" ||
                    teamDetails.timeOuts[1].H2[1][1] === "Q3" ? (
                      <>
                        <span className="horizontal-line-red top-line"></span>
                        <span className="horizontal-line-red bottom-line"></span>
                      </>
                    ) : (
                      <>
                        <span className="horizontal-line top-line"></span>
                        <span className="horizontal-line bottom-line"></span>
                      </>
                    )}
                  </>
                )}
              </span>
            </div>
            <div className="relative">
              <span
                className={`border border-black w-6 h-6 flex items-center justify-center font-bold ${
                  teamDetails.timeOuts[1].H2[2][1] === "Q1" ||
                  teamDetails.timeOuts[1].H2[2][1] === "Q3"
                    ? "text-[#FF0000]"
                    : "text-[#0000FF]"
                }`}
              >
                {teamDetails.timeOuts[1].H2[2][0] ? (
                  teamDetails.timeOuts[1].H2[2][0]
                ) : (
                  <>
                    {teamDetails.timeOuts[1].H2[2][1] === "Q1" ||
                    teamDetails.timeOuts[1].H2[2][1] === "Q3" ? (
                      <>
                        <span className="horizontal-line-red top-line"></span>
                        <span className="horizontal-line-red bottom-line"></span>
                      </>
                    ) : (
                      <>
                        <span className="horizontal-line top-line"></span>
                        <span className="horizontal-line bottom-line"></span>
                      </>
                    )}
                  </>
                )}
              </span>
            </div>
          </div>
          <div className="flex">
            <h3 className="mr-1">OT</h3>
            <div className="relative">
              <span
                className={`border border-black w-6 h-6 flex items-center justify-center ${
                  teamDetails.timeOuts[2].OT[0][1] === "Q1" ||
                  teamDetails.timeOuts[2].OT[0][1] === "Q3"
                    ? "text-[#FF0000]"
                    : "text-[#0000FF]"
                }`}
              >
                {teamDetails.timeOuts[2].OT[0][0] ? (
                  teamDetails.timeOuts[2].OT[0][0]
                ) : (
                  <>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </>
                )}
              </span>
            </div>
            <div className="relative">
              <span
                className={`border border-black w-6 h-6 flex items-center justify-center ${
                  teamDetails.timeOuts[2].OT[1][1] === "Q1" ||
                  teamDetails.timeOuts[2].OT[1][1] === "Q3"
                    ? "text-[#FF0000]"
                    : "text-[#0000FF]"
                }`}
              >
                {teamDetails.timeOuts[2].OT[1][0] ? (
                  teamDetails.timeOuts[2].OT[1][0]
                ) : (
                  <>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </>
                )}
              </span>
            </div>
            <div className="relative">
              <span
                className={`border border-black w-6 h-6 flex items-center justify-center ${
                  teamDetails.timeOuts[2].OT[2][1] === "Q1" ||
                  teamDetails.timeOuts[2].OT[2][1] === "Q3"
                    ? "text-[#FF0000]"
                    : "text-[#0000FF]"
                }`}
              >
                {teamDetails.timeOuts[2].OT[2][0] ? (
                  teamDetails.timeOuts[2].OT[2][0]
                ) : (
                  <>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center ">
          <h2 className="font-bold text-center">Team Fouls</h2>
          <div className="flex flex-wrap w-[300px] gap-1">
            <div className="flex">
              <h3 className="mr-1">Q1</h3>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  1
                </span>
                {teamDetails.teamFouls[0].Q1[0] ? (
                  <div className="thin-cross"></div>
                ) : (
                  <>
                    <span className="horizontal-line-red top-line"></span>
                    <span className="horizontal-line-red bottom-line"></span>
                  </>
                )}
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  2
                </span>
                {teamDetails.teamFouls[0].Q1[1] ? (
                  <div className="thin-cross"></div>
                ) : (
                  <>
                    <span className="horizontal-line-red top-line"></span>
                    <span className="horizontal-line-red bottom-line"></span>
                  </>
                )}
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  3
                </span>
                {teamDetails.teamFouls[0].Q1[2] ? (
                  <div className="thin-cross"></div>
                ) : (
                  <>
                    <span className="horizontal-line-red top-line"></span>
                    <span className="horizontal-line-red bottom-line"></span>
                  </>
                )}
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  4
                </span>
                {teamDetails.teamFouls[0].Q1[3] ? (
                  <div className="thin-cross"></div>
                ) : (
                  <>
                    <span className="horizontal-line-red top-line"></span>
                    <span className="horizontal-line-red bottom-line"></span>
                  </>
                )}
              </div>
            </div>
            <div className="flex">
              <h3 className="mr-1">Q2</h3>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  1
                </span>
                {teamDetails.teamFouls[1].Q2[0] ? (
                  <div className="thin-cross blue"></div>
                ) : (
                  <>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </>
                )}
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  2
                </span>
                {teamDetails.teamFouls[1].Q2[1] ? (
                  <div className="thin-cross blue"></div>
                ) : (
                  <>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </>
                )}
              </div>

              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  3
                </span>
                {teamDetails.teamFouls[1].Q2[2] ? (
                  <div className="thin-cross blue"></div>
                ) : (
                  <>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </>
                )}
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  4
                </span>
                {teamDetails.teamFouls[1].Q2[3] ? (
                  <div className="thin-cross blue"></div>
                ) : (
                  <>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </>
                )}
              </div>
            </div>
            <div className="flex">
              <h3 className="mr-1">Q3</h3>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  1
                </span>
                {teamDetails.teamFouls[2].Q3[0] ? (
                  <div className="thin-cross"></div>
                ) : (
                  <>
                    <span className="horizontal-line-red top-line"></span>
                    <span className="horizontal-line-red bottom-line"></span>
                  </>
                )}
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  2
                </span>
                {teamDetails.teamFouls[2].Q3[1] ? (
                  <div className="thin-cross"></div>
                ) : (
                  <>
                    <span className="horizontal-line-red top-line"></span>
                    <span className="horizontal-line-red bottom-line"></span>
                  </>
                )}
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  3
                </span>
                {teamDetails.teamFouls[2].Q3[2] ? (
                  <div className="thin-cross"></div>
                ) : (
                  <>
                    <span className="horizontal-line-red top-line"></span>
                    <span className="horizontal-line-red bottom-line"></span>
                  </>
                )}
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  4
                </span>
                {teamDetails.teamFouls[2].Q3[3] ? (
                  <div className="thin-cross"></div>
                ) : (
                  <>
                    <span className="horizontal-line-red top-line"></span>
                    <span className="horizontal-line-red bottom-line"></span>
                  </>
                )}
              </div>
            </div>
            <div className="flex">
              <h3 className="mr-1">Q4</h3>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  1
                </span>
                {teamDetails.teamFouls[3].Q4[0] ? (
                  <div className="thin-cross blue"></div>
                ) : (
                  <>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </>
                )}
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  2
                </span>
                {teamDetails.teamFouls[3].Q4[1] ? (
                  <div className="thin-cross blue"></div>
                ) : (
                  <>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </>
                )}
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  3
                </span>
                {teamDetails.teamFouls[3].Q4[2] ? (
                  <div className="thin-cross blue"></div>
                ) : (
                  <>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </>
                )}
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  1
                </span>
                {teamDetails.teamFouls[3].Q4[3] ? (
                  <div className="thin-cross blue"></div>
                ) : (
                  <>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </>
                )}
              </div>
            </div>
            <div className="flex">
              <h3 className="mr-1">HCC</h3>
              <span
                className={`border border-black w-6 h-6 flex items-center justify-center font-bold ${
                  teamDetails.HCC[0] === "Q1" || teamDetails.HCC[0] === "Q3"
                    ? "text-[#FF0000]"
                    : "text-[#0000FF]"
                }`}
              >
                {teamDetails.HCC[0]}
              </span>
              <span
                className={`border border-black w-6 h-6 flex items-center justify-center font-bold ${
                  teamDetails.HCC[0] === "Q1" || teamDetails.HCC[0] === "Q3"
                    ? "text-[#FF0000]"
                    : "text-[#0000FF]"
                }`}
              >
                {teamDetails.HCC[1]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
