export default function GameDetails({ gameDetails }) {
  return (
    <div className="flex flex-wrap gap-8 mt-8 justify-center border-b-2 border-black mb-1">
      <div className="mb-4">
        <label className="font-bold">Competition:</label>
        <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
          {gameDetails.competition}
        </span>
      </div>
      <div className="mb-4">
        <label className="font-bold">Date:</label>
        <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
          {gameDetails.date}
        </span>
      </div>
      <div className="mb-4">
        <label className="font-bold">Time:</label>
        <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
          {gameDetails.time}
        </span>
      </div>
      <div className="mb-4">
        <label className="font-bold">Crew Chief:</label>
        <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
          {gameDetails.crewChief}
        </span>
      </div>
      <div className="w-full flex flex-wrap gap-8 justify-center">
        <div className="mb-4">
          <label className="font-bold">Game No.</label>
          <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
            {gameDetails.gameNo}
          </span>
        </div>
        <div className="mb-4">
          <label className="font-bold">Place:</label>
          <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
            {gameDetails.place}
          </span>
        </div>

        <div className="mb-4">
          <label className="font-bold">Umpire 1:</label>
          <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
            {gameDetails.umpire1}
          </span>
        </div>
        <div className="mb-4">
          <label className="font-bold">Umpire 2:</label>
          <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
            {gameDetails.umpire2}
          </span>
        </div>
      </div>
    </div>
  );
}
