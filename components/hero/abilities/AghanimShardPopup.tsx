"use client";

import Image, {type ImageLoaderProps} from "next/image";
import {IAbility} from "@/services/api/endpoints/types";

type AghanimShardPopupProps = {
  aghanimShardAbility: IAbility
}

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
}

const AghanimShardPopup = ({aghanimShardAbility}: AghanimShardPopupProps) => {
  const {dname, behavior, desc, attrib, img} = aghanimShardAbility;
  return (
    <div
      className=" flex flex-col p-1 w-[300px] cursor-pointer z-10 border border-gray-900 bg-slate-800">
      <div className="flex items-center gap-4 p-2 w-full h-10 bg-slate-600">
        <Image src={"/icons/scepter.png"} width={30} height={30} alt="Aghanim icon"/>
        <p className="text-white">Aghanim&apos;s Scepter</p>
      </div>
      <div className="mt-1 p-2 bg-slate-700">
        <div className="flex items-center gap-4 pb-2 border-b border-gray-900">
          <Image src={img} loader={imageLoader} width={30} height={30} alt={dname || "spell icon"}/>
          <p className="text-white">{dname}</p>
        </div>
        <p className="mt-2 text-xxs text-white mb-2 pb-2 border-b border-gray-900">{desc}</p>
        {attrib.map((attr, i) => {
          return (
            <div key={`${dname}_skill_${attr.header}-${i}`} className="flex text-xxs text-white">
              <div>{attr.header}</div>
              &nbsp;{Array.isArray(attr.value) ? attr.value.join(" / ") : attr.value}
            </div>)
        })}
      </div>
    </div>
  )
}

export default AghanimShardPopup;
