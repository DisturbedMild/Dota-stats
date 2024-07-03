"use client";

import MatchesDuration from "@components/hero/match-duration/MatchesDuration";
import TabItem from "@components/ui/tablist/TabItem";
import {useEffect, useState} from "react";
import {API} from "@/services/api";
import {IMatchDuration} from "@/services/api/endpoints/types";
import {HeroDetailsTabList} from "@components/hero/detail-nav/HeroDetailsTabList";
import {Skeleton} from "@mui/material";

const HeroMatchesDurationTab = ({currentHero}: HeroDetailsTabList) => {
  const [heroMatchesDuration, setHeroMatchesDuration] = useState<IMatchDuration[] | []>([]);
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
