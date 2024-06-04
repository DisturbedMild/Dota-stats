"use client";

import {IAbility} from "@/services/api/endpoints/types";
import type {ImageLoaderProps} from 'next/image';
import Image from "next/image";
import {useState} from "react";

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
}

const Ability = ({dname: name, img}: IAbility) => {
  const [error, setError] = useState<boolean>(false);

  return <div className="flex flex-col">
    {error && <Image
        className="w-18 h-18 backdrop-blur-1 rounded cursor-pointer opacity-70 hover:opacity-100 transition-all hover:scale-110 shadow-xl  hover:shadow-black/40"
        src={"/no-spell.svg"} alt="error" width={128} height={128}/>}
    {!error && <Image
        className="w-18 h-18 backdrop-blur-1 rounded cursor-pointer opacity-70 hover:opacity-100 transition-all hover:scale-110 shadow-xl  hover:shadow-black/40"
        src={img} onError={(e) => setError(true)} loader={imageLoader} alt="" width={128} height={128}/>}
  </div>
};

export default Ability;
