"use client";

import Spinner from "@components/ui/loaders/Spinner";
import {useCallback, useEffect, useState} from "react";
import {IHeroStats, IMatchup} from "@/services/api/endpoints/types";
import {API} from "@/services/api";

type HeroShortDescriptionProps = {
  currentHero: IHeroStats | undefined
}

const HeroShortDescription = ({currentHero}: HeroShortDescriptionProps) => {
  const [heroMatchupsData, setHeroMatchupsData] = useState<IMatchup[] | null>(null);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroMatchups(currentHero.id)
        .then((data) => setHeroMatchupsData(data))
        .catch(() => {
        });
    }
  }, [currentHero]);

  const heroOverallWinrate = useCallback((games: IMatchup[] | null): number => {
      if (games === null) {
        return 0;
      }
      const gamesPlayed = games.reduce(
        (acc: { games: number; wins: number }, curr: IMatchup) => {
          acc.games += curr.games_played;
          acc.wins += curr.wins;
          return acc;
        },
        {games: 0, wins: 0}
      );

      return Number(((gamesPlayed?.wins / gamesPlayed?.games) * 100).toFixed(2));
    }, [heroMatchupsData]
  )

  const winrate = heroOverallWinrate(heroMatchupsData);

  return (
    <div className="text-lg text-white w-4/12">
      <h1 className="my-2 text-4xl font-bold">
        {currentHero?.localized_name}
      </h1>
      <div>
        {currentHero?.attack_type} - <span
        className="uppercase text-xs text-gray-500">{currentHero?.roles.map((role: string, index: number) => {
        if (index === currentHero?.roles.length - 1) {
          return <span key={role}>{role}</span>
        } else {
          return <span key={role}>{role}, </span>
        }
      })}</span>
      </div>
      <div
        className={`flex items-center gap-2 my-3 text-xs uppercase ${
          Number(winrate) === 0 ? "text-white" ? Number(winrate) < 50 : "text-red-500" : "text-green-500"
        }`}
      > Winrate: {winrate === 0 ? <Spinner w={12} h={12} lineColor={"#00da96"}/> : winrate + "%"}
      </div>
    </div>
  )
}

export default HeroShortDescription;