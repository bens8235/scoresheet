export default function Scores() {
  return (
    <>
      <div className="flex flex-col items-start">
        <h2 className="font-bold border-b-2 border-black">Scores</h2>
        <div className="flex gap-8 justify-center">
          <div className="mb-4">
            <label className="font-bold">Quarter 1</label>
          </div>
          <div className="mb-4">
            <label className="font-bold">A</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              25
            </span>
          </div>
          <div className="mb-4">
            <label className="font-bold">B</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              17
            </span>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="mb-4">
            <label className="font-bold">Quarter 2</label>
          </div>
          <div className="mb-4">
            <label className="font-bold">A</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              16
            </span>
          </div>
          <div className="mb-4">
            <label className="font-bold">B</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              27
            </span>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="mb-4">
            <label className="font-bold">Quarter 3</label>
          </div>
          <div className="mb-4">
            <label className="font-bold">A</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              24
            </span>
          </div>
          <div className="mb-4">
            <label className="font-bold">B</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              30
            </span>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="mb-4">
            <label className="font-bold">Quarter 4</label>
          </div>
          <div className="mb-4">
            <label className="font-bold">A</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              27
            </span>
          </div>
          <div className="mb-4">
            <label className="font-bold">B</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              16
            </span>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="mb-4">
            <label className="font-bold">Overtimes</label>
          </div>
          <div className="mb-4">
            <label className="font-bold">A</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              0
            </span>
          </div>
          <div className="mb-4">
            <label className="font-bold">B</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              0
            </span>
          </div>
        </div>
        <div className="flex gap-8 justify-center mt-2 border-t-2 border-black">
          <div className="mb-4">
            <label className="font-bold">Final Score</label>
          </div>
          <div className="mb-4">
            <label className="font-bold">Team A</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              92
            </span>
          </div>
          <div className="mb-4">
            <label className="font-bold">Team B</label>
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              90
            </span>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="mb-4">
            <label className="font-bold">Name of Winning Team</label>
          </div>
          <div className="mb-4">
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              BC Mies
            </span>
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="mb-4">
            <label className="font-bold">Game Ended at (hh:mm)</label>
          </div>
          <div className="mb-4">
            <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
              22:05
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
