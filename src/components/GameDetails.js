export default function GameDetails() {
  return (
    <div className="flex flex-wrap gap-8 mt-8 justify-center border-b-2 border-black mb-1">
      <div className="mb-4">
        <label className="font-bold">Competition:</label>
        <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
          BASCUP 2022
        </span>
      </div>
      <div className="mb-4">
        <label className="font-bold">Date:</label>
        <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
          15.06.23
        </span>
      </div>
      <div className="mb-4">
        <label className="font-bold">Time:</label>
        <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
          20:30
        </span>
      </div>
      <div className="mb-4">
        <label className="font-bold">Crew Chief:</label>
        <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
          KOTLEBA, L (SVK)
        </span>
      </div>
      <div className="w-full flex flex-wrap gap-8 justify-center">
        <div className="mb-4">
          <label className="font-bold">Game No.</label>
          <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
            169
          </span>
        </div>
        <div className="mb-4">
          <label className="font-bold">Place:</label>
          <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
            FIBA ARENA, GENEVE
          </span>
        </div>

        <div className="mb-4">
          <label className="font-bold">Umpire 1:</label>
          <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
            JUNGBRAND, O (FIN)
          </span>
        </div>
        <div className="mb-4">
          <label className="font-bold">Umpire 2:</label>
          <span className="ml-2 border-b-2 border-black text-[#0000FF] font-bold">
            RIGASO, G (GRE)
          </span>
        </div>
      </div>
    </div>
  );
}
