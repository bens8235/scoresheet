import "./TeamStats.css";

export default function TeamStats() {
  return (
    <>
      <div className="flex mt-4">
        <label className="font-bold">Team A:</label>
        <div className="flex flex-col">
          <span className="ml-2 text-blue-700 font-bold">B.C. MIES</span>
          <div className="w-[400px] h-0.5 bg-black"></div>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="flex flex-col gap-1 ">
          <h2 className="font-bold">Time-outs</h2>
          <div className="flex">
            <h3 className="mr-1">H1</h3>
            <span className="border border-black w-6 h-6 flex items-center justify-center">
              2
            </span>
            <span className="border border-black w-6 h-6 flex items-center justify-center">
              8
            </span>
          </div>
          <div className="flex">
            <h3 className="mr-1">H2</h3>
            <span className="border border-black w-6 h-6 flex items-center justify-center">
              9
            </span>
            <span className="border border-black w-6 h-6 flex items-center justify-center">
              10
            </span>
            <span className="border border-black w-6 h-6 flex items-center justify-center">
              10
            </span>
          </div>
          <div className="flex">
            <h3 className="mr-1">OT</h3>
            <div className="relative">
              <span className="border border-black w-6 h-6 flex items-center justify-center"></span>
              <span className="horizontal-line top-line"></span>
              <span className="horizontal-line bottom-line"></span>
            </div>
            <div className="relative">
              <span className="border border-black w-6 h-6 flex items-center justify-center"></span>
              <span className="horizontal-line top-line"></span>
              <span className="horizontal-line bottom-line"></span>
            </div>
            <div className="relative">
              <span className="border border-black w-6 h-6 flex items-center justify-center"></span>
              <span className="horizontal-line top-line"></span>
              <span className="horizontal-line bottom-line"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center ">
          <h2 className="font-bold text-center">Team Fouls</h2>
          <div className="flex flex-wrap w-1/2 gap-1">
            <div className="flex">
              <h3 className="mr-1">Q1</h3>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center z-10">
                  1
                </span>
                <div className="thin-cross"></div>
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  2
                </span>
                <div className="thin-cross"></div>
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  3
                </span>
                <div className="thin-cross"></div>
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  4
                </span>
                <span className="horizontal-line-red top-line"></span>
                <span className="horizontal-line-red bottom-line"></span>
              </div>
            </div>
            <div className="flex">
              <h3 className="mr-1">Q2</h3>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  1
                </span>
                <div className="thin-cross blue"></div>
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  2
                </span>
                <span className="horizontal-line top-line"></span>
                <span className="horizontal-line bottom-line"></span>
              </div>

              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  3
                </span>
                <span className="horizontal-line top-line"></span>
                <span className="horizontal-line bottom-line"></span>
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  4
                </span>
                <span className="horizontal-line top-line"></span>
                <span className="horizontal-line bottom-line"></span>
              </div>
            </div>
            <div className="flex">
              <h3 className="mr-1">Q3</h3>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  1
                </span>
                <div className="thin-cross"></div>
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  2
                </span>
                <div className="thin-cross"></div>
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  3
                </span>
                <div className="thin-cross"></div>
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  4
                </span>
                <div className="thin-cross"></div>
              </div>
            </div>
            <div className="flex">
              <h3 className="mr-1">Q4</h3>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  1
                </span>
                <div className="thin-cross blue"></div>
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  2
                </span>
                <div className="thin-cross blue"></div>
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  3
                </span>
                <div className="thin-cross blue"></div>
              </div>
              <div className="relative">
                <span className="border border-black w-6 h-6 flex items-center justify-center">
                  4
                </span>
                <div className="thin-cross blue"></div>
              </div>
            </div>
            <div className="flex">
              <h3 className="mr-1">HCC</h3>
              <span className="border border-black w-6 h-6 flex items-center justify-center">
                Q2
              </span>
              <span className="border border-black w-6 h-6 flex items-center justify-center">
                8
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
