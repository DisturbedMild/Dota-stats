"use client";

import {Skeleton} from "@mui/material";

import {useHeroPlayers} from "@/common/api";
import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroPlayers from "@/components/hero/players/HeroPlayers";

const HeroPlayersTab = ({currentHero}: HeroDetailsTabList) => {
  const {isLoading, data: heroPlayers, error} = useHeroPlayers(currentHero.id)

  if (isLoading) return <Skeleton variant="rectangular" width="100%" height="400px" />
  if (error) return <p>Something went wrong, try again later...</p>

  return <HeroPlayers heroPlayers={heroPlayers} />
}

export default HeroPlayersTab;
