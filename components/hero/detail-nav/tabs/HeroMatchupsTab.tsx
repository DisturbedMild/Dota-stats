"use client";

import {useEffect, useState} from "react";
import {API} from "@/services/api";
import {ISortedHeroMatchup} from "@/services/api/endpoints/types";
import {HeroDetailsTabList} from "@components/hero/detail-nav/HeroDetailsTabList";
import HeroMatchups from "@components/hero/matchups/HeroMatchups";
import TabItem from "@components/ui/tablist/TabItem";
import {calculateWilsonScore} from "@/common/utils/calculateWilsonScore";
import {Skeleton} from "@mui/material";

const HeroMatchupsTab = ({currentHero}: HeroDetailsTabList) => {
  const [heroMatchups, setHeroMatchups] = useState<ISortedHeroMatchup[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroMatchups(currentHero.id)
        .then((data) => setHeroMatchups(() => {
          return data.map(heroMatchup => {
            return {
              winrate: Number((heroMatchup.wins * 100 / heroMatchup.games_played).toFixed(2)),
              advantage: calculateWilsonScore(heroMatchup.wins, heroMatchup.games_played),
              ...heroMatchup
            }
          })
        }))
        .catch(() => {})
        .finally(() => setIsLoading(false))
      ;
    }
  }, [currentHero]);
  return (
    <>
      {isLoading && <Skeleton variant="rectangular" width="100%" height="400px" />}
      {!isLoading && <HeroMatchups heroMatchups={heroMatchups}/>}
    </>
  )
}

export default HeroMatchupsTab;