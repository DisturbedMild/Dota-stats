import heroAbilitiesData from "dotaconstants/build/hero_abilities.json"
import heroesData from "dotaconstants/build/heroes.json"

import {useMatch} from "@/common/context/match-context";
import formatHeroLocalizedName from "@/common/utils/formatHeroLocalizedName";
import getHero from "@/common/utils/getHero";
import AbilitiesTable from "@/components/match/tabs/overview/abilities-table/AbilitiesTable";
import MatchOverviewTeamPicks from "@/components/match/tabs/overview/team-table/MatchOverviewTeamPicks";
import MatchOverviewTeamTable from "@/components/match/tabs/overview/team-table/MatchOverviewTeamTable";
import {FullMatchInfoPlayer, Hero, HeroFacet} from "@/types/index";

type PickAndBans = {
  hero_id: number;
  is_pick: boolean;
  order: number;
  team: number;
}[];

interface HeroAbilities {
  abilities: string[]
  talents: {
    name: string
    level: number
  }[]
  facets: {
    color: string
    description: string
    gradient_id: number
    icon: string
    name: string
    title: string
  }[]
}

export interface PlayerInfo extends FullMatchInfoPlayer {
  hero: Hero,
  heroId: number
  facet: HeroFacet,
  heroName: string,
  playerItems: number[],
  backpackPlayerItems: number[]
}


const getChosenHeroFacet = (hero: Hero, heroAbilities: Record<string, HeroAbilities>, chosenFacet: number): HeroFacet | null => {
  for (const key in heroAbilities) {
    if (key === hero.name) {
      return heroAbilities[key].facets[chosenFacet - 1]
    }
  }
  return null
}

const filterPlayersByTeam = (players: PlayerInfo[]) => {
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

  const updatedPlayers = () => {
    const heroes: Record<string, Hero> = JSON.parse(JSON.stringify(heroesData));
    const heroAbilities: Record<string, HeroAbilities> = JSON.parse(JSON.stringify(heroAbilitiesData));

    return players.map((player) => {
      const heroId = player.hero_id;
      const hero = getHero(heroId, heroes);
      const heroName = hero ? formatHeroLocalizedName(hero.localized_name) : null
      const facet = hero ? getChosenHeroFacet(hero, heroAbilities, player.hero_variant) : null;
      const playerItems = [player.item_0, player.item_1, player.item_2, player.item_3, player.item_4, player.item_5];
      const backpackPlayerItems = [player.backpack_0, player.backpack_1, player.backpack_2];
      return {
        ...player,
        hero,
        heroName,
        facet,
        playerItems,
        backpackPlayerItems
      }
    })
  }

  //@ts-ignore
  const teams: { radiantTeam: PlayerInfo[], direTeam: PlayerInfo[] } = filterPlayersByTeam(updatedPlayers);
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
