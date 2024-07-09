"use client";

import {useCallback, useState} from "react";

import AbilityItem from "@/components/hero/abilities/AbilityItem";
import AghanimAndShard from "@/components/hero/abilities/AghanimAndShard";
import Talents from "@/components/hero/abilities/Talents";
import {Ability, Talent} from "@/types/index";

interface AbilitiesProps {
  currentHeroAbilitiesInfo: Ability[] | [];
  talents: Talent[] | null;
};

const Abilities = ({currentHeroAbilitiesInfo, talents}: AbilitiesProps) => {
  const [abilities, setAbilities] = useState<Ability[]>(currentHeroAbilitiesInfo);
  console.log(currentHeroAbilitiesInfo)

  const onErrorAbilityHandler = useCallback((name: string) => {
    setAbilities(prevState => {
      const abilityIndex = prevState.findIndex((ability) => ability.dname === name);

      if(abilityIndex <= 0) {
        return prevState
      }
      const abs = [...prevState];
      const temp = abs.splice(abilityIndex, 1);
      return [...temp, ...abs]
    })
  }, [abilities])

  return (
    <div className="flex items-center gap-2 justify-center">
      <Talents talents={talents} />
      {currentHeroAbilitiesInfo.map((ability: Ability, i) => (
        <AbilityItem key={ability.dname + i} {...ability} onErrorAbility={onErrorAbilityHandler}/>
      ))}
      <AghanimAndShard/>
    </div>
  )
}

export default Abilities;
