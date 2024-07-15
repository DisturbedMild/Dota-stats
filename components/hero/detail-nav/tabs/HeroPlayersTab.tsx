"use client";

import {Skeleton} from "@mui/material";

import {useReactQueryRequest} from "@/common/hooks/useReactQueryRequest";
import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroPlayers from "@/components/hero/players/HeroPlayers";

const HeroPlayersTab = ({currentHero}: HeroDetailsTabList) => {
  const {isLoading, data: heroPlayers, error} =
    useReactQueryRequest("hero-players", `https://api.opendota.com/api/heroes/${currentHero.id}/players`)

  if (isLoading) return <Skeleton variant="rectangular" width="100%" height="400px" />
  if (error) return <p>Something went wrong, try again later...</p>

  return <HeroPlayers heroPlayers={heroPlayers} />
}

export default HeroPlayersTab;
