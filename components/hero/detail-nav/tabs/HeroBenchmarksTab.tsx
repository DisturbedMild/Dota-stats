"use client";

import {useEffect, useState} from "react";
import {Skeleton} from "@mui/material";

import HeroBenchmarksList from "@/components/hero/benchmark/HeroBenchmarksList";
import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import {API} from "@/services/api";
import {HeroBenchmarks} from "@/types/index";

const HeroBenchmarkTab = ({currentHero}: HeroDetailsTabList) => {
  const [heroBenchmarks, setHeroBenchmarks] = useState<HeroBenchmarks | null>(null);
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
        {!isLoading && heroBenchmarks && <HeroBenchmarksList result={heroBenchmarks.result}/>}
      </>
  )
}

export default HeroBenchmarkTab;
