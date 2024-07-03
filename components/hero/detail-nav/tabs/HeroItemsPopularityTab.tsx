"use client";

import HeroItems from "@components/hero/items/HeroItems";
import {useEffect, useState} from "react";
import {IHeroItemsPopularity} from "@/services/api/endpoints/types";
import {API} from "@/services/api";
import {HeroDetailsTabList} from "@components/hero/detail-nav/HeroDetailsTabList";
import {Skeleton} from "@mui/material";

const HeroItemsPopularityTab = ({currentHero}: HeroDetailsTabList) => {
  const [heroItemsPopularity, setHeroItemsPopularity] = useState<IHeroItemsPopularity | null>(null);
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
