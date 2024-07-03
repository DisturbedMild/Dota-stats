"use client";

import Image from "next/image";
import {useCallback, useEffect, useMemo, useState} from "react";
import {HeroKey, IAbility, IHeroAbilities, IHeroStats, IMatchup} from "@/services/api/endpoints/types";
import Ability from "@components/abilities/Ability";
import Spinner from "@components/ui/loaders/Spinner";
import Talents from "@components/abilities/Talents";
import AghanimAndShard from "@components/abilities/AghanimAndShard";
import {useParams} from "next/navigation";
import {API} from "@/services/api";

type HeroProfileProps = {
  currentHero: IHeroStats | undefined,
}

const HeroProfile = ({ currentHero }: HeroProfileProps) => {
  const {hero}: { hero: string } = useParams();
  const [abilitiesData, setAbilitiesData] = useState<Record<string, IAbility> | null>(null);
  const [heroAbilitiesData, setHeroAbilitiesData] = useState<Record<HeroKey, IHeroAbilities> | null>(null);
  const [heroMatchupsData, setHeroMatchupsData] = useState<IMatchup[] | null>(null);
  const [abilities, setAbilities] = useState<IAbility[] | []>([]);

  const abilitiesInfo = () => {
    if (!heroAbilitiesData || !abilitiesData || !currentHero) return [];

    const currentHeroAbilities = heroAbilitiesData[currentHero.name].abilities;
    if (!currentHeroAbilities) return [];

    const result: IAbility[] = [];
    currentHeroAbilities.map((ability) => {
      if (abilitiesData[ability].dname) {
        result.push(abilitiesData[ability]);
      }
    })
    setAbilities(result)
  }

  const onErrorAbilityHandler = useCallback((name: string) => {
      setAbilities(prevState => {
        const abilityIndex = prevState.findIndex((ability, index) => ability.dname === name);

        if(abilityIndex <= 0) {
          return prevState
        }
        const abs = [...prevState];
        const temp = abs.splice(abilityIndex, 1);
        return [...temp, ...abs]
      })
  }, [abilities])

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

  useEffect(() => {
    abilitiesInfo();
  }, [heroAbilitiesData, abilitiesData, currentHero]);

  useEffect(() => {
    API.constants
      .getConstants("hero_abilities")
      .then((data) => setHeroAbilitiesData(data))
      .catch(() => {
      });
  }, []);

  useEffect(() => {
    API.constants
      .getConstants("abilities")
      .then((data) => setAbilitiesData(data))
      .catch(() => {
      });
    ;
  }, []);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroMatchups(currentHero.id)
        .then((data) => setHeroMatchupsData(data))
        .catch(() => {
        });
    }
  }, [currentHero]);

  return (
    <div className="relative w-full rounded-lg overflow-hidden bg-black/90">
      <Image
        className="absolute opacity-35 bg-no-repeat blur-xl object-cover w-[125%] h-[125%] w-full h-full "
        src={`/heroes/${hero
          ?.replaceAll(" ", "_")
          .toLocaleLowerCase()}.png`} alt="Backround hero image" width={256} height={144}/>
      <div className="flex items-start px-10 py-14 relative z-10 gap-5">
        <div className="w-2/12">
          <Image
            className="rounded-xl"
            src={`/heroes/${hero?.replaceAll(" ", "_").toLocaleLowerCase()}.png`}
            alt={`${currentHero?.localized_name}`}
            width={256}
            height={144}
          />
        </div>
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
          > Winrate: {winrate === 0 ? <Spinner w={12} h={12} lineColor={"#00da96"} /> : winrate + "%"}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-6/12">
          <div className="mx-auto px-6 py-2 w-3/5 bg-black/45 rounded">
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-2 items-center">
                <div className="bg-red-700 rounded-full w-2 h-2"></div>
                <div className="text-white text-xs">{currentHero?.base_str} + {currentHero?.str_gain}</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full w-2 h-2"></div>
                <div className="text-white text-xs">{currentHero?.base_agi} + {currentHero?.agi_gain}</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-blue-700 rounded-full w-2 h-2"></div>
                <div className="text-white text-xs">{currentHero?.base_int} + {currentHero?.int_gain}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Talents/>
            {abilities.map((ability: IAbility, i) => (
              <Ability key={ability.dname + i} {...ability} onErrorAbility={onErrorAbilityHandler}/>
            ))}
            <AghanimAndShard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroProfile;
