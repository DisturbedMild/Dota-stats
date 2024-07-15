"use client";

import {Skeleton} from "@mui/material";

import {useReactQueryRequest} from "@/common/hooks/useReactQueryRequest";
import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroRanking from "@/components/hero/ranking/HeroRanking";

const HeroRankingTab = ({currentHero}: HeroDetailsTabList) => {
  const {isLoading, data: playersHeroRanking, error} =
    useReactQueryRequest("players-hero-ranking", `https://api.opendota.com/api/rankings?hero_id=${currentHero.id}`);

  if (isLoading) return <Skeleton variant="rectangular" width="100%" height="400px" />
  if (error) return <p>Something went wrong, try again later...</p>

  return <HeroRanking rankings={playersHeroRanking.rankings}/>
}

export default HeroRankingTab;
