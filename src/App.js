import ScoresheetHeader from "./components/ScoresheetHeader";
import TeamStats from "./components/TeamStats";

export default function App() {
  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow-md w-11/12 max-w-6xl mx-auto">
        <ScoresheetHeader />
        <TeamStats />
      </div>
    </>
  );
}
