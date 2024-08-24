import heroAbilitiesData from "dotaconstants/build/hero_abilities.json"
import heroesData from "dotaconstants/build/heroes.json"

import ShortHeroDesc from "@/components/match/tabs/overview/facet/ShortHeroDesc";
import MatchOverviewTeamAghanim from "@/components/match/tabs/overview/team-overview/MatchOverviewTeamAghanim";
import MatchOverviewTeamBuffs from "@/components/match/tabs/overview/team-overview/MatchOverviewTeamBuffs";
import MatchOverviewTeamItems from "@/components/match/tabs/overview/team-overview/matchOverviewTeamItems";
import MatchOverviewTeamNeutralItem from "@/components/match/tabs/overview/team-overview/matchOverviewTeamNeutralItem";
import {FullMatchInfoPlayer, Hero, HeroFacet} from "@/types/index";

interface MatchOverviewTeamProps {
  team: FullMatchInfoPlayer[]
}

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

const getHero = (heroId: number, heroes: Record<string, Hero>): Hero => {
  for (const key in heroes) {
    if (key === heroId.toString()) {
      return heroes[key]
    }
  }
}

const formatHeroLocalizedName = (name: string): string => {
  return name.toLowerCase().replaceAll(" ", "_");
}

const getChosenHeroFacet = (hero: Hero, heroAbilities: Record<string, HeroAbilities>, chosenFacet: number): HeroFacet | null => {
  for (const key in heroAbilities) {
    if (key === hero.name) {
      return heroAbilities[key].facets[chosenFacet - 1]
    }
  }
  return null
}

const MatchOverviewTeam = ({team}: MatchOverviewTeamProps) => {
  const heroes: Record<string, Hero> = JSON.parse(JSON.stringify(heroesData));
  const heroAbilities: Record<string, HeroAbilities> = JSON.parse(JSON.stringify(heroAbilitiesData));

  return (
    <>
      {team.map((player: FullMatchInfoPlayer) => {
        const heroId = player.hero_id;
        const hero = getHero(heroId, heroes);
        const heroName = formatHeroLocalizedName(hero.localized_name)
        const facet = getChosenHeroFacet(hero, heroAbilities, player.hero_variant);
        const playerItems = [player.item_0, player.item_1, player.item_2, player.item_3, player.item_4, player.item_5];
        const backpackPlayerItems = [player.backpack_0, player.backpack_1, player.backpack_2];

        return (
          <tr key={player.account_id} className="h-16 border border-secondary hover:bg-neutral-500/20">
            <td className="w-[290px] h-20 text-center">
              <ShortHeroDesc heroName={heroName} personaname={player.personaname} facet={facet}
                             rank_tier={player.rank_tier}/>
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
            <MatchOverviewTeamItems playerItems={playerItems} backpackPlayerItems={backpackPlayerItems}/>
            <MatchOverviewTeamNeutralItem neutralItem={player.item_neutral}/>
            <MatchOverviewTeamAghanim id={heroId} haveAghanim={player.aghanims_scepter}
                                      haveShard={player.aghanims_shard}/>
            <MatchOverviewTeamBuffs permanent_buffs={player.permanent_buffs}/>
          </tr>)
      })
      }
    </>
  )
}

export default MatchOverviewTeam;
