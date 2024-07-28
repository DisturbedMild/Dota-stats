"use client";

import {useState} from "react";
import Image, {type ImageLoaderProps} from "next/image";

import {Ability} from "@/types/index";

type AbilityPopupProps = {
  ability: Ability;
}

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
}

const AbilityPopup = ({ability}: AbilityPopupProps) => {
  const [error, setError] = useState(false);
  const {
    img,
    dname,
    desc, attrib,
    lore,
    mc,
    cd,
    behavior,
    dmg_type,
    bkbpierce,
    dispellable
  } = ability;
  return (
    <div
      className="absolute z-20 top-10 right-14 flex items-center p-1 w-[340px] cursor-pointer border border-gray-900 bg-slate-800 transition-all">
      <div className="p-2 w-full bg-slate-700">
        <div className="flex items-center gap-4 pb-2 border-b border-gray-500">
          {!error && <Image src={img} loader={imageLoader} onError={() => setError(true)} width={30} height={30}
                            alt={dname || "spell icon"}/>}
          {error && <Image src={"/innate_icon.png"} alt="error" width={30} height={30}/>}
          <p className="text-white">{dname}</p>
        </div>
        {(behavior || bkbpierce || dispellable || dmg_type) && (
          <div className="flex flex-col py-2 text-white text-xs border-b border-gray-500">
            {behavior && <div>TARGET: {typeof behavior === "string" ? behavior : behavior.join(" / ")}</div>}
            {bkbpierce && <div>PIERCES DEBUFF IMMUNITY: {bkbpierce}</div>}
            {dispellable && <div>DISPELLABLE: {dispellable}</div>}
            {dmg_type && <div>DAMAGE TYPE: {dmg_type}</div>}
          </div>
        )}
        <p className="mt-2 text-xs text-white mb-2 pb-2 border-b border-gray-500">{desc}</p>
        {attrib.map((attr, i) => {
          return (
            <div key={`${dname}_skill_${attr.header}-${i}`} className="flex text-xs text-white">
              <div>{attr.header}</div>
              &nbsp;{Array.isArray(attr.value) ? attr.value.join(" / ") : attr.value}
            </div>)
        })}
        {lore && <div className="mt-2 p-2 text-xs text-white bg-gray-500/20">{lore}</div>}
        <div className="flex gap-4 mt-2 pt-2 border-t border-gray-500">
          {typeof mc === "string" &&
              <div className="flex items-center gap-1 text-xs text-white">
                  <div className="bg-blue-500 w-3 h-3 rounded border-black"/>
                  <span>{mc}</span>
              </div>
          }
          {typeof cd === "object" &&
              <div className="flex items-center gap-1 text-xs text-white">
                  <Image src="/icons/ability_cooldown.png" alt={"Ability cooldown"} width={14} height={14}
                         className="h-fit"/>
                {cd.join(" / ")}
              </div>
          }
          {typeof cd === "string" &&
              <div className="flex items-center gap-1 text-xs text-white">
                  <Image src="/icons/ability_cooldown.png" alt={"Ability cooldown"} width={14} height={14}
                         className="h-fit"/>
                  <span>{cd}</span>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default AbilityPopup;
