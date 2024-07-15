"use client";

import {Skeleton} from "@mui/material";

import {useReactQueryRequest} from "@/common/hooks/useReactQueryRequest";
import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroMatches from "@/components/hero/matches/HeroMatches";
import {Match} from "@/types/index";


const HeroMatchesTab = ({currentHero}: HeroDetailsTabList) => {
  const {isLoading, data: heroMatches, error}: {data: Match[]} =
    useReactQueryRequest("hero-matches", `https://api.opendota.com/api/heroes/${currentHero.id}/matches`);

  if (isLoading) return <Skeleton variant="rectangular" width="100%" height="400px" />
  if (error) return <p>Something went wrong, try again later</p>

  return <HeroMatches matches={heroMatches}/>
}

export default HeroMatchesTab;
