import {useMatch} from "@/common/context/match-context";
import {FullMatchInfoPlayer} from "@/common/types";
import MatchOverviewTeamTable from "@/components/match/tabs/overview/matchOverviewTeamTable";

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
    <MatchOverviewTeamTable team={teams.radiantTeam} />
    <div><span></span></div>
    <MatchOverviewTeamTable team={teams.direTeam} />
  </div>
}

export default MatchOverviewTeams;
