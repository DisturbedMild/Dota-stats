"use client";

import {useCallback, useEffect, useState} from "react";
import Image from "next/image";

import {useReactQueryRequest} from "@/common/hooks/useReactQueryRequest";
import Abilities from "@/components/hero/abilities/Abilities";
import Attributes from "@/components/hero/abilities/Attributes";
import HeroProfilePortrait from "@/components/hero/profile/HeroProfilePortrait";
import HeroShortDescription from "@/components/hero/profile/HeroShortDescription";
import {Ability, HeroStats, Talent} from "@/types/index";

interface HeroProfileProps {
  currentHero: HeroStats,
}

const findHeroByKey = (data: Ability[], keyName: string) => {
  if (!data) return null
  let res;
  for (const key in data) {
    if (key === keyName) res = data[key]
    return res
  }
}

interface Talents { name: string, level: string }

const updateHeroTalentsArray = (talents: Talents[], data: Ability[]) => {
  const newTalentsArray: Talent[] = [];

  talents.forEach(({name, level}: { name: string, level: string }) => {
    // @ts-expect-error: Unreachable code error
    const talentDesc: string = data[name].dname;
    const newTalent = {
      desc: talentDesc,
      level: Number(level),
    }
    newTalentsArray.push(newTalent);
  })

  return newTalentsArray;
}

const updateHeroAbilities = (abilities: string[], data: Ability[]) => {
  if (!data) return [];
  const newAbilitiesArray: Ability[] = [];
  abilities.forEach((ability) => {
    const newAbility = findHeroByKey(data, ability);
    if (newAbility) newAbilitiesArray.push();
  })

  return newAbilitiesArray.filter((ability) => ability.dname !== "");
}

const HeroProfile = ({currentHero}: HeroProfileProps) => {
  const [currentHeroAbilities, setCurrentHeroAbilities] = useState<Ability[] | []>([]);
  const [currentHeroTalents, setCurrentHeroTalents] = useState<Talent[] | []>([]);

  const {isLoading: isHeroAbilitiesLoading, data: heroAbilitiesData} =
    useReactQueryRequest("heroAbilities", "https://api.opendota.com/api/constants/hero_abilities");

  const {data: abilitiesData} = useReactQueryRequest("abilities", "https://api.opendota.com/api/constants/abilities");

  const getUpdatedHeroTalents = useCallback(() => {
    if (!heroAbilitiesData || !abilitiesData || !currentHero) return heroAbilitiesData;
    const hero = findHeroByKey(heroAbilitiesData, currentHero.name)
    const currentHeroTalents = hero?.talents;
    if (currentHeroTalents){
      const updatedHeroTalents = updateHeroTalentsArray(currentHeroTalents, abilitiesData);
      setCurrentHeroTalents(updatedHeroTalents);
    }
  }, [heroAbilitiesData, abilitiesData, currentHero])

  const getUpdatedHeroAbilities = useCallback(() => {
    if (!heroAbilitiesData || !abilitiesData || !currentHero) return heroAbilitiesData;
    const hero = findHeroByKey(heroAbilitiesData, currentHero.name)
    if (!hero || !abilitiesData) return heroAbilitiesData
    // @ts-expect-error: Unreachable code error
    const updatedHeroAbilities = updateHeroAbilities(hero.abilities, abilitiesData);
    setCurrentHeroAbilities(updatedHeroAbilities);
  }, [heroAbilitiesData, abilitiesData, currentHero])

  useEffect(() => {
    getUpdatedHeroAbilities();
    getUpdatedHeroTalents();
  }, [getUpdatedHeroTalents,getUpdatedHeroAbilities]);

  if (isHeroAbilitiesLoading) return <p>Loading....</p>

  return (
    <div className="relative w-full rounded-lg bg-black/90">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          className="absolute opacity-35 bg-no-repeat blur-xl object-cover w-[125%] h-[125%]"
          src={`/heroes/${currentHero.localized_name
            ?.replaceAll(" ", "_")
            .toLocaleLowerCase()}.png`} alt="Background hero image" width={256} height={144}/>
      </div>
      <div className="flex items-start px-10 py-14 relative z-10 gap-5">
        <div className="w-2/12">
          <HeroProfilePortrait hero={currentHero.localized_name} name={currentHero.localized_name}/>
        </div>
        <HeroShortDescription currentHero={currentHero}/>
        <div className="flex flex-col gap-4 w-6/12">
          <Attributes currentHero={currentHero}/>
          {isHeroAbilitiesLoading && <p>Loading....</p>}
          {currentHeroAbilities.length > 0 &&
              <Abilities
                  talents={currentHeroTalents}
                  currentHeroAbilitiesInfo={currentHeroAbilities}/>
          }
        </div>
      </div>
    </div>
  )
}

export default HeroProfile;
