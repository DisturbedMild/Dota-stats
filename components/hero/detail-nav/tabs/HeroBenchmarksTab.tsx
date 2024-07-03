"use client";

import HeroBenchmarks from "@components/hero/benchmark/HeroBenchmarks";
import {useEffect, useState} from "react";
import {API} from "@/services/api";
import {IHeroBenchmarks} from "@/services/api/endpoints/types";
import {HeroDetailsTabList} from "@components/hero/detail-nav/HeroDetailsTabList";
import {Skeleton} from "@mui/material";

const HeroBenchmarkTab = ({currentHero}: HeroDetailsTabList) => {
  const [heroBenchmarks, setHeroBenchmarks] = useState<IHeroBenchmarks | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (currentHero) {
      API.heroes
        .geHeroBenchmarks(currentHero.id)
        .then((data) => setHeroBenchmarks(data))
        .catch(() => {})
        .finally(() => setIsLoading(false));
      ;
    }
  }, [currentHero]);

  return (
      <>
        {isLoading && <Skeleton variant="rectangular" width="100%" height="400px" />}
        {!isLoading && heroBenchmarks && <HeroBenchmarks result={heroBenchmarks.result}/>}
      </>
  )
}

export default HeroBenchmarkTab;
