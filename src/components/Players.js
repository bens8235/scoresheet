import "./teamsheet.css";

export default function Players({ playerDetails, coachDetails }) {
  console.log(coachDetails.headCoach);
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
                <h2 className="border-r-2 border-black text-center h-full relative  w-[60px]">
                  {player.license_no !== false ? (
                    player.license_no
                  ) : (
                    <>
                      <span className="horizontal-line top-line"></span>
                      <span className="horizontal-line bottom-line"></span>
                    </>
                  )}
                </h2>
                <h2 className="border-r-2 border-black text-center relative h-full w-[200px] min-h-[24px]">
                  {player.player ? (
                    player.player
                  ) : (
                    <>
                      <span className="horizontal-line top-line"></span>
                      <span className="horizontal-line bottom-line"></span>
                    </>
                  )}
                </h2>
                <h2 className="border-r-2 border-black text-center relative h-full w-[40px]">
                  {player.no !== false ? (
                    player.no
                  ) : (
                    <>
                      <span className="horizontal-line top-line"></span>
                      <span className="horizontal-line bottom-line"></span>
                    </>
                  )}
                </h2>
                <div className="flex justify-center border-r-2 border-black w-[50px] relative">
                  {player.playerStart ? (
                    <div className="circle">
                      <div className="thin-cross blue"></div>
                    </div>
                  ) : player.playerIn[0] &&
                    (player.playerIn[1] === "Q1" ||
                      player.playerIn[1] === "Q3") ? (
                    <div className="thin-cross"></div>
                  ) : player.playerIn[0] ? (
                    <div className="thin-cross blue"></div>
                  ) : (
                    <>
                      <span className="horizontal-line top-line"></span>
                      <span className="horizontal-line bottom-line"></span>
                    </>
                  )}
                </div>

                <div className="flex w-[178.31px]">
                  <h3
                    className={`border-r-2 border-black text-center flex-1 relative font-bold ${
                      player.fouls[0][1] === "Q1" || player.fouls[0][1] === "Q3"
                        ? "text-[#FF0000]"
                        : "text-[#0000FF]"
                    }`}
                  >
                    {player.fouls[0] && player.fouls[0][0] ? (
                      player.fouls[0][0]
                    ) : (
                      <>
                        <span className="horizontal-line top-line w-[36px]"></span>
                        <span className="horizontal-line bottom-line w-[36px]"></span>
                      </>
                    )}
                  </h3>
                  <h3
                    className={`border-r-2 border-black text-center flex-1 relative font-bold ${
                      player.fouls[1][1] === "Q1" || player.fouls[1][1] === "Q3"
                        ? "text-[#FF0000]"
                        : "text-[#0000FF]"
                    }`}
                  >
                    {player.fouls[1] && player.fouls[1][0] ? (
                      player.fouls[1][0]
                    ) : (
                      <>
                        <span className="horizontal-line top-line w-[36px]"></span>
                        <span className="horizontal-line bottom-line w-[36px]"></span>
                      </>
                    )}
                  </h3>
                  <h3
                    className={`border-r-2 border-black text-center flex-1 relative font-bold ${
                      player.fouls[2][1] === "Q1" || player.fouls[2][1] === "Q3"
                        ? "text-[#FF0000]"
                        : "text-[#0000FF]"
                    }`}
                  >
                    {player.fouls[2] && player.fouls[2][0] ? (
                      player.fouls[2][0]
                    ) : (
                      <>
                        <span className="horizontal-line top-line w-[36px] "></span>
                        <span className="horizontal-line bottom-line w-[36px]"></span>
                      </>
                    )}
                  </h3>
                  <h3
                    className={`border-r-2 border-black text-center flex-1 relative font-bold ${
                      player.fouls[3][1] === "Q1" || player.fouls[3][1] === "Q3"
                        ? "text-[#FF0000]"
                        : "text-[#0000FF]"
                    }`}
                  >
                    {player.fouls[3] && player.fouls[3][0] ? (
                      player.fouls[3][0]
                    ) : (
                      <>
                        <span className="horizontal-line top-line w-[36px]"></span>
                        <span className="horizontal-line bottom-line w-[36px]"></span>
                      </>
                    )}
                  </h3>
                  <h3
                    className={` text-center flex-1 relative font-bold ${
                      player.fouls[4][1] === "Q1" || player.fouls[4][1] === "Q3"
                        ? "text-[#FF0000]"
                        : "text-[#0000FF]"
                    }`}
                  >
                    {player.fouls[4] && player.fouls[4][0] ? (
                      player.fouls[4][0]
                    ) : (
                      <>
                        <span className="horizontal-line top-line w-[36px]"></span>
                        <span className="horizontal-line bottom-line w-[36px]"></span>
                      </>
                    )}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col mt-8">
          <div className="flex">
            <div className=" flex border-2 border-black">
              <h2 className="border-r-2 border-black w-[150px]">Head Coach</h2>
              <h2 className="border-r-2 border-black w-[50px]">
                {coachDetails.headCoach.no}
              </h2>
              <h2 className="border-r-2 border-black w-[150px]">
                {coachDetails.headCoach.name}
              </h2>

              {coachDetails.headCoach.fouls[0] ? (
                <>
                  <span className="border-r-2 border-black w-6 h-6">
                    {coachDetails.headCoach.fouls[0]}
                  </span>
                </>
              ) : (
                <>
                  <div className="relative">
                    <span className=" w-6 h-6 flex items-center justify-center border-r-2 border-black"></span>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </div>
                </>
              )}

              {coachDetails.headCoach.fouls[1] ? (
                <>
                  <span className="border-r-2 border-black w-6 h-6">
                    {coachDetails.headCoach.fouls[1]}
                  </span>
                </>
              ) : (
                <>
                  <div className="relative">
                    <span className=" w-6 h-6 flex items-center justify-center border-r-2 border-black"></span>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </div>
                </>
              )}
              {coachDetails.headCoach.fouls[2] ? (
                <>
                  <span className="border-r-2 border-black w-6 h-6">
                    {coachDetails.headCoach.fouls[2]}
                  </span>
                </>
              ) : (
                <>
                  <div className="relative">
                    <span className=" w-6 h-6 flex items-center justify-center border-r-2 border-black"></span>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex">
            <div className=" flex border-2 border-black">
              <h2 className="border-r-2 border-black w-[150px]">
                First Assistant Coach
              </h2>
              <h2 className="border-r-2 border-black w-[50px]">
                {coachDetails.firstAssistantCoach.no}
              </h2>
              <h2 className="border-r-2 border-black w-[150px]">
                {coachDetails.firstAssistantCoach.name}
              </h2>

              {coachDetails.firstAssistantCoach.fouls[0] ? (
                <>
                  <span className="border-r-2 border-black w-6 h-6">
                    {coachDetails.firstAssistantCoach.fouls[0]}
                  </span>
                </>
              ) : (
                <>
                  <div className="relative">
                    <span className=" w-6 h-6 flex items-center justify-center border-r-2 border-black"></span>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </div>
                </>
              )}

              {coachDetails.firstAssistantCoach.fouls[1] ? (
                <>
                  <span className="border-r-2 border-black w-6 h-6">
                    {coachDetails.firstAssistantCoach.fouls[1]}
                  </span>
                </>
              ) : (
                <>
                  <div className="relative">
                    <span className=" w-6 h-6 flex items-center justify-center border-r-2 border-black"></span>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </div>
                </>
              )}
              {coachDetails.firstAssistantCoach.fouls[2] ? (
                <>
                  <span className="border-r-2 border-black w-6 h-6">
                    {coachDetails.firstAssistantCoach.fouls[2]}
                  </span>
                </>
              ) : (
                <>
                  <div className="relative">
                    <span className=" w-6 h-6 flex items-center justify-center border-r-2 border-black"></span>
                    <span className="horizontal-line top-line"></span>
                    <span className="horizontal-line bottom-line"></span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
