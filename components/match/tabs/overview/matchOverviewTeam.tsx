import {useContext} from "react";
import heroAbilities from "dotaconstants/build/hero_abilities.json";
import Image, {ImageLoaderProps} from "next/image";

import {APIContext} from "@/common/context/api-context";
import {FullMatchInfoPlayer, Hero} from "@/common/types";

interface MatchOverviewTeamProps {
  team: FullMatchInfoPlayer[]
}

interface HeroFacet {
  color: string
  description: string
  gradient_id: number
  icon: string
  name: string
  title: string
}

const facetImageLoader = ({src}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/facets/${src}.png`
}

const getHero = (heroId: number, heroes: Hero[]): Hero | null => {
  if (!heroes) return null
  return heroes.find((hero) => hero.id === heroId);
}

const formatHeroLocalizedName = (name: string) => {
  return name.toLowerCase().replaceAll(" ", "_");
}

const getChosenHeroFacet = (hero, heroAbilities, chosenFacet): HeroFacet => {
  for (const key in heroAbilities) {
      if (key === hero.name) {
        return heroAbilities[key].facets[chosenFacet - 1]
      }
  }
}

const MatchOverviewTeam = ({team}: MatchOverviewTeamProps) => {
  const {heroes} = useContext(APIContext);

  return (
    <>
      {team.map((player: FullMatchInfoPlayer) => {
        const heroId = player.hero_id;
        const hero = heroes ? getHero(heroId, heroes) : null;
        const heroName = hero ? formatHeroLocalizedName(hero.localized_name) : null;
        const facet = getChosenHeroFacet(hero, heroAbilities, player.hero_variant);
        return <tr key={player.account_id} className="h-20 border border-secondary hover:bg-neutral-500/20">
          <td className="text-center flex gap-2 items-center pl-4 h-20">
            <Image src={`/heroes/${heroName}.png`} alt="Hero Icon" width={80} height={40}/>
            <Image src={facet.icon} alt="Facet Icon" loader={facetImageLoader} width={80} height={40}/>
            {player.name}
          </td>
          <td className="text-center">
            <span className="p-2 border-2 border-transparent rounded-full">{player.level}</span></td>
          <td className="text-center text-purple">{player.kills}</td>
          <td className="text-center text-error">{player.deaths}</td>
          <td className="text-center text-neutral-500">{player.assists}</td>
          <td className="text-center">{player.last_hits}/{player.denies}</td>
          <td className="text-center text-amber-400">{player.net_worth}</td>
          <td className="text-center">{player.gold_per_min}/{player.xp_per_min}</td>
          <td className="text-center">{player.hero_damage}</td>
          <td className="text-center">{player.tower_damage}</td>
          <td className="text-center">{player.hero_healing}</td>
          <td></td>
          <td></td>
        </tr>
      })
      }
    </>
  )
}

export default MatchOverviewTeam;
