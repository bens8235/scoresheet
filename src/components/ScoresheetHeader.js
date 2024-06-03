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
              <span className="ml-2 text-[#0000FF] font-bold">B.C. MIES</span>
              <div className="w-[400px] h-0.5 bg-black"></div>
            </div>
          </div>
          <div className="flex">
            <label className="font-bold ">Team B:</label>
            <div className="flex flex-col">
              <span className="ml-2 text-[#0000FF] font-bold">CATBASKET</span>
              <div className="w-[400px] h-0.5 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
