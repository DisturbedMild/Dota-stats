"use client";

import {useEffect, useState} from "react";
import {Skeleton} from "@mui/material";

import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroRanking from "@/components/hero/ranking/HeroRanking";
import {API} from "@/services/api";
import {PlayersHeroRanking} from "@/types/index";



const HeroRankingTab = ({currentHero}: HeroDetailsTabList) => {
  const [playersHeroRanking, setPlayersHeroRanking] = useState<PlayersHeroRanking | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroPlayersRanking(currentHero.id)
        .then((data) => setPlayersHeroRanking(data))
        .catch(() => {})
        .finally(() => setIsLoading(false));
      ;
    }
  }, [currentHero]);

  return (
    <>
      {isLoading && <Skeleton variant="rectangular" width="100%" height="400px" />}
      {!isLoading && playersHeroRanking && <HeroRanking rankings={playersHeroRanking.rankings}/>}
    </>
  )
}

export default HeroRankingTab;
