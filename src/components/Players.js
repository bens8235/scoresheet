import "./teamsheet.css";

export default function Players({ playerDetails }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="mt-8 flex">
          <div className="flex border-2 border-black">
            <h2 className="border-r-2 border-black h-full w-[60px] text-center font-bold">
              License No
            </h2>
            <h2 className="border-r-2 border-black text-center h-full w-[200px] font-bold">
              Players
            </h2>
            <h2 className="border-r-2 border-black text-center h-full w-[40px] font-bold">
              No.
            </h2>
            <h2 className="border-r-2 border-black text-center h-full w-[50px] font-bold">
              Player in
            </h2>
            <div className="flex flex-col items-center w-[178.31px]">
              <h2 className="pr-2 w-[150px] text-center font-bold text-[18px]">
                Fouls
              </h2>
              <div className="flex w-[178.31px] font-bold">
                <h3 className="text-center flex-1">1</h3>
                <h3 className="text-center flex-1">2</h3>
                <h3 className="text-center flex-1">3</h3>
                <h3 className="text-center flex-1">4</h3>
                <h3 className="text-center flex-1">5</h3>
              </div>
            </div>
          </div>
        </div>
        {playerDetails.map((player, index) => {
          return (
            <div key={index} className="flex">
              <div className="flex border-2 border-black">
                <h2 className="border-r-2 border-black text-center h-full  w-[60px]">
                  {player.license_no}
                </h2>
                <h2 className="border-r-2 border-black text-center  h-full w-[200px]">
                  {player.player}
                </h2>
                <h2 className="border-r-2 border-black text-center  h-full w-[40px]">
                  {player.no}
                </h2>
                <h2 className="border-r-2 border-black  flex  h-full w-[50px] relative">
                  {player.playerIn && <div className="thin-cross blue"></div>}
                </h2>

                <div className="flex w-[178.31px]">
                  <h3 className="border-r-2 border-black text-center flex-1">
                    {player.fouls[0]}
                  </h3>
                  <h3 className="border-r-2 border-black text-center flex-1">
                    {player.fouls[1]}
                  </h3>
                  <h3 className="border-r-2 border-black text-center flex-1">
                    {player.fouls[2]}
                  </h3>
                  <h3 className="border-r-2 border-black text-center flex-1">
                    {player.fouls[3]}
                  </h3>
                  <h3 className="flex-1 text-center">{player.fouls[4]}</h3>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col mt-8">
          <div className="flex">
            <div className=" flex border-2 border-black">
              <h2 className="border-r-2 border-black w-[150px]">Head Coach</h2>
              <h2 className="border-r-2 border-black w-[50px]">C001</h2>
              <h2 className="border-r-2 border-black w-[150px]">CANUT J</h2>

              <span className="border-r-2 border-black w-6 h-6">C0</span>

              <div className="relative">
                <span className=" w-6 h-6 flex items-center justify-center border-r-2 border-black"></span>
                <span className="horizontal-line top-line"></span>
                <span className="horizontal-line bottom-line"></span>
              </div>
              <div className="relative">
                <span className=" w-6 h-6 flex items-center justify-center"></span>
                <span className="horizontal-line top-line"></span>
                <span className="horizontal-line bottom-line"></span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className=" flex border-2 border-black">
              <h2 className="border-r-2 border-black w-[150px]">
                First Assistant Coach
              </h2>
              <h2 className="border-r-2 border-black w-[50px]">C80</h2>
              <h2 className="border-r-2 border-black w-[150px]">SERRAT A</h2>

              <div className="relative">
                <span className=" w-6 h-6 flex items-center justify-center border-r-2 border-black"></span>
                <span className="horizontal-line top-line"></span>
                <span className="horizontal-line bottom-line"></span>
              </div>

              <div className="relative">
                <span className=" w-6 h-6 flex items-center justify-center border-r-2 border-black"></span>
                <span className="horizontal-line top-line"></span>
                <span className="horizontal-line bottom-line"></span>
              </div>
              <div className="relative">
                <span className=" w-6 h-6 flex items-center justify-center"></span>
                <span className="horizontal-line top-line"></span>
                <span className="horizontal-line bottom-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
