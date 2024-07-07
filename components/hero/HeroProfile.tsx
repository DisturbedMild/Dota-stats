"use client";

import Image from "next/image";
import {useEffect, useState} from "react";
import {HeroKey, IAbility, IHeroAbilities, IHeroStats, ITalent} from "@/services/api/endpoints/types";
import {useParams} from "next/navigation";
import {API} from "@/services/api";
import Abilities from "@components/hero/abilities/Abilities";
import Attributes from "@components/hero/abilities/Attributes";
import HeroShortDescription from "@components/hero/HeroShortDescription";

type HeroProfileProps = {
  currentHero: IHeroStats | undefined,
}

const HeroProfile = ({ currentHero }: HeroProfileProps) => {
  const {hero}: { hero: string } = useParams();
  const [abilitiesData, setAbilitiesData] = useState<Record<string, IAbility> | null>(null);
  const [heroAbilitiesData, setHeroAbilitiesData] = useState<Record<HeroKey, IHeroAbilities> | null>(null);
  const [abilities, setAbilities] = useState<IAbility[] | []>([]);
  const [talents, setTalents] = useState<ITalent[] | null>(null);

  const abilitiesInfo = () => {
    if (!heroAbilitiesData || !abilitiesData || !currentHero) return [];

    const currentHeroAbilities = heroAbilitiesData[currentHero.name].abilities;
    const currentHeroTalents = heroAbilitiesData[currentHero.name].talents;
    if (!currentHeroAbilities || !currentHeroTalents) return [];

    const abilities: IAbility[] = [];

    currentHeroAbilities.map((ability) => {
      if (abilitiesData[ability].dname) {
        abilities.push(abilitiesData[ability]);
      }
    })

    const talents: ITalent[] = [];

    currentHeroTalents.map(({name, level}) => {
      const talentDesc = abilitiesData[name].dname;
      const newTalent = {
        desc: talentDesc,
        level: Number(level),
      }
      talents.push(newTalent);
    })
    setTalents(talents);
    setAbilities(abilities);
  }

  useEffect(() => {
    abilitiesInfo();
  }, [heroAbilitiesData, abilitiesData, currentHero]);

  useEffect(() => {
    API.constants
      .getConstants("hero_abilities")
      .then((data) => setHeroAbilitiesData(data))
      .catch(() => {
      });
  }, []);

  useEffect(() => {
    API.constants
      .getConstants("abilities")
      .then((data) => setAbilitiesData(data))
      .catch(() => {
      });
  }, []);

  return (
    <div className="relative w-full rounded-lg bg-black/90">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          className="absolute opacity-35 bg-no-repeat blur-xl object-cover w-[125%] h-[125%]"
          src={`/heroes/${hero
            ?.replaceAll(" ", "_")
            .toLocaleLowerCase()}.png`} alt="Backround hero image" width={256} height={144}/>
      </div>

      <div className="flex items-start px-10 py-14 relative z-10 gap-5">
        <div className="w-2/12">
          <Image
            className="rounded-xl"
            src={`/heroes/${hero?.replaceAll(" ", "_").toLocaleLowerCase()}.png`}
            alt={`${currentHero?.localized_name}`}
            width={256}
            height={144}
          />
        </div>
        <HeroShortDescription currentHero={currentHero}/>
        <div className="flex flex-col gap-4 w-6/12">
          <Attributes currentHero={currentHero} />
          {abilities.length > 0 && <Abilities talents={talents} abilitiesInfo={abilities}/>}
        </div>
      </div>
    </div>
  )
}

export default HeroProfile;
