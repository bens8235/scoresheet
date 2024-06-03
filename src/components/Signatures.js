export default function Signatures({ signatures }) {
  return (
    <>
      <div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex">
            <label className="font-bold w-[160px]">Scorer</label>
            <div className="flex flex-col">
              <span className="ml-2 text-[#0000FF] font-bold">
                {signatures.scorer}
              </span>
              <div className="w-[400px] h-0.5 bg-black"></div>
            </div>
          </div>
          <div className="flex">
            <label className="font-bold w-[160px]">Assistant Scorer</label>
            <div className="flex flex-col">
              <span className="ml-2 text-[#0000FF] font-bold">
                {signatures.assistantScorer}
              </span>
              <div className="w-[400px] h-0.5 bg-black"></div>
            </div>
          </div>
          <div className="flex">
            <label className="font-bold w-[160px]">Timer</label>
            <div className="flex flex-col">
              <span className="ml-2 text-[#0000FF] font-bold">
                {signatures.timer}
              </span>
              <div className="w-[400px] h-0.5 bg-black"></div>
            </div>
          </div>
          <div className="flex">
            <label className="font-bold w-[160px] ">Shot Clock Operator</label>
            <div className="flex flex-col">
              <span className="ml-2 text-[#0000FF] font-bold">
                {signatures.shotClockOperator}
              </span>
              <div className="w-[400px] h-0.5 bg-black"></div>
            </div>
          </div>
          <div className="w-[560px] h-0.5 bg-black"></div>
          <div className="flex">
            <label className="font-bold w-[100px] ">Crew Chief</label>
            <div className="flex flex-col">
              <span className="ml-2 text-[#0000FF] font-bold">Signature</span>
              <div className="w-[400px] h-0.5 bg-black"></div>
            </div>
          </div>
          <div className="flex">
            <label className="font-bold w-[100px] ">Umpire 1</label>
            <div className="flex flex-col">
              <span className="ml-2 text-[#0000FF] font-bold">Signature</span>
              <div className="w-[150px] h-0.5 bg-black"></div>
            </div>
            <label className="font-bold w-[100px] ">Umpire 2</label>
            <div className="flex flex-col">
              <span className="ml-2 text-[#0000FF] font-bold">Signature</span>
              <div className="w-[150px] h-0.5 bg-black"></div>
            </div>
          </div>
          <div className="flex">
            <label className="font-bold w-[200px] ">
              Captain's Signature in Case of Protest
            </label>
            <div className="flex flex-col">
              <span className="ml-2 text-[#0000FF] font-bold">Signature</span>
              <div className="w-[300px] h-0.5 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
