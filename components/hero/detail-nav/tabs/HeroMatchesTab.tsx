"use client";

import { Skeleton } from "@mui/material";

import { useHeroMatches } from "@/common/api";
import { HeroDetailsTabList } from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroMatches from "@/components/hero/matches/HeroMatches";

const HeroMatchesTab = ({ currentHero }: HeroDetailsTabList) => {
  const {
    isLoading,
    data: heroMatches,
    error,
  } = useHeroMatches(currentHero.id);

  if (isLoading)
    return <Skeleton variant="rectangular" width="100%" height="400px" />;
  if (error) return <p>Something went wrong, try again later</p>;

  return <HeroMatches matches={heroMatches} />;
};

export default HeroMatchesTab;
