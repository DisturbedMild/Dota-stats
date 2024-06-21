import Image, {type ImageLoaderProps} from "next/image";
import {IItem} from "@/services/api/endpoints/types";

type THeroItemPopupProps = {
  item: IItem;
}
const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
}

const HeroItemPopup = ({item}: THeroItemPopupProps) => {
  return (
    <div className="absolute bottom-4 right-14 w-72 bg-gray-800 cursor-pointer z-10 border border-gray-900">
      <div className="grid grid-cols-66-160 items-start gap-x-4 px-1.5 py-3">
        <Image
          src={item.img}
          alt={item.dname}
          loader={imageLoader}
          width={66}
          height={48}
          className="h-full border border-black"/>
        <div className="flex flex-col w-48">
          <span className="text-xls">{item.dname.toUpperCase()}</span>
          <span className="flex items-center gap-1 text-xls text-amber-300">
            <Image src="/icons/gold.png" alt="gold" width={17} height={12} className="h-fit"/>
            <span>{item.cost}</span>
          </span>
        </div>
      </div>
      <div className=" px-1.5 py-2 bg-gray-900/60">
        <div className="flex flex-col">
          {item?.attrib.map(attr =>
            attr.display &&
              <span key={attr.key} className="text-xls py-[1px]">
                {attr.display?.replace("{value}", attr.value)}
              </span>
          )}
        </div>
        {item?.abilities?.map((ability) =>
          {
            if (ability.type === "active") {
              return (
                <div className="mt-2" key={ability.title}>
                  <div className="flex justify-between items-center px-2 py-1 text-xls bg-gradient-to-r from-[#40b91a99] to-[#020024]">
                    <span>Use: {ability.title}</span>
                    <div className="inline-flex gap-2">
                      {item.mc && (
                        <div className="flex items-center gap-1 text-xs">
                          <div className="bg-blue-500 w-3 h-3 rounded border-black"/>
                          <span>{item.mc}</span>
                        </div>
                      )
                      }
                      {item.cd && (
                        <div className="flex items-center gap-1 text-xs">
                          <Image
                            src="/icons/ability_cooldown.png"
                            alt={"Ability cooldown"}
                            width={14}
                            height={14} className="h-fit"
                          />
                          <span>{item.cd}</span>
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
                <div className="flex justify-between items-center px-2 py-1 text-xls bg-gradient-to-r from-[#2b2d69] to-[#02002499]">
                  <span>Passive: {ability.title}</span>
                  <div className="inline-flex gap-2">
                    {item.mc &&
                        <div className="flex items-center gap-1 text-xs">
                            <div className="bg-blue-500 w-3 h-3 rounded border-black"/>
                            <span>{item.mc}</span>
                        </div>
                    }
                    {item.cd &&
                        <div className="flex items-center gap-1 text-xs">
                            <Image src="/icons/ability_cooldown.png" alt={"Ability cooldown"} width={14} height={14}
                                   className="h-fit"/>
                            <span>{item.cd}</span>
                        </div>
                    }
                  </div>
                </div>
                <div className="px-2 py-1 bg-gradient-to-r from-[#2b2d69] to-[#02002499] text-xs">{ability.description}</div>
              </div>
            )
          }
        )}
        {item.hint?.length > 0 && (
          <div className="flex flex-col my-2 px-2 py-1 bg-black/30 text-white/40 text-xls">
            {item.hint.map(hint => <div key={hint}>{hint}</div>)}
          </div>
        )}
        {item.lore && (
          <div className="my-2 px-2 py-1 bg-black/70 text-white/40 text-xls italic">
            {item.lore}
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroItemPopup;
