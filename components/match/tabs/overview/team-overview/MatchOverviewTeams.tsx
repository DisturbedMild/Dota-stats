import {useMatch} from "@/common/context/match-context";
import AbilitiesTable from "@/components/match/tabs/overview/abilities-table/AbilitiesTable";
import MatchOverviewTeamPicks from "@/components/match/tabs/overview/team-overview/MatchOverviewTeamPicks";
import MatchOverviewTeamTable from "@/components/match/tabs/overview/team-overview/matchOverviewTeamTable";
import {FullMatchInfoPlayer} from "@/types/index";

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
  const {picks_bans, players, dire_name, radiant_name} = useMatch();

  const teams: { radiantTeam: FullMatchInfoPlayer[], direTeam: FullMatchInfoPlayer[] } = filterPlayersByTeam(players);
  const {
    radiantPicks,
    direPicks
  }: { radiantPicks: PickAndBans, direPicks: PickAndBans } = filterPickAndBansByTeam(picks_bans);
  return (
    <div>
      <div className="mb-2"><span className="text-green">{radiant_name}</span>&nbsp;- Overview</div>
      <MatchOverviewTeamTable team={teams.radiantTeam}/>
      <MatchOverviewTeamPicks picks={radiantPicks}/>
      <div className="mb-2"><span className="text-error">{dire_name}</span>&nbsp;- Overview</div>
      <MatchOverviewTeamTable team={teams.direTeam}/>
      <MatchOverviewTeamPicks picks={direPicks}/>
      <div className="mb-2"><span className="text-error">{radiant_name}</span>&nbsp;- Abilities Overview</div>
      <AbilitiesTable team={teams.radiantTeam}/>
      <div className="mb-2"><span className="text-error">{dire_name}</span>&nbsp;- Abilities Overview</div>
      <AbilitiesTable team={teams.direTeam}/>
    </div>
  )
}

export default MatchOverviewTeams;
