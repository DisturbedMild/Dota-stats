"use client";

import type {ImageLoaderProps} from 'next/image';
import Image from "next/image";
import {useState} from "react";
import {IAbility} from "@/services/api/endpoints/types";

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
}

interface AbilityProps extends IAbility {
  onErrorAbility: (name: string) => void;
}

const Ability = ({dname: name, img, onErrorAbility}: AbilityProps) => {
  const [error, setError] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      {
        error &&
          <Image
              className="w-12 h-12 backdrop-blur-1 rounded cursor-pointer opacity-70 hover:opacity-100 transition-all hover:scale-110 shadow-xl  hover:shadow-black/40"
              src={"/innate_icon.png"}
              alt="error"
              width={48}
              height={48}
          />
      }
      {!error &&
          <Image
              className="w-12 h-12 backdrop-blur-1 rounded cursor-pointer opacity-70 hover:opacity-100 transition-all hover:scale-110 shadow-xl  hover:shadow-black/40"
              src={img}
              onError={(e) => {
                setError(true)
                onErrorAbility(name)
              }}
              loader={imageLoader}
              alt=""
              width={48}
              height={48}
          />
      }
    </div>
  )
};

export default Ability;
