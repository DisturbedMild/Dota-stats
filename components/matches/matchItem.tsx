"use client";

import Image from "next/image";
import type { TMatch } from "./asideMatches";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/utils/fetchData";
import HeroIcon from "./heroIcon";

const getMatchHeroes = (heroes: any, arr: number[]) => {
  const heroesArray = arr?.map((id) => {
    return heroes.find((hero: any) => hero.id === id);
  });
  return heroesArray;
};

const MatchItem = ({
  match_id,
  radiant_win,
  radiant_team,
  dire_team,
  duration,
  start_time,
  heroes,
}: any) => {
  const radiantHeroes = getMatchHeroes(heroes, radiant_team);
  const direHeroes = getMatchHeroes(heroes, dire_team);

  return (
    <div className="p-2 bg-neutral-500/20 text-white">
      <div className="flex items-center gap-2">
        <h3 className="text-xl">Match {match_id}</h3>
        <Image
          src={"/ranks/immortal.png"}
          width={40}
          height={40}
          alt="Immortal Rank"
        />
      </div>
      <div
        className={`${
          radiant_win ? "text-green-500" : "text-red-500"
        } text-center uppercase`}
      >
        Winner {radiant_win ? "Radiant" : "Dire"}
      </div>
      <div className="text-center">{duration}</div>
      <div>
        <p className="mb-2 text-green-500 text-left">Radian</p>
        <div className="flex gap-2">
          {radiantHeroes.map((hero: any) => (
            <HeroIcon key={hero.id} name={hero.localized_name} />
          ))}
        </div>
      </div>
      <div>
        <p className="mt-4 mb-2 text-red-500 text-left">Dire</p>
        <div className="flex gap-2">
          {direHeroes.map((hero: any) => (
            <HeroIcon key={hero.id} name={hero.localized_name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchItem;
