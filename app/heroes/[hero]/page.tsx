"use client";

import {API} from "@/services/api";
import {useParams} from "next/navigation";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {
  HeroKey,
  IAbility,
  IHeroAbilities,
  IHeroStats,
  IMatchup
} from "@/services/api/endpoints/types";
import HeroProfile from "@components/hero/heroProfile";
import HeroDetails from "@components/hero/heroDetails";
import HeroDetailsNavbar from "@components/hero/detail-nav/heroDetailsNavbar";

const getHero = (heroes: IHeroStats[] | null, name: string) => {
  if (heroes === null) {
    return;
  }
  return heroes.find((hero: IHeroStats) => {
    const heroName = hero.localized_name.replaceAll(" ", "_");

    if (heroName === name) return hero;
  });
};

const HeroPage = () => {
  const [heroStats, setHeroStats] = useState<IHeroStats[] | null>(null);
  const [heroMatchups, setHeroMatchups] = useState<IMatchup[] | null>(null);
  const [heroAbilities, setHeroAbilities] = useState<Record<HeroKey, IHeroAbilities> | null>(
    null
  );
  const [abilities, setAbilities] = useState<Record<string, IAbility> | null>(null);
  const [heroStatsLoading, setHeroStatsLoading] = useState(true);
  const [abilitiesLoaded, setAbilitiesLoaded] = useState(true);

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
  }, [heroMatchups]
)


  const {hero}: { hero: string } = useParams();
  const currentHero = getHero(heroStats, hero);

  useEffect(() => {
    API.heroes
      .getHeroStats()
      .then((data) => {
        setHeroStats(data);
      })
      .catch(() => {
      })
      .finally(() => {
        setHeroStatsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroMatchups(currentHero.id)
        .then((data) => setHeroMatchups(data))
        .catch(() => {
        });
    }
  }, [currentHero]);

  useEffect(() => {
    API.constants
      .getConstants("hero_abilities")
      .then((data) => setHeroAbilities(data))
      .catch(() => {
      });
  }, []);

  useEffect(() => {
    API.constants
      .getConstants("abilities")
      .then((data) => setAbilities(data))
      .catch(() => {
      })
      .finally(() => {
        setAbilitiesLoaded(false);
      });
    ;
  }, []);

  const abilitiesInfo = useMemo(() => {
    if (!heroAbilities || !abilities || !currentHero) return [];

    const currentHeroAbilities = heroAbilities[currentHero.name].abilities;
    if (!currentHeroAbilities) return [];

    const result: IAbility[] = [];
    currentHeroAbilities.map((ability) => {
      if (abilities[ability].dname) {
        result.push(abilities[ability]);
      }
    })

    return result;
  }, [heroAbilities, abilities, currentHero]);

  const winrate = heroOverallWinrate(heroMatchups);

  return (
    !heroStatsLoading && (
      <section className="mx-auto w-10/12">
        {!abilitiesLoaded &&
            <HeroProfile
                hero={hero}
                currentHero={currentHero}
                winrate={winrate}
                abilitiesInfo={abilitiesInfo}
            />
        }

        <HeroDetails currentHero={currentHero}/>
        <HeroDetailsNavbar currentHero={currentHero}/>
      </section>
    )
  );
};

export default HeroPage;
