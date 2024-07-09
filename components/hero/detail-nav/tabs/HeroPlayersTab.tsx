"use client";

import {useEffect, useState} from "react";
import {Skeleton} from "@mui/material";

import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroPlayers from "@/components/hero/players/HeroPlayers";
import {API} from "@/services/api";
import {HeroPlayer} from "@/types/index";

const HeroPlayersTab = ({currentHero}: HeroDetailsTabList) => {
  const [heroPlayers, setHeroPlayers] = useState<HeroPlayer[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroPlayers(currentHero.id)
        .then((data) => setHeroPlayers(data))
        .catch(() => {})
        .finally(() => setIsLoading(false));
      ;
    }
  }, [currentHero]);

  return (
    <>
      {isLoading && <Skeleton variant="rectangular" width="100%" height="400px" />}
      {!isLoading && <HeroPlayers heroPlayers={heroPlayers} />}
    </>
  )
}

export default HeroPlayersTab;
