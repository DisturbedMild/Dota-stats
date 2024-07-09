"use client";

import {useEffect, useState} from "react";
import {Skeleton} from "@mui/material";

import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroItems from "@/components/hero/items/HeroItems";
import {API} from "@/services/api";
import {HeroItemsPopularity} from "@/types/index";

const HeroItemsPopularityTab = ({currentHero}: HeroDetailsTabList) => {
  const [heroItemsPopularity, setHeroItemsPopularity] = useState<HeroItemsPopularity | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentHero) {
      API.heroes
        .getHeroItemsPopularity(currentHero.id)
        .then((data) => setHeroItemsPopularity(data))
        .catch(() => {})
        .finally(() => setIsLoading(false));
    }
  }, [currentHero]);
  return (
    <>
      {isLoading && (
        <>
          <Skeleton/>
          <div className="flex gap-2 mt-2">
            <Skeleton variant="rectangular" width="25%" height="250px"/>
            <Skeleton variant="rectangular" width="25%" height="250px"/>
            <Skeleton variant="rectangular" width="25%" height="250px"/>
            <Skeleton variant="rectangular" width="25%" height="250px"/>
          </div>
        </>
      )}
      {!isLoading && heroItemsPopularity && <HeroItems heroItemsPopularity={heroItemsPopularity}/>}
    </>
  )
}

export default HeroItemsPopularityTab;
