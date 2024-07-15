"use client";

import {Skeleton} from "@mui/material";

import {useReactQueryRequest} from "@/common/hooks/useReactQueryRequest";
import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import MatchesDuration from "@/components/hero/match-duration/MatchesDuration";
import {MatchDuration} from "@/types/index";

const HeroMatchesDurationTab = ({currentHero}: HeroDetailsTabList) => {
  const {isLoading, data: heroMatchesDuration, error}: {data: MatchDuration[]} =
    useReactQueryRequest("matches-duration", `https://api.opendota.com/api/heroes/${currentHero.id}/durations`)

  if (isLoading) return <Skeleton variant="rectangular" width="100%" height="400px" />
  if (error) return <p>Something went wrong, try again later</p>

  return <MatchesDuration heroMatchesDuration={heroMatchesDuration} />
}

export default HeroMatchesDurationTab;
