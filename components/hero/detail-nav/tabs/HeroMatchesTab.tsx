"use client";

import HeroMatches from "@components/hero/matches/HeroMatches";
import TabItem from "@components/ui/tablist/TabItem";
import {useEffect, useState} from "react";
import {API} from "@/services/api";
import {IMatch} from "@/services/api/endpoints/types";
import {HeroDetailsTabList} from "@components/hero/detail-nav/HeroDetailsTabList";
import {Skeleton} from "@mui/material";


const HeroMatchesTab = ({currentHero}: HeroDetailsTabList) => {
  const [heroMatches, setHeroMatches] = useState<IMatch[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroMatches(currentHero.id)
        .then((data) => setHeroMatches(data))
        .catch(() => {})
        .finally(() => setIsLoading(false));
    }
  }, [currentHero]);

  return (
    <>
      {isLoading && <Skeleton variant="rectangular" width="100%" height="400px" />}
      {!isLoading && <HeroMatches matches={heroMatches}/>}
    </>
  )
}

export default HeroMatchesTab;
