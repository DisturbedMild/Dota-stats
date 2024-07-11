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

  const findAbilityIndex = (abilities: Ability[], name: string) => {
      return abilities.findIndex((ability) => ability.dname === name);
  }

  const onErrorAbilityHandler = useCallback((name: string) => {
    setAbilities(prevState => {
      const abilityIndex = findAbilityIndex(prevState, name);
      if(abilityIndex <= 0) return prevState

      const prevAbilities = [...prevState];
      const splicedAbility = prevAbilities.splice(abilityIndex, 1);
      return [...splicedAbility, ...prevAbilities]
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
