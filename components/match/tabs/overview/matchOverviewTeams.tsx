import {useMatch} from "@/common/context/match-context";
import {FullMatchInfoPlayer} from "@/common/types";
import MatchOverviewTeam from "@/components/match/tabs/overview/matchOverviewTeam";

const filterPlayersByTeam = (players: FullMatchInfoPlayer[]) => {
  const radiantTeam = players.filter((player) => player.isRadiant)
  const direTeam = players.filter((player) => !player.isRadiant)

  return { radiantTeam, direTeam }
}

const MatchOverviewTeams = () => {
  const { players } = useMatch();

  const teams: {radiantTeam: FullMatchInfoPlayer[], direTeam: FullMatchInfoPlayer[]} = filterPlayersByTeam(players);
  return <div>
    <div><span></span></div>
    <div>
      <table className="w-full border border-main/40 rounded">
        <thead className="px-6 py-2 text-white uppercase bg-gradient-to-r from-secondary to-teal">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-tl-lg">Player</th>
            <th scope="col" className="px-6 py-3">LVL</th>
            <th scope="col" className="px-6 py-3">K</th>
            <th scope="col" className="px-6 py-3">D</th>
            <th scope="col" className="px-6 py-3">A</th>
            <th scope="col" className="px-6 py-3">LH/DN</th>
            <th scope="col" className="px-6 py-3">NET</th>
            <th scope="col" className="px-6 py-3">GPM/XPM</th>
            <th scope="col" className="px-6 py-3">HD</th>
            <th scope="col" className="px-6 py-3">TD</th>
            <th scope="col" className="px-6 py-3">HH</th>
            <th scope="col" className="px-6 py-3">ITEMS</th>
            <th scope="col" className="px-6 py-3 rounded-tr-lg">BUFFS</th>
          </tr>
        </thead>
        <tbody>
          <MatchOverviewTeam team={teams.radiantTeam} />
        </tbody>
      </table>
    </div>
    <div>
      <table className="w-full border border-main/40 rounded">
        <thead className="px-6 py-2 text-white uppercase bg-gradient-to-r from-secondary to-teal">
        <tr>
          <th scope="col" className="px-6 py-3 rounded-tl-lg">Player</th>
          <th scope="col" className="px-6 py-3">LVL</th>
          <th scope="col" className="px-6 py-3">K</th>
          <th scope="col" className="px-6 py-3">D</th>
          <th scope="col" className="px-6 py-3">A</th>
          <th scope="col" className="px-6 py-3">LH/DN</th>
          <th scope="col" className="px-6 py-3">NET</th>
          <th scope="col" className="px-6 py-3">GPM/XPM</th>
          <th scope="col" className="px-6 py-3">HD</th>
          <th scope="col" className="px-6 py-3">TD</th>
          <th scope="col" className="px-6 py-3">HH</th>
          <th scope="col" className="px-6 py-3">ITEMS</th>
          <th scope="col" className="px-6 py-3 rounded-tr-lg">BUFFS</th>
        </tr>
        </thead>
        <tbody>
        <MatchOverviewTeam team={teams.direTeam} />
        </tbody>
      </table>
    </div>
  </div>
}

export default MatchOverviewTeams;
