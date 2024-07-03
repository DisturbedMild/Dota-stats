"use client";

import HeroPlayers from "@components/hero/players/HeroPlayers";
import {useEffect, useState} from "react";
import {API} from "@/services/api";
import {IHeroPlayer} from "@/services/api/endpoints/types";
import {HeroDetailsTabList} from "@components/hero/detail-nav/HeroDetailsTabList";
import {Skeleton} from "@mui/material";

const HeroPlayersTab = ({currentHero}: HeroDetailsTabList) => {
  const [heroPlayers, setHeroPlayers] = useState<IHeroPlayer[] | []>([]);
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
