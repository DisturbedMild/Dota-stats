"use client";

import {Skeleton} from "@mui/material";

import {useHeroBenchmarks} from "@/common/api";
import HeroBenchmarksList from "@/components/hero/benchmark/HeroBenchmarksList";
import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";

const HeroBenchmarkTab = ({currentHero}: HeroDetailsTabList) => {
  const {isLoading, data: heroBenchmarks, error} = useHeroBenchmarks(currentHero.id)

  if (isLoading) return <Skeleton variant="rectangular" width="100%" height="400px" />
  if (error) return <p>Something went wrong, try again later...</p>

  return <HeroBenchmarksList result={heroBenchmarks.result}/>
}

export default HeroBenchmarkTab;
