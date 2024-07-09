"use client";

import {useEffect, useState} from "react";
import {Skeleton} from "@mui/material";

import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import MatchesDuration from "@/components/hero/match-duration/MatchesDuration";
import {API} from "@/services/api";
import {MatchDuration} from "@/types/index";

const HeroMatchesDurationTab = ({currentHero}: HeroDetailsTabList) => {
  const [heroMatchesDuration, setHeroMatchesDuration] = useState<MatchDuration[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroMatchDuration(currentHero.id)
        .then((data) => setHeroMatchesDuration(data))
        .catch(() => {})
        .finally(() => setIsLoading(false));
      ;
    }
  }, [currentHero]);

  return (
    <>
      {isLoading && <Skeleton variant="rectangular" width="100%" height="400px" />}
      {!isLoading && <MatchesDuration heroMatchesDuration={heroMatchesDuration} />}
    </>
  )
}

export default HeroMatchesDurationTab;
