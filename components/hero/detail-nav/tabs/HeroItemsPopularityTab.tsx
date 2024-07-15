"use client";

import {Skeleton} from "@mui/material";

import {useReactQueryRequest} from "@/common/hooks/useReactQueryRequest";
import {HeroDetailsTabList} from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroItems from "@/components/hero/items/HeroItems";

const HeroItemsPopularityTab = ({currentHero}: HeroDetailsTabList) => {
  const {isLoading, data: heroItemsPopularity, error} =
    useReactQueryRequest("items-popularity", `https://api.opendota.com/api/heroes/${currentHero.id}/itemPopularity`);

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
