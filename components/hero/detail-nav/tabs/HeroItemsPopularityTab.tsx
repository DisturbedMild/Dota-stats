"use client";

import {Skeleton} from "@mui/material";

import {useHeroItemsPopularity} from "@/common/api";
import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroItems from "@/components/hero/items/HeroItems";

const HeroItemsPopularityTab = ({currentHero}: HeroDetailsTabList) => {
  const {isLoading, data: heroItemsPopularity, error} = useHeroItemsPopularity(currentHero.id)

  if (isLoading) return (
    <>
      <Skeleton/>
      <div className="flex gap-2 mt-2">
        <Skeleton variant="rectangular" width="25%" height="250px"/>
        <Skeleton variant="rectangular" width="25%" height="250px"/>
        <Skeleton variant="rectangular" width="25%" height="250px"/>
        <Skeleton variant="rectangular" width="25%" height="250px"/>
      </div>
    </>
  )

  if (error) return <p>Something went wrong, try again later</p>

  return <HeroItems heroItemsPopularity={heroItemsPopularity}/>
}

export default HeroItemsPopularityTab;
