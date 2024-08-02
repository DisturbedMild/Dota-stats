import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import * as heroAbilitiesData from "dotaconstants/build/hero_abilities.json"
import * as heroesData from "dotaconstants/build/heroes.json"
import Link from "next/link";

import {FullMatchInfoPlayer, Hero, HeroFacet} from "@/common/types";
import PlayerHeroFacet from "@/components/match/tabs/overview/playerHeroFacet";

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



const getHero = (heroId: number, heroes: Record<string, Hero>): Hero | null => {
  for (const key in heroes) {
    if (key === heroId.toString()) {
      return heroes[key]
    }
  }
  return null
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
  const heroes: Record<string, Hero> = heroesData;
  const heroAbilities: Record<string, HeroAbilities> = heroAbilitiesData;

  return (
    <>
      {team.map((player: FullMatchInfoPlayer) => {
        const heroId = player.hero_id;
        const hero = getHero(heroId, heroes);
        const heroName = hero !== null ? formatHeroLocalizedName(hero.localized_name) : null;
        const facet = hero !== null ? getChosenHeroFacet(hero, heroAbilities, player.hero_variant) : null;
        return (
          <tr key={player.account_id} className="h-16 border border-secondary hover:bg-neutral-500/20">
            <td className="text-center flex gap-4 items-center pl-4 h-16">
              {facet !== null && heroName !== null ? <PlayerHeroFacet facet={facet} heroName={heroName}/> : null}
              <div className="flex flex-col text-xls text-left">
                <Link href={"/players/player.account_id"}
                      className="flex items-center text-xls text-light-blue truncate transition-all hover:text-cyan-500"><span>{player?.name}</span>
                  <ArrowRightIcon style={{width: "20px", height: "20px"}}/></Link>
                <span className="text-xls text-neutral-500">{player.rank_tier === 80 ? "Immortal" : ""}</span>
              </div>
            </td>
            <td className="text-center w-[40px] text-xls">
              <span className="p-2 border-2  border-transparent rounded-full">{player.level}</span>
            </td>
            <td className="text-center w-[40px] text-xls text-purple">{player.kills}</td>
            <td className="text-center w-[40px] text-xls text-error">{player.deaths}</td>
            <td className="text-center w-[40px] text-xls text-neutral-500">{player.assists}</td>
            <td className="text-center w-[80px] text-xls">{player.last_hits}/{player.denies}</td>
            <td className="text-center w-[40px] text-xls text-amber-400">{player.net_worth}</td>
            <td className="text-center w-[80px] text-xls">{player.gold_per_min}/{player.xp_per_min}</td>
            <td className="text-center w-[40px] text-xls">{player.hero_damage}</td>
            <td className="text-center w-[40px] text-xls">{player.tower_damage}</td>
            <td className="text-center w-[40px] text-xls">{player.hero_healing}</td>
            <td className="w-[270px]">Items</td>
            {/* Neutral Item*/}
            <th scope="col" className="px-6 py-3"></th>
            {/* Aghanim/Shard */}
            <th scope="col" className="px-6 py-3"></th>
            <td>Buffs</td>
          </tr>)
      })
      }
    </>
  )
}

export default MatchOverviewTeam;
