import {Tooltip} from "react-tooltip";
import abilitiesData from "dotaconstants/build/abilities.json"
import aghanimsDescriptionsData from 'dotaconstants/build/aghs_desc.json'
import Image from "next/image";

import {Ability, AghDescription} from "@/common/types";
import AghanimPopup from "@/components/hero/abilities/AghanimPopup";
import AghanimShardPopup from "@/components/hero/abilities/AghanimShardPopup";

interface MatchOverviewTeamAghanimProps {
  id: number,
  haveAghanim: number,
  haveShard: number
}

const getHeroAghanimAndShard = (id: number, aghsWithDesc: AghDescription[]): AghDescription | null => {
  const aghanimDesc = aghsWithDesc.find((item) => item.hero_id === id)
   if(aghanimDesc) {
     return aghanimDesc
   }
  return null
}

const getAbility = (name: string, abilities: Record<string, Ability>): Ability | undefined => {
  for (const key in abilities) {
    if (abilities[key].dname === name) {
      return abilities[key]
    }
  }
}

const MatchOverviewTeamAghanim = ({id, haveAghanim, haveShard}: MatchOverviewTeamAghanimProps) => {
  const aghanimsDescriptions = JSON.parse(JSON.stringify(aghanimsDescriptionsData));
  const abilities: Record<string, Ability> = JSON.parse(JSON.stringify(abilitiesData));
  const currentHeroAghanimDescription = getHeroAghanimAndShard(id, aghanimsDescriptions);
  const getAghanimAbilityWithDescription = currentHeroAghanimDescription ? getAbility(currentHeroAghanimDescription.scepter_skill_name, abilities) : null;
  const getShardAbilityWithDescription = currentHeroAghanimDescription ? getAbility(currentHeroAghanimDescription.shard_skill_name, abilities) : null;


  return <td className="text-center h-20 w-[30px] text-xls">
    <div className="flex flex-col items-center">
      <div className={`scepter-anchor-${id}`}>
        {haveAghanim === 0 ? (
          <Image
            src={"/icons/scepter.png"}
            width={24}
            height={24}
            alt="Aghanim scepter"
            className="cursor-pointer"
          />) : (
          <Image
            src={"/icons/scepter_active.png"}
            width={24}
            height={24}
            alt="Aghanim scepter"
            className="cursor-pointer"
          />
        )
        }
        <Tooltip anchorSelect={`.scepter-anchor-${id}`} place="left"
                 style={{padding: 0, zIndex: 1000, textAlign: "left", opacity: 0.9}}>
          {getAghanimAbilityWithDescription ? <AghanimPopup aghanimAbility={getAghanimAbilityWithDescription}/> : null}
        </Tooltip>
      </div>
      <div className={`shard-anchor-${id}`}>
        {haveShard === 0 ? (
          <Image
            src={"/icons/shard.png"}
            width={24}
            height={24}
            alt="Aghanim scepter"
            className="cursor-pointer"
          />) : (
          <Image
            src={"/icons/shard_active.png"}
            width={24}
            height={24}
            alt="Aghanim scepter"
            className="cursor-pointer"
          />
        )
        }
        <Tooltip anchorSelect={`.shard-anchor-${id}`} place="left"
                 style={{padding: 0, zIndex: 1000, textAlign: "left", opacity: 0.9}}>
          {getShardAbilityWithDescription ?
            <AghanimShardPopup aghanimShardAbility={getShardAbilityWithDescription}/> : null}
        </Tooltip>
      </div>
    </div>
  </td>
}

export default MatchOverviewTeamAghanim
