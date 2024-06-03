"use client";

import {IAbility} from "@/services/api/endpoints/types";
import type {ImageLoaderProps} from 'next/image';
import Image from "next/image";

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
}

const Ability = ({dname: name, img}: IAbility) => {
  return <div className="flex flex-col">
    <Image
      className="w-24 h-24 backdrop-blur-1 rounded cursor-pointer opacity-70 hover:opacity-100 transition-all hover:scale-110 shadow-xl  hover:shadow-black/40"
      src={img} loader={imageLoader} alt="" width={128} height={128}/>

  </div>
};

export default Ability;
