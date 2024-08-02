import * as heroesData from "dotaconstants/build/heroes.json"
import Image from "next/image";

import {convertTime} from "@/common/utils/convertTime";
import {Hero} from "@/types/index";

import {MatchProps} from "./AsideMatches";
import HeroIcon from "./HeroIcon";

const getMatchHeroes = (heroes: Record<string, Hero>, team: number[]) => {
  if (!heroes) return;
  return team.map((id) => {
    for (const key in heroes) {
      if (heroes[key].id === id) {
        return heroes[key]
      }
    }
  });
};

const MatchItem = ({match}: { match: MatchProps }) => {
  const heroes: Record<string, Hero> = heroesData;

  const radiantHeroes = getMatchHeroes(heroes, match.radiant_team);
  const direHeroes = getMatchHeroes(heroes, match.dire_team);
  const matchDuration = convertTime(match.duration);
  console.log(radiantHeroes, direHeroes)
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
          {radiantHeroes ? radiantHeroes.map((hero) => hero ?
            <HeroIcon key={hero.id} name={hero.localized_name}/> : null) : null}
        </div>
      </div>
      <div>
        <p className="mt-4 mb-2 text-error text-left">Dire</p>
        <div className="flex gap-2">
          {direHeroes ? direHeroes.map((hero) => hero ?
            <HeroIcon key={hero.id} name={hero.localized_name}/> : null) : null}
        </div>
      </div>
    </div>
  );
};

export default MatchItem;
