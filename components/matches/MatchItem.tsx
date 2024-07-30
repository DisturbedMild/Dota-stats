"use client";

import { useContext } from "react";
import Image from "next/image";

import { APIContext } from "@/common/context/api-context";
import { convertTime } from "@/common/utils/convertTime";
import { Hero, Heroes } from "@/types/index";

import { MatchProps } from "./AsideMatches";
import HeroIcon from "./HeroIcon";

const getMatchHeroes = (heroes: Heroes, team: number[]): Hero[] | null => {
  if (!heroes) return null;
  return team.map((id) => {
    return Array.isArray(heroes) && heroes.find((hero: Hero) => hero.id === id);
  });
};

const MatchItem = ({ match }: { match: MatchProps }) => {
  const { heroes } = useContext(APIContext);

  if (!heroes) return <p>Something went wrong, try again later</p>;

  const radiantHeroes = getMatchHeroes(heroes, match.radiant_team);
  const direHeroes = getMatchHeroes(heroes, match.dire_team);
  const matchDuration = convertTime(match.duration);

  return (
    <div className="p-2 bg-secondary/30 text-white transition-all">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl">Match {match.match_id}</h3>
        <Image
          src={"/ranks/immortal.png"}
          width={40}
          height={40}
          alt="Immortal Rank"
        />
      </div>
      <div
        className={`${
          match.radiant_win ? "text-green" : "text-error"
        } text-center uppercase`}
      >
        Winner {match.radiant_win ? "Radiant" : "Dire"}
      </div>
      <div className="text-center">
        {matchDuration.minutes}:{matchDuration.seconds}
      </div>
      <div>
        <p className="mb-2 text-success text-left">Radian</p>
        <div className="flex gap-2">
          {radiantHeroes?.map((hero: Hero) => (
            <HeroIcon key={hero.id} name={hero.localized_name} />
          ))}
        </div>
      </div>
      <div>
        <p className="mt-4 mb-2 text-error text-left">Dire</p>
        <div className="flex gap-2">
          {direHeroes?.map((hero: Hero) => (
            <HeroIcon key={hero.id} name={hero.localized_name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchItem;
