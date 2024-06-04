export default function Scores({ finalStats }) {
  console.log(finalStats.quarter1.teamA);
  return (
    <>
      <div className="flex flex-col items-start mt-8">
        <h2 className="font-bold border-b-2 border-black mb-2">Scores</h2>
        <div className="flex gap-8 justify-center">
          <div className="mb-4 w-[77px]">
            <label className="font-bold ">Quarter 1</label>
          </div>
          <div className="mb-4">
            <label className="font-bold">A</label>
            <span className="ml-2 border-b-2 border-black text-[#FF0000] font-bold">
              {finalStats.quarter1.teamA}
            </span>
          </div>
          <div className="mb-4">
            <label className="font-bold">B</label>
            <span className="ml-2 border-b-2 border-black text-[#FF0000] font-bold">
              {finalStats.quarter1.teamB}
            </span>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="mb-4 w-[77px]">
            <label className="font-bold ">Quarter 2</label>
          </div>
          <div className="mb-4">
            <label className="font-bold">A</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              {finalStats.quarter2.teamA}
            </span>
          </div>
          <div className="mb-4">
            <label className="font-bold">B</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              {finalStats.quarter2.teamB}
            </span>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="mb-4 w-[77px]">
            <label className="font-bold ">Quarter 3</label>
          </div>
          <div className="mb-4">
            <label className="font-bold">A</label>
            <span className="ml-2 border-b-2 border-black text-[#FF0000] font-bold">
              {finalStats.quarter3.teamA}
            </span>
          </div>
          <div className="mb-4">
            <label className="font-bold">B</label>
            <span className="ml-2 border-b-2 border-black text-[#FF0000] font-bold">
              {finalStats.quarter3.teamB}
            </span>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="mb-4 w-[77px]">
            <label className="font-bold ">Quarter 4</label>
          </div>
          <div className="mb-4">
            <label className="font-bold">A</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              {finalStats.quarter4.teamA}
            </span>
          </div>
          <div className="mb-4">
            <label className="font-bold">B</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              {finalStats.quarter4.teamB}
            </span>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="mb-4">
            <label className="font-bold w-[77px]">Overtimes</label>
          </div>
          <div className="mb-4 flex items-center">
            <label className="font-bold">A</label>
            {finalStats.overtime.teamA ? (
              <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
                {finalStats.overtime.teamA}
              </span>
            ) : (
              <div className="ml-2 flex flex-col items-center">
                <div className="h-1 bg-[#0000FF] w-5"></div> {/* Blue line */}
                <div className="h-0.5 bg-black w-5 mt-1"></div>{" "}
              </div>
            )}
          </div>
          <div className="mb-4 flex items-center">
            <label className="font-bold">B</label>
            {finalStats.overtime.teamB ? (
              <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
                {finalStats.overtime.teamB}
              </span>
            ) : (
              <div className="ml-2 flex flex-col items-center">
                <div className="h-1 bg-[#0000FF] w-5"></div> {/* Blue line */}
                <div className="h-0.5 bg-black w-5 mt-1"></div>{" "}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-8 justify-center mt-2 border-t-2 border-black">
          <div className="mb-4">
            <label className="font-bold">Final Score</label>
          </div>
          <div className="mb-4">
            <label className="font-bold">Team A</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              {finalStats.finalScore.teamA}
            </span>
          </div>
          <div className="mb-4">
            <label className="font-bold">Team B</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              {finalStats.finalScore.teamB}
            </span>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="mb-4">
            <label className="font-bold">Name of Winning Team</label>
          </div>
          <div className="mb-4">
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              {finalStats.winningTeam}
            </span>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="mb-4">
            <label className="font-bold">Game Ended at (hh:mm)</label>
          </div>
          <div className="mb-4">
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              {finalStats.gameEndTime}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
