"use client";

import {useEffect, useState} from "react";
import {useQueries, useQuery} from "@tanstack/react-query";
import Image from "next/image";

import {fetchData} from "@/common/utils/fetchData";
import Abilities from "@/components/hero/abilities/Abilities";
import Attributes from "@/components/hero/abilities/Attributes";
import HeroProfilePortrait from "@/components/hero/profile/HeroProfilePortrait";
import HeroShortDescription from "@/components/hero/profile/HeroShortDescription";
import {Ability, HeroAbilitiesNames, HeroKeys, HeroStats, Talent} from "@/types/index";

interface HeroProfileProps {
  currentHero: HeroStats,
}

const abilitiesUrls = [
  {
    key: 'heroAbilities',
    url: "https://api.opendota.com/api/constants/hero_abilities"
  },
  {
    key: 'abilities',
    url: "https://api.opendota.com/api/constants/abilities"
  }
]

const findHeroByKey = (data: any, keyName: string) => {
  let res;
  for (const key in data) {
    if (key === keyName) res = data[key]
  }
  return res
}

const updateHeroTalentsArray = (talents: { name: string, level: string }[], data: any) => {
  const newTalentsArray: Talent[] = [];

  talents.forEach(({name, level}: { name: string, level: string }) => {
    const talentDesc = data[name].dname;
    const newTalent = {
      desc: talentDesc,
      level: Number(level),
    }
    newTalentsArray.push(newTalent);
  })

  return newTalentsArray;
}

const updateHeroAbilities = (abilities: string[], data: any) => {
  if (!data) return [];
  const newAbilitiesArray: Ability[] = [];
  abilities.forEach((ability) => {
    newAbilitiesArray.push(findHeroByKey(data, ability));
  })

  return newAbilitiesArray.filter((ability) => ability.dname !== "");
}

const HeroProfile = ({currentHero}: HeroProfileProps) => {
  const [currentHeroAbilities, setCurrentHeroAbilities] = useState<Ability[] | []>([]);
  const [currentHeroTalents, setCurrentHeroTalents] = useState<Talent[] | []>([]);

  const [heroAbilities, abilities] = useQueries({
    queries: abilitiesUrls.map(({key, url}) => {
      return {
        queryKey: [key],
        queryFn: async () => fetchData(url)
      }
    }),
  })

  const {isLoading: isHeroAbilitiesLoading, data: heroAbilitiesData, error: errorHeroAbilities} = heroAbilities;
  const {isLoading: isAbilitiesLoading, data: abilitiesData, error: errorAbilities} = abilities;

  const getUpdatedHeroTalents = () => {
    if (!heroAbilitiesData || !abilitiesData || !currentHero) return heroAbilitiesData;
    const hero = findHeroByKey(heroAbilitiesData, currentHero.name)
    const currentHeroTalents = hero.talents;
    const updatedHeroTalents = updateHeroTalentsArray(currentHeroTalents, abilitiesData);
    setCurrentHeroTalents(updatedHeroTalents);
  }

  const getUpdatedHeroAbilities = () => {
    if (!heroAbilities || !abilities || !currentHero) return heroAbilitiesData;
    const hero = findHeroByKey(heroAbilitiesData, currentHero.name)
    if (!hero || !abilitiesData) return heroAbilitiesData
    const updatedHeroAbilities = updateHeroAbilities(hero.abilities, abilitiesData);
    setCurrentHeroAbilities(updatedHeroAbilities);
  }

  useEffect(() => {
    getUpdatedHeroAbilities();
    getUpdatedHeroTalents();
  }, [heroAbilitiesData, abilitiesData]);

  if (isHeroAbilitiesLoading) return <p>Loading....</p>

  return (
    <div className="relative w-full rounded-lg bg-black/90">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          className="absolute opacity-35 bg-no-repeat blur-xl object-cover w-[125%] h-[125%]"
          src={`/heroes/${currentHero.localized_name
            ?.replaceAll(" ", "_")
            .toLocaleLowerCase()}.png`} alt="Backround hero image" width={256} height={144}/>
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
                  heroName={currentHero.localized_name}
                  talents={currentHeroTalents}
                  currentHeroAbilitiesInfo={currentHeroAbilities}/>
          }
        </div>
      </div>
    </div>
  )
}

export default HeroProfile;
