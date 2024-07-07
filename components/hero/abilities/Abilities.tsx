"use client";

import {useCallback, useState} from "react";
import {IAbility, ITalent} from "@/services/api/endpoints/types";
import Ability from "@components/hero/abilities/Ability";
import AghanimAndShard from "@components/hero/abilities/AghanimAndShard";
import Talents from "@components/hero/abilities/Talents";


type AbilitiesProps = {
  abilitiesInfo: IAbility[] | [];
  talents: ITalent[] | null;
};

const Abilities = ({abilitiesInfo, talents}: AbilitiesProps) => {
    const [abilities, setAbilities] = useState<IAbility[]>(abilitiesInfo);

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
      {abilities.map((ability: IAbility, i) => (
        <Ability key={ability.dname + i} {...ability} onErrorAbility={onErrorAbilityHandler}/>
      ))}
      <AghanimAndShard/>
    </div>
  )
}

export default Abilities;
