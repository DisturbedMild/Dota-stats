"use client";

import type {ImageLoaderProps} from 'next/image';
import Image from "next/image";
import {useContext, useState} from "react";
import {IAbility} from "@/services/api/endpoints/types";
import {APIContext} from "@/common/context/api-context";
import AbilityPopup from "@components/hero/abilities/AbilityPopup";

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
}

interface AbilityProps extends IAbility {
  onErrorAbility: (name: string) => void;
}

const Ability = ({dname: name, img, onErrorAbility}: AbilityProps) => {
  const {abilities} = useContext(APIContext);
  const [error, setError] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState(false);

  const getAbilityDescription = () => {
    const ability = [];
    for (const key in abilities) {
      if (abilities[key].dname === name) {
        return abilities[key];
      }
    }
  }

  const ability = getAbilityDescription();

  return (
    <div className="relative"
         onMouseEnter={() => setShowPopup(true)}
         onMouseLeave={() => setShowPopup(false)}
    >
      <div className="flex">
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
                alt={name}
                width={48}
                height={48}
            />
        }

      </div>
      {showPopup && ability && (
        <AbilityPopup key={ability?.dname} ability={ability} />
      )}
    </div>
  )
};

export default Ability;
