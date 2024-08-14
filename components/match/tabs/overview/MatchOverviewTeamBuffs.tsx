import abilitiesData from "dotaconstants/build/abilities.json"
import itemsData from "dotaconstants/build/items.json"
import buffsData from "dotaconstants/build/permanent_buffs.json"
import Image, {ImageLoaderProps} from "next/image";

import {Ability, Items} from "@/common/types";

interface MatchOverviewTeamBuffsProps {
  permanent_buffs: Record<string, number>[]
}

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
};

const MatchOverviewTeamBuffs = ({permanent_buffs}: MatchOverviewTeamBuffsProps) => {
  const buffs = JSON.parse(JSON.stringify(buffsData))
  const abilities: Record<string, Ability> = JSON.parse(JSON.stringify(abilitiesData))
  const items: Items = JSON.parse(JSON.stringify(itemsData))

  return (
    <td className="text-center h-20 w-[40px] text-xls">
      <div className="flex justify-center">
        {permanent_buffs.map((buff) => {
          const currentBuff = buffs[buff.permanent_buff];
          const stacks = buff.stack_count;
          const shard = "aghanims_shard";
          const aghanim = "ultimate_scepter";
          let currentItemBuff;
          let currentAbilityBuff;

          for (const key in abilities) {
            if (key === currentBuff && currentBuff !== shard && currentBuff !== aghanim) {
              currentAbilityBuff = abilities[key]
            }
          }

          for (const key in items) {
            if (key === currentBuff && currentBuff !== shard && currentBuff !== aghanim) {
              currentItemBuff = items[key]
            }
          }

          return (
            <div key={Math.random() * 1000}>
              {currentItemBuff ? (
                <div className="relative w-max">
                  <Image src={currentItemBuff.img} loader={imageLoader} width={28} height={28}
                         alt={currentItemBuff.dname}/>
                  <span className="absolute right-1 bottom-0">{stacks}</span>
                </div>
              ) : null}
              {currentAbilityBuff ? (
                <div className="relative w-max">
                  <Image src={currentAbilityBuff.img} loader={imageLoader} width={28} height={28}
                         alt={currentAbilityBuff.dname}/>
                  <span className="absolute right-1 bottom-0">{stacks}</span>
                </div>
              ) : null}
            </div>)
        })}
      </div>
    </td>
  )
}

export default MatchOverviewTeamBuffs
