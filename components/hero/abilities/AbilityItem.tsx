"use client";

import { useContext, useState } from "react";
import type { ImageLoaderProps } from "next/image";
import Image from "next/image";

import { APIContext } from "@/common/context/api-context";
import AbilityPopup from "@/components/hero/abilities/AbilityPopup";
import { Ability } from "@/types/index";

const imageLoader = ({ src, width }: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
};

interface AbilityProps extends Ability {
  onErrorAbility: (name: string) => void;
}

const AbilityItem = ({ dname: name, img, onErrorAbility }: AbilityProps) => {
  const { abilities }: { abilities: Record<string, Ability> | null } =
    useContext(APIContext);
  const [error, setError] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  if (!abilities) return <p>Something went wrong, try again later</p>;

  const getAbilityDescription = () => {
    for (const key in abilities) {
      if (abilities[key].dname === name) {
        return abilities[key];
      }
    }
  };

  const ability = getAbilityDescription();

  return (
    <div
      className="relative bg-black"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <div className="relative z-1 flex justify-center flex-col items-center w-12 transition-all cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 shadow-xl hover:shadow-black/40">
        {error && (
          <Image
            className="w-12 h-12 relative z-1 backdrop-blur-1 rounded"
            src={"/innate_icon.png"}
            alt="error"
            width={48}
            height={48}
          />
        )}
        {!error && (
          <Image
            className="w-12 h-12 relative z-1 backdrop-blur-1 rounded"
            src={img}
            onError={() => {
              setError(true);
              onErrorAbility(name);
            }}
            loader={imageLoader}
            alt={name}
            width={48}
            height={48}
          />
        )}
      </div>
      {showPopup && ability && (
        <AbilityPopup key={ability?.dname} ability={ability} />
      )}
    </div>
  );
};

export default AbilityItem;
