import ShortHeroDesc from "@/components/match/tabs/overview/facet/ShortHeroDesc";
import MatchOverviewTeamAghanim from "@/components/match/tabs/overview/team-table/MatchOverviewTeamAghanim";
import MatchOverviewTeamBuffs from "@/components/match/tabs/overview/team-table/MatchOverviewTeamBuffs";
import MatchOverviewTeamItems from "@/components/match/tabs/overview/team-table/MatchOverviewTeamItems";
import MatchOverviewTeamNeutralItem from "@/components/match/tabs/overview/team-table/MatchOverviewTeamNeutralItem";
import {PlayerInfo} from "@/components/match/tabs/overview/team-table/MatchOverviewTeams";

interface MatchOverviewTeamProps {
  team: PlayerInfo[]
}

const MatchOverviewTeam = ({team}: MatchOverviewTeamProps) => {
  return (
    <>
      {team.map((player: PlayerInfo) => {
        return (
          <tr key={player.account_id} className="h-16 border border-secondary hover:bg-neutral-500/20">
            <td className="w-[210px] h-20 text-center">
              {player.heroName ? (
                <ShortHeroDesc
                  heroName={player.heroName}
                  personaname={player.personaname}
                  facet={player.facet}
                  rank_tier={player.rank_tier}/>
              ) : null}
            </td>
            <td className="text-center h-20 w-[40px] text-xls">
              <span className="p-2 border-2  border-transparent rounded-full">{player.level}</span>
            </td>
            <td className="text-center h-20 w-[40px] text-xls text-green">{player.kills}</td>
            <td className="text-center h-20 w-[40px] text-xls text-error">{player.deaths}</td>
            <td className="text-center h-20 w-[40px] text-xls text-teal">{player.assists}</td>
            <td className="text-center h-20 w-[80px] text-xls">{player.last_hits}/{player.denies}</td>
            <td className="text-center h-20 w-[40px] text-xls text-amber-400">{player.net_worth}</td>
            <td className="text-center h-20 w-[80px] text-xls">{player.gold_per_min}/{player.xp_per_min}</td>
            <td className="text-center h-20 w-[40px] text-xls">{player.hero_damage}</td>
            <td className="text-center h-20 w-[40px] text-xls">{player.tower_damage}</td>
            <td className="text-center h-20 w-[40px] text-xls">{player.hero_healing}</td>
            <MatchOverviewTeamItems playerItems={player.playerItems} backpackPlayerItems={player.backpackPlayerItems}/>
            <MatchOverviewTeamNeutralItem neutralItem={player.item_neutral}/>
            <MatchOverviewTeamAghanim id={player.heroId} haveAghanim={player.aghanims_scepter}
                                      haveShard={player.aghanims_shard}/>
            <MatchOverviewTeamBuffs permanent_buffs={player.permanent_buffs}/>
          </tr>)
      })
      }
    </>
  )
}

export default MatchOverviewTeam;
