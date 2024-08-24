import abilitiesData from "dotaconstants/build/abilities.json";
import abilitiesIdsData from "dotaconstants/build/ability_ids.json";
import heroAbilitiesData from "dotaconstants/build/hero_abilities.json";
import heroesData from "dotaconstants/build/heroes.json";
import Image, {ImageLoaderProps} from "next/image";

import {Ability, FullMatchInfoPlayer, Hero, HeroFacet} from "@/common/types";
import ShortHeroDesc from "@/components/match/tabs/overview/facet/ShortHeroDesc";

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

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
}

const getHero = (heroId: number, heroes: Record<string, Hero>): Hero | undefined => {
  for (const key in heroes) {
    if (key === heroId.toString()) {
      return heroes[key]
    }
  }
  return
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

const getHeroAbilitiesUpgradeOrder = (upgradesOrder: number[]): Ability[] => {
  const abilitiesIds = JSON.parse(JSON.stringify(abilitiesIdsData));
  const abilities: Record<string, Ability> = JSON.parse(JSON.stringify(abilitiesData));
  const abilitiesNames = upgradesOrder.map((ability): string[] => {
    if (abilitiesIds[ability]) {
      return abilitiesIds[ability]
    }
    return
  });

  const filterAbilitiesByUpgradeOrder = abilitiesNames.map((name) => {
    if (abilities[name]) {
      return abilities[name]
    }
    return
  })
  if (filterAbilitiesByUpgradeOrder.length < 24) {
    for (let i = filterAbilitiesByUpgradeOrder.length; i <= 24; i++) {
      filterAbilitiesByUpgradeOrder.push(null)
    }
  }
  return filterAbilitiesByUpgradeOrder;
}

const AbilitiesTableBody = ({team}: { team: FullMatchInfoPlayer[] }) => {
  const heroes: Record<string, Hero> = JSON.parse(JSON.stringify(heroesData));
  const heroAbilities: Record<string, HeroAbilities> = JSON.parse(JSON.stringify(heroAbilitiesData));

  return (
    <tbody>
    {team.map((player) => {
      const heroId = player.hero_id;
      const hero = getHero(heroId, heroes);
      const heroName = hero ? formatHeroLocalizedName(hero.localized_name) : null;
      const facet = hero ? getChosenHeroFacet(hero, heroAbilities, player.hero_variant) : null;
      const heroAbilitiesUpgradeOrder = getHeroAbilitiesUpgradeOrder(player.ability_upgrades_arr);
      return (
        <tr key={`ability-${player.hero_id}`} className="h-16 border border-secondary hover:bg-neutral-500/20">
          <td scope="row" className="w-[180px]">
            {heroName && facet ? (
              <ShortHeroDesc heroName={heroName} facet={facet} personaname={player.personaname}
                             rank_tier={player.rank_tier}/>
            ) : null}
          </td>
          {heroAbilitiesUpgradeOrder.map((ability: Ability) => (
            <td key={Math.random() * 1000} className="w-10">
              {(ability && ability.img) ? (
                <Image src={ability.img} alt={ability.dname} loader={imageLoader} width={40} height={40}/>
              ) : (ability && !ability.img) ? (
                <Image
                  className="w-12 h-12 relative z-1 backdrop-blur-1 rounded"
                  src={"/icons/talent_tree.svg"}
                  alt="error"
                  width={48}
                  height={48}
                />
              ) : null}
            </td>
          ))}
        </tr>
      )
    })}
    </tbody>
  )
}

export default AbilitiesTableBody
