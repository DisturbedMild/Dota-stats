"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { API } from "@/services/api";
import HeroIcon from "./HeroIcon";
import { MatchProps } from "./AsideMatches";
import { IHeroes } from "@/services/api/endpoints/types";
import { convertTime } from "@/common/utils/convertTime";

const getMatchHeroes = (heroes: IHeroes, arr: number[]) => {
  return arr?.map((id) => {
    return heroes.find((hero: any) => hero.id === id);
  });
};

const MatchItem = ({ match }: { match: MatchProps }) => {
  const [heroes, setHeroes] = useState<IHeroes>([]);
  const [heroesLoading, setHeroesLoading] = useState(true);

  useEffect(() => {
    API.heroes
      .getHeroes()
      .then((data) => {
        setHeroes(data);
      })
      .catch(() => {})
      .finally(() => {
        setHeroesLoading(false);
      });
  }, []);

  const radiantHeroes = getMatchHeroes(heroes, match.radiant_team);
  const direHeroes = getMatchHeroes(heroes, match.dire_team);
  const matchDuration = convertTime(match.duration);

  return (
    <>
      {!heroesLoading && (
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
              {radiantHeroes.map((hero: any) => (
                <HeroIcon key={hero.id} name={hero.localized_name} />
              ))}
            </div>
          </div>
          <div>
            <p className="mt-4 mb-2 text-error text-left">Dire</p>
            <div className="flex gap-2">
              {direHeroes.map((hero: any) => (
                <HeroIcon key={hero.id} name={hero.localized_name} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MatchItem;
