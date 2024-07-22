"use client";

import {useCallback, useState} from "react";

import AbilityItem from "@/components/hero/abilities/AbilityItem";
import AghanimAndShard from "@/components/hero/abilities/AghanimAndShard";
import Talents from "@/components/hero/abilities/Talents";
import {Ability, Talent} from "@/types/index";

interface AbilitiesProps {
  currentHeroAbilitiesInfo: Ability[] | [];
  talents: Talent[];
};

const Abilities = ({currentHeroAbilitiesInfo, talents}: AbilitiesProps) => {
  const [abilities, setAbilities] = useState<Ability[]>(currentHeroAbilitiesInfo);

  const findAbilityIndex = useCallback((name: string) => {
    return abilities.findIndex((ability) => ability.dname === name);
  }, [abilities])

  const changingAbilitiesOrder = useCallback((index: number) => {
    const abilitiesCopy = [...abilities];
    const splicedAbility = abilitiesCopy.splice(index, 1);
    return [...splicedAbility, ...abilitiesCopy]
  }, [abilities])

  const onErrorAbilityHandler = useCallback((name: string) => {
    setAbilities(prevState => {
      const abilityIndex = findAbilityIndex(name);
      if(abilityIndex <= 0) return prevState
      return changingAbilitiesOrder(abilityIndex)
    })
  }, [findAbilityIndex, changingAbilitiesOrder])

  return (
    <div className="flex flex-wrap items-center gap-2 justify-center">
      <Talents talents={talents} />
      {abilities.map((ability: Ability) => (
        <AbilityItem key={ability.dname} {...ability} onErrorAbility={onErrorAbilityHandler}/>
      ))}
      <AghanimAndShard/>
    </div>
  )
}

export default Abilities;
