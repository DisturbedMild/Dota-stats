"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import {useParams} from "next/navigation";

import Abilities from "@/components/hero/abilities/Abilities";
import Attributes from "@/components/hero/abilities/Attributes";
import HeroProfilePortrait from "@/components/hero/profile/HeroProfilePortrait";
import HeroShortDescription from "@/components/hero/profile/HeroShortDescription";
import {API} from "@/services/api";
import {Ability, HeroAbilitiesNames, HeroKeys, HeroStats, Talent} from "@/types/index";

interface HeroProfileProps {
  currentHero: HeroStats,
}

const HeroProfile = ({ currentHero }: HeroProfileProps) => {
  const {heroId}: { heroId: string } = useParams();
  const [abilities, setAbilities] = useState<Record<string, Ability> | null>(null);
  const [heroAbilities, setHeroAbilities] = useState<Record<HeroKeys, HeroAbilitiesNames> | null>(null);
  const [currentHeroAbilities, setCurrentHeroAbilities] = useState<Ability[] | []>([]);
  const [currentHeroTalents, setCurrentHeroTalents] = useState<Talent[] | []>([]);


  const getUpdatedHeroTalents = () => {
    if (!heroAbilities || !abilities || !currentHero) return [];

    const currentHeroTalents = heroAbilities[currentHero.name].talents;
    const newTalentsArray: Talent[] = [];

    currentHeroTalents.forEach(({name, level}) => {
      const talentDesc = abilities[name].dname;
      const newTalent = {
        desc: talentDesc,
        level: Number(level),
      }
      newTalentsArray.push(newTalent);
    })
    setCurrentHeroTalents(newTalentsArray);
  }

  const getUpdatedHeroAbilities = () => {
    if (!heroAbilities || !abilities || !currentHero) return [];

    const currentHeroAbilities = heroAbilities[currentHero.name].abilities;
    const newAbilitiesArray: Ability[] = [];

    currentHeroAbilities.forEach((ability) => {
      if (abilities[ability].dname) {
        newAbilitiesArray.push(abilities[ability]);
      }
    })
    setCurrentHeroAbilities(newAbilitiesArray);
  }

  useEffect(() => {
    getUpdatedHeroAbilities();
    getUpdatedHeroTalents();
  }, [heroAbilities, abilities, currentHero]);

  useEffect(() => {
    API.constants
      .getConstants("hero_abilities")
      .then((data) => setHeroAbilities(data))
      .catch(() => {
      });
  }, []);

  useEffect(() => {
    API.constants
      .getConstants("abilities")
      .then((data) => setAbilities(data))
      .catch(() => {
      });
  }, []);

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
          {currentHeroAbilities.length > 0 && <Abilities heroName={currentHero.localized_name} talents={currentHeroTalents} currentHeroAbilitiesInfo={currentHeroAbilities}/>}
        </div>
      </div>
    </div>
  )
}

export default HeroProfile;
