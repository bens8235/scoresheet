import GameDetails from "./components/GameDetails";
import Players from "./components/Players";
import RunningScore from "./components/RunningScore";
import Scores from "./components/Scores";
import ScoresheetHeader from "./components/ScoresheetHeader";
import Signatures from "./components/Signatures";
import TeamStats from "./components/TeamStats";

export default function App() {
  // Team 1 player Details
  const playerDetails = [
    {
      license_no: 250,
      player: "Mayer F",
      no: 0,
      playerIn: [true, true],
      playerStart: true,
      fouls: [["P3", "Q1"], ["P", "Q2"], ["P", "Q3"], false, false],
    },
    {
      license_no: 252,
      player: "Manos J Jr",
      no: 3,
      playerIn: [true, true],
      playerStart: true,
      fouls: [["P", "Q4"], ["P", "Q3"], false, false, false],
    },
    {
      license_no: 253,
      player: "Jones M",
      no: 4,
      playerIn: [true, "Q1"],
      playerStart: false,
      fouls: [false, false, false, false, false],
    },
    {
      license_no: 254,
      player: "Kent Q",
      no: 5,
      playerIn: [true, "Q2"],
      playerStart: false,
      fouls: [false, false, false, false, false],
    },
    {
      license_no: 255,
      player: "Martinez C",
      no: 6,
      playerIn: [true, "Q2"],
      playerStart: false,
      fouls: [["P1", "Q3"], false, false, false, false],
    },
    {
      license_no: 256,
      player: "Lopez J (CAP)",
      no: 7,
      playerIn: [true, true],
      playerStart: true,
      fouls: [["P1", "Q2"], ["P", "Q4"], false, false, false],
    },
    {
      license_no: 257,
      player: "HEMEL D",
      no: 8,
      playerIn: [false, false],
      playerStart: false,
      fouls: [false, false, false, false, false],
    },
    {
      license_no: 265,
      player: "Obradovic C",
      no: 9,
      playerIn: [false, false],
      playerStart: false,
      fouls: [false, false, false, false, false],
    },
    {
      license_no: 266,
      player: "Aguilar V",
      no: 19,
      playerIn: [false, false],
      playerStart: false,
      fouls: [false, false, false, false, false],
    },
    {
      license_no: 268,
      player: "Rimkus T",
      no: 12,
      playerIn: [true, "Q4"],
      playerStart: false,
      fouls: [false, false, false, false, false],
    },
    {
      license_no: 300,
      player: "Perotti R",
      no: 15,
      playerIn: [true, true],
      playerStart: true,
      fouls: [["P1", "Q1"], ["P2", "Q2"], ["P", "Q2"], ["P2", "Q4"], false],
    },
    {
      license_no: 301,
      player: "Vidot A",
      no: 20,
      playerIn: [true, true],
      playerStart: true,
      fouls: [["P2", "Q1"], ["P2", "Q1"], ["P", "Q2"], false, false],
    },
  ];

  const playerDetails2 = [
    {
      license_no: 500,
      player: "Radonjic G",
      no: 4,
      playerIn: [true, true],
      playerStart: true,
      fouls: [["P1", "Q1"], ["P", "Q3"], false, false, false],
    },
    {
      license_no: 501,
      player: "Mantila P",
      no: 5,
      playerIn: [false, false],
      playerStart: false,
      fouls: [false, false, false, false, false],
    },
    {
      license_no: 502,
      player: "Tanabe V",
      no: 6,
      playerIn: [true, true],
      playerStart: true,
      fouls: [["P", "Q2"], false, false, false, false],
    },
    {
      license_no: 503,
      player: "Puig J",
      no: 7,
      playerIn: [false, false],
      playerStart: false,
      fouls: [false, false, false, false, false],
    },
    {
      license_no: 505,
      player: "Thron H",
      no: 8,
      playerIn: [true, "Q3"],
      playerStart: false,
      fouls: [["P2", "Q4"], false, false, false, false],
    },
    {
      license_no: 506,
      player: "Mitlech J",
      no: 9,
      playerIn: [true, true],
      playerStart: true,
      fouls: [["P2", "Q1"], ["P", "Q3"], ["P1", "Q4"], false, false],
    },
    {
      license_no: 700,
      player: "Marti C",
      no: 10,
      playerIn: [false, false],
      playerStart: false,
      fouls: [false, false, false, false, false],
    },
    {
      license_no: 750,
      player: "Manjour R (CAP)",
      no: 11,
      playerIn: [true, true],
      playerStart: true,
      fouls: [["P", "Q1"], ["P2", "Q3"], ["P3", "Q4"], ["P2", "Q4"], false],
    },
    {
      license_no: 751,
      player: "Toteva I",
      no: 12,
      playerIn: [true, "Q2"],
      playerStart: false,
      fouls: [false, false, false, false, false],
    },
    {
      license_no: 766,
      player: "Lee A",
      no: 13,
      playerIn: [true, "Q2"],
      playerStart: false,
      fouls: [["P2", "Q1"], ["P2", "Q3"], false, false, false],
    },
    {
      license_no: 800,
      player: "Kem B",
      no: 14,
      playerIn: [true, true],
      playerStart: true,
      fouls: [["P", "Q1"], ["P", "Q2"], false, false, false],
    },
    {
      license_no: false,
      player: false,
      no: false,
      playerIn: [false, false],
      playerStart: false,
      fouls: [false, false, false, false, false],
    },
  ];

  //Team 1 Time-Outs & Team Fouls
  // When I next come back to this need to use this data in my component

  const team1Details = {
    timeOuts: [
      {
        H1: [
          [2, "Q2"],
          [8, "Q4"],
        ],
      },
      {
        H2: [
          [9, "Q3"],
          [10, "Q2"],
          [10, "Q4"],
        ],
      },
      {
        OT: [
          [false, false],
          [false, false],
          [false, false],
        ],
      },
    ],
    teamFouls: [
      { Q1: [true, true, true, false] },
      { Q2: [true, true, true, false] },
      { Q3: [true, true, true, true] },
      { Q4: [true, true, true, true] },
    ],
    HCC: ["Q3", 5],
  };

  const team2Details = {
    timeOuts: [
      {
        H1: [
          [5, "Q2"],
          [false, "Q2"],
        ],
      },
      {
        H2: [
          [5, "Q3"],
          [6, "Q2"],
          [10, "Q4"],
        ],
      },
      {
        OT: [
          [false, false],
          [false, false],
          [false, false],
        ],
      },
    ],
    teamFouls: [
      { Q1: [true, true, true, false] },
      { Q2: [true, false, false, false] },
      { Q3: [true, true, true, true] },
      { Q4: [true, true, true, true] },
    ],
    HCC: ["Q2", 8],
  };

  return (
    <>
      <div className="pl-2 pr-2 ">
        <ScoresheetHeader />
        <div className="border-2 border-black mt-4 mb-4">
          <GameDetails />
          <div className="flex justify-center w-full">
            <div className="w-1/2 border-r-2 border-black flex flex-col items-center">
              <TeamStats
                team="A"
                teamName="BC MIES"
                teamDetails={team1Details}
              />

              <Players playerDetails={playerDetails} />
              <TeamStats
                team="B"
                teamName="CAT BASKET"
                teamDetails={team2Details}
              />
              <Players playerDetails={playerDetails2} />
              <Signatures />
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <RunningScore />
              <Scores />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
