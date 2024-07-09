"use client";

import {useEffect, useState} from "react";
import {Skeleton} from "@mui/material";

import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroMatches from "@/components/hero/matches/HeroMatches";
import {API} from "@/services/api";
import {Match} from "@/types/index";


const HeroMatchesTab = ({currentHero}: HeroDetailsTabList) => {
  const [heroMatches, setHeroMatches] = useState<Match[] | []>([]);
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
