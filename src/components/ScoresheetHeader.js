export default function ScoresheetHeader() {
  return (
    <>
      <div className="flex items-center justify-between  pb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/FIBA_logo.svg/1200px-FIBA_logo.svg.png"
          alt="FIBA Logo"
          className="w-20"
        />
        <div className="text-center flex-grow">
          <h2 className="text-xl font-bold">
            FEDERATION INTERNATIONAL OF BASKETBALL
          </h2>
          <h3 className="text-lg">INTERNATIONAL BASKETBALL FEDERATION</h3>
          <h1 className="text-2xl font-extrabold">SCORESHEET</h1>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-8 mt-4">
          <div className="flex">
            <label className="font-bold">Team A:</label>
            <div className="flex flex-col">
              <span className="ml-2 text-blue-700 font-bold">B.C. MIES</span>
              <div className="w-[400px] h-0.5 bg-black"></div>
            </div>
          </div>
          <div className="flex">
            <label className="font-bold ">Team B:</label>
            <div className="flex flex-col">
              <span className="ml-2 text-blue-700 font-bold">CATBASKET</span>
              <div className="w-[400px] h-0.5 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 mt-8 justify-center">
        <div className="mb-4">
          <label className="font-bold">Competition:</label>
          <span className="ml-2 border-b-2 border-black text-blue-700 font-bold">
            BASCUP 2022
          </span>
        </div>
        <div className="mb-4">
          <label className="font-bold">Date:</label>
          <span className="ml-2 border-b-2 border-black text-blue-700 font-bold">
            15.06.23
          </span>
        </div>
        <div className="mb-4">
          <label className="font-bold">Time:</label>
          <span className="ml-2 border-b-2 border-black text-blue-700 font-bold">
            20:30
          </span>
        </div>
        <div className="mb-4">
          <label className="font-bold">Crew Chief:</label>
          <span className="ml-2 border-b-2 border-black text-blue-700 font-bold">
            KOTLEBA, L (SVK)
          </span>
        </div>
        <div className="w-full flex flex-wrap gap-8 justify-center">
          <div className="mb-4">
            <label className="font-bold">Game No.</label>
            <span className="ml-2 border-b-2 border-black text-blue-700 font-bold">
              169
            </span>
          </div>
          <div className="mb-4">
            <label className="font-bold">Place:</label>
            <span className="ml-2 border-b-2 border-black text-blue-700 font-bold">
              FIBA ARENA, GENEVE
            </span>
          </div>

          <div className="mb-4">
            <label className="font-bold">Umpire 1:</label>
            <span className="ml-2 border-b-2 border-black text-blue-700 font-bold">
              JUNGBRAND, O (FIN)
            </span>
          </div>
          <div className="mb-4">
            <label className="font-bold">Umpire 2:</label>
            <span className="ml-2 border-b-2 border-black text-blue-700 font-bold">
              RIGASO, G (GRE)
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
