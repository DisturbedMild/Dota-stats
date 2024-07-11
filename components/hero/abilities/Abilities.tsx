"use client";

import {useCallback, useEffect, useState} from "react";

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

  const findAbilityIndex = (name: string) => {
      return abilities.findIndex((ability) => ability.dname === name);
  }

  const changingAbilitiesOrder = (index: number) => {
    const prevAbilities = [...abilities];
    const splicedAbility = prevAbilities.splice(index, 1);
    return [...splicedAbility, ...prevAbilities]
  }

  const onErrorAbilityHandler = useCallback((name: string) => {
    setAbilities(prevState => {
      const abilityIndex = findAbilityIndex(name);
      if(abilityIndex <= 0) return prevState

      return changingAbilitiesOrder(abilityIndex)
    })
  }, [currentHeroAbilitiesInfo])

  return (
    <div className="flex items-center gap-2 justify-center">
      <Talents talents={talents} />
      {abilities.map((ability: Ability, i) => (
        <AbilityItem key={ability.dname + i} {...ability} onErrorAbility={onErrorAbilityHandler}/>
      ))}
      <AghanimAndShard/>
    </div>
  )
}

export default Abilities;
