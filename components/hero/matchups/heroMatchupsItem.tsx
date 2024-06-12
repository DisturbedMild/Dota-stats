"use client";

import {IHeroes} from "@/services/api/endpoints/types";
import Image from "next/image";

type THeroMatchupsItem = {
  heroes: IHeroes;
  id: number | undefined;
  games: number;
  wins: number;
}

const HeroMatchupsItem = ({heroes, id, games, wins}: THeroMatchupsItem) => {
  if (!id) return null;
  const hero = heroes.find((hero) => hero.id === id);
  const imageSrc = `/heroes/${hero?.localized_name
    .replaceAll(" ", "_")
    .toLocaleLowerCase()}.png`;

  return (
    hero &&
    <div className="flex items-center px-6 py-2 rounded-t">
      <div className="w-6/12 flex items-center gap-2 text-base">
        <Image
          src={imageSrc}
          alt={hero.localized_name}
          width={50}
          height={28}
        />
        <span className="text-xls">{hero.localized_name}</span>
      </div>
      <div className="w-2/12 text-base">{games}</div>
      <div className="w-2/12 text-base">{(wins * 100 / games).toFixed(2)}</div>
      <div className="w-2/12 text-base">Calculate by Willson Score</div>
    </div>
  )
}

export default HeroMatchupsItem;