export default function ScoresheetHeader({ gameDetails }) {
  return (
    <>
      <div className="flex items-center justify-between  pb-4">
        <img src="/basketballLogo.png" alt="Basketball Logo" className="w-20" />
        <div className="text-center flex-grow ">
          <h1 className="text-2xl font-extrabold mr-[70px]">SCORESHEET</h1>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-8 mt-4">
          <div className="flex">
            <label className="font-bold">Team A:</label>
            <div className="flex flex-col">
              <span className="ml-2 text-[#0000FF] font-bold">
                {gameDetails.teamA}
              </span>
              <div className="w-[400px] h-0.5 bg-black"></div>
            </div>
          </div>
          <div className="flex">
            <label className="font-bold ">Team B:</label>
            <div className="flex flex-col">
              <span className="ml-2 text-[#0000FF] font-bold">
                {gameDetails.teamB}
              </span>
              <div className="w-[400px] h-0.5 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
