import {useMatch} from "@/common/context/match-context";
import {FullMatchInfoPlayer} from "@/common/types";
import MatchOverviewTeamPicks from "@/components/match/tabs/overview/MatchOverviewTeamPicks";
import MatchOverviewTeamTable from "@/components/match/tabs/overview/matchOverviewTeamTable";

type PickAndBans = {
  hero_id: number;
  is_pick: boolean;
  order: number;
  team: number;
}[];

const filterPlayersByTeam = (players: FullMatchInfoPlayer[]) => {
  const radiantTeam = players.filter((player) => player.isRadiant)
  const direTeam = players.filter((player) => !player.isRadiant)

  return {radiantTeam, direTeam}
}

const filterPickAndBansByTeam = (picks_bans: PickAndBans) => {
  const radiantPicks = picks_bans.filter((round) => round.team === 0);
  const direPicks = picks_bans.filter((round) => round.team === 1);

  return {radiantPicks, direPicks}
}

const MatchOverviewTeams = () => {
  const {picks_bans, players} = useMatch();

  const teams: { radiantTeam: FullMatchInfoPlayer[], direTeam: FullMatchInfoPlayer[] } = filterPlayersByTeam(players);
  const {
    radiantPicks,
    direPicks
  }: { radiantPicks: PickAndBans, direPicks: PickAndBans } = filterPickAndBansByTeam(picks_bans);

  return <div>
    <div className="mb-2"><span className="text-green">Radiant </span>- Overview</div>
    <MatchOverviewTeamTable team={teams.radiantTeam}/>
    <MatchOverviewTeamPicks picks={radiantPicks}/>
    <div className="mb-2"><span className="text-error">Dire </span>- Overview</div>
    <MatchOverviewTeamTable team={teams.direTeam}/>
    <MatchOverviewTeamPicks picks={direPicks}/>
  </div>
}

export default MatchOverviewTeams;
