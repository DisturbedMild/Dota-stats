"use client";

import { useContext } from "react";
import Image from "next/image";

import { APIContext } from "@/common/context/api-context";
import { calculateWilsonScore } from "@/common/utils/calculateWilsonScore";

type HeroMatchupsItem = {
  id: number | undefined;
  games: number;
  wins: number;
};

const HeroMatchupsItem = ({ id, games, wins }: HeroMatchupsItem) => {
  const { heroes } = useContext(APIContext);

  if (!id) return null;
  const hero = Array.isArray(heroes) && heroes.find((hero) => hero.id === id);
  const imageSrc = `/heroes/${hero?.localized_name
    .replaceAll(" ", "_")
    .toLocaleLowerCase()}.png`;

  return (
    hero && (
      <div className="flex items-center px-6 py-2 border-t border-b border-gray-200/10 rounded-t">
        <div className="w-6/12 flex items-center gap-2 text-base">
          <Image
            src={imageSrc}
            alt={hero.localized_name}
            width={50}
            height={28}
          />
          <span className="text-xls">{hero.localized_name}</span>
        </div>
        <div className="w-2/12 text-base text-center">{games}</div>
        <div className="w-2/12 text-base text-center">
          {((wins * 100) / games).toFixed(2)}
        </div>
        <div className="w-2/12 text-base text-center">
          {calculateWilsonScore(wins, games)}
        </div>
      </div>
    )
  );
};

export default HeroMatchupsItem;
