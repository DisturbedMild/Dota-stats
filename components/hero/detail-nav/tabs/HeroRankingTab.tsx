"use client";

import TabItem from "@components/ui/tablist/TabItem";
import HeroRanking from "@components/hero/ranking/HeroRanking";
import {useEffect, useState} from "react";
import {IHeroPlayersRanking} from "@/services/api/endpoints/types";
import {API} from "@/services/api";
import {HeroDetailsTabList} from "@components/hero/detail-nav/HeroDetailsTabList";
import {Skeleton} from "@mui/material";



const HeroRankingTab = ({currentHero}: HeroDetailsTabList) => {
  const [heroPlayersRanking, setHeroPlayersRanking] = useState<IHeroPlayersRanking | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroPlayersRanking(currentHero.id)
        .then((data) => setHeroPlayersRanking(data))
        .catch(() => {})
        .finally(() => setIsLoading(false));
      ;
    }
  }, [currentHero]);

  return (
    <>
      {isLoading && <Skeleton variant="rectangular" width="100%" height="400px" />}
      {!isLoading && heroPlayersRanking && <HeroRanking rankings={heroPlayersRanking.rankings}/>}
    </>
  )
}

export default HeroRankingTab;
