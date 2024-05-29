import Players from "./components/Players";
import RunningScore from "./components/RunningScore";
import ScoresheetHeader from "./components/ScoresheetHeader";
import Signatures from "./components/Signatures";
import TeamStats from "./components/TeamStats";

export default function App() {
  const playerDetails = [
    {
      license_no: 250,
      player: "Mayer F",
      no: 0,
      playerIn: true,
      fouls: ["P3", "P2", "P1", "P", "P"],
    },
    {
      license_no: 251,
      player: "Manos J",
      no: 1,
      playerIn: true,
      fouls: ["P3", "P2", "P1", "P", "P"],
    },
    {
      license_no: 252,
      player: "Jones M",
      no: 2,
      playerIn: true,
      fouls: ["P3", "P2", "P1", "P", "P"],
    },
    {
      license_no: 253,
      player: "Kent Q",
      no: 3,
      playerIn: true,
      fouls: ["P3", "P2", "P1", "P", "P"],
    },
    {
      license_no: 254,
      player: "Martinez C",
      no: 4,
      playerIn: true,
      fouls: ["P3", "P2", "P1", "P", "P"],
    },
    {
      license_no: 255,
      player: "Lopez J(CAP)",
      no: 5,
      playerIn: true,
      fouls: ["P3", "P2", "P1", "P", "P"],
    },
    {
      license_no: 256,
      player: "HEMEL D",
      no: 6,
      playerIn: true,
      fouls: ["P3", "P2", "P1", "P", "P"],
    },
    {
      license_no: 257,
      player: "Smith A",
      no: 7,
      playerIn: true,
      fouls: ["P3", "P2", "P1", "P", "P"],
    },
    {
      license_no: 258,
      player: "Knight B",
      no: 8,
      playerIn: true,
      fouls: ["P3", "P2", "P1", "P", "P"],
    },
    {
      license_no: 259,
      player: "Crisp G",
      no: 9,
      playerIn: false,
      fouls: ["P3", "P2", "P1", "P", "P"],
    },
    {
      license_no: 260,
      player: "Bush H",
      no: 10,
      playerIn: true,
      fouls: ["P3", "P2", "P1", "P", "P"],
    },
    {
      license_no: 261,
      player: "Richmond E",
      no: 11,
      playerIn: false,
      fouls: ["P3", "P2", "P1", "P", "P"],
    },
  ];

  return (
    <>
      <div className="pl-2 pr-2 ">
        <ScoresheetHeader />
        <div className="flex">
          <div>
            <TeamStats team="A" teamName="BC MIES" />
            <Players playerDetails={playerDetails} />
            <TeamStats team="B" teamName="CAT BASKET" />
            <Players playerDetails={playerDetails} />
            <Signatures />
          </div>
          <RunningScore />
        </div>
      </div>
    </>
  );
}
