"use client";

import {useContext} from "react";
import {ImageLoaderProps} from "next/image";
import Image from "next/image";

import {ItemsContext} from "@/common/context/items-context";
import ChoseShopItemComponents from "@/components/items/chosenShopItemComponents";

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
}

const ChosenShopItem = () => {
  const {currentActiveItem} = useContext(ItemsContext);

  if (currentActiveItem === null) return (
    <div className="flex flex-col justify-center p-2 w-3/12 bg-secondary/30 text-center transition-all">
      <h2 className="text-4xl text-white/20">You still didn&apos;t chose an item.</h2>
    </div>
  )

  return (
    <div className="w-3/12 h-max bg-secondary/30 transition-all">
      <div className="grid grid-cols-66-160 gap-x-4 px-1.5 py-3">
        <Image
          src={currentActiveItem.img}
          alt={currentActiveItem.dname}
          loader={imageLoader}
          width={66}
          height={48}
          loading="lazy"
          className="h-full border border-black"/>
        <div className="flex flex-col w-48">
          <span className="text-xls">{currentActiveItem.dname.toUpperCase()}</span>
          <span className="flex currentActiveItems-center gap-1 text-xls text-amber-300">
            <Image src="/icons/gold.png" alt="gold" width={17} height={12} className="h-fit"/>
            <span>{currentActiveItem.cost}</span>
          </span>
        </div>
      </div>
      <div className={`flex flex-col mb-3 px-1.5 pb-1 text-xls ${
        (currentActiveItem.behavior || currentActiveItem.dmg_type || currentActiveItem.bkbpierce) && "border-b border-b-white"
      }`}>
        {currentActiveItem.behavior && (
          <div>
            <span className="uppercase text-xls">Target: </span>
            {typeof currentActiveItem.behavior === "string" && <span>{currentActiveItem.behavior}</span> }
            {Array.isArray(currentActiveItem.behavior) && currentActiveItem.behavior.map(behavior => <span key={behavior}> {behavior} </span>) }
          </div>
        )}
        {currentActiveItem.dmg_type && (
          <div>
            <span>DAMAGE TYPE: </span>
            <span className={`${
              currentActiveItem.dmg_type === "Physical" ?
                "text-pink-800" :
                currentActiveItem.dmg_type === "Magical"
                  ? "text-blue-600" :
                  "text-amber-300"}}`
            }>{currentActiveItem.dmg_type}</span>
          </div>
        )}
        {currentActiveItem.bkbpierce && currentActiveItem.bkbpierce === "Yes" && (
          <div>
            <span>PIERCES DEBUFF IMMUNITY: </span>
            <span className="text-green-600">{currentActiveItem.bkbpierce}</span>
          </div>
        )}
        {currentActiveItem.dispellable && currentActiveItem.dispellable !== "No" && (
          <div>
            <span>DISPELLABLE: </span>
            <span className={`${currentActiveItem.dispellable === "Yes" ? "text-green-600" : "text-pink-800"}`}>{currentActiveItem.dispellable}</span>
          </div>
        )}
      </div>
      <div className=" px-1.5 py-2 bg-gray-900/60">
        <div className="flex flex-col">
          {currentActiveItem?.attrib.map(attr =>
            attr.display &&
              <span key={attr.key} className="text-xls py-[1px]">
                {attr.display?.replace("{value}", attr.value)}
              </span>
          )}
        </div>
        {currentActiveItem?.abilities?.map((ability) =>
          {
            if (ability.type === "active") {
              return (
                <div className="mt-2" key={ability.title}>
                  <div className="flex justify-between currentActiveItems-center px-2 py-1 text-xls bg-gradient-to-r from-[#40b91a99] to-[#020024]">
                    <span>Use: {ability.title}</span>
                    <div className="inline-flex gap-2">
                      {currentActiveItem?.mc && (
                        <div className="flex currentActiveItems-center gap-1 text-xs">
                          <div className="bg-blue-500 w-3 h-3 rounded border-black"/>
                          <span>{currentActiveItem.mc}</span>
                        </div>
                      )
                      }
                      {currentActiveItem?.cd && (
                        <div className="flex currentActiveItems-center gap-1 text-xs">
                          <Image
                            src="/icons/ability_cooldown.png"
                            alt={"Ability cooldown"}
                            width={14}
                            height={14} className="h-fit"
                          />
                          <span>{currentActiveItem.cd}</span>
                        </div>
                      )
                      }
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-black/20 text-xs bg-gradient-to-r from-[#40b91a99] to-[#020024]">{ability.description}</div>
                </div>
              )
            }

            return (
              <div className="my-2" key={ability.title}>
                <div className="flex justify-between currentActiveItems-center px-2 py-1 text-xls bg-gradient-to-r from-[#2b2d69] to-[#02002499]">
                  <span>Passive: {ability.title}</span>
                  <div className="inline-flex gap-2">
                    {currentActiveItem?.mc &&
                        <div className="flex currentActiveItems-center gap-1 text-xs">
                            <div className="bg-blue-500 w-3 h-3 rounded border-black"/>
                            <span>{currentActiveItem.mc}</span>
                        </div>
                    }
                    {currentActiveItem?.cd &&
                        <div className="flex currentActiveItems-center gap-1 text-xs">
                            <Image src="/icons/ability_cooldown.png" alt={"Ability cooldown"} width={14} height={14}
                                   className="h-fit"/>
                            <span>{currentActiveItem.cd}</span>
                        </div>
                    }
                  </div>
                </div>
                <div className="px-2 py-1 bg-gradient-to-r from-[#2b2d69] to-[#02002499] text-xs">{ability.description}</div>
              </div>
            )
          }
        )}
        {currentActiveItem.hint?.length > 0 && (
          <div className="flex flex-col my-2 px-2 py-1 bg-black/30 text-white/40 text-xls">
            {currentActiveItem.hint.map(hint => <div key={hint}>{hint}</div>)}
          </div>
        )}
        {currentActiveItem.lore && (
          <div className="my-2 px-2 py-1 bg-black/70 text-white/40 text-xls italic">
            {currentActiveItem.lore}
          </div>
        )}
      </div>
      {currentActiveItem.created &&
        <ChoseShopItemComponents
          img={currentActiveItem.img}
          components={currentActiveItem.components}
          dname={currentActiveItem.dname}
        />
      }
    </div>
  )
}

export default ChosenShopItem
