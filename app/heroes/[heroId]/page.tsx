"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import { fetchData } from "@/common/utils/fetchData";
import HeroDetailsNavbar from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroDetails from "@/components/hero/HeroDetails";
import HeroProfile from "@/components/hero/profile/HeroProfile";
import { HeroStats } from "@/types/hero/hero";

const getHero = (heroes: HeroStats[] | null, id: number) => {
  if (heroes === null) return null;

  return heroes.find((hero: HeroStats) => {
    const heroId = hero.id;

    if (heroId === id) return hero;
  });
};

const HeroPage = () => {
  const { heroId }: { heroId: string } = useParams();
  const {
    isLoading,
    data: heroStats,
    error,
  } = useQuery<HeroStats[]>({
    queryKey: ["heroesStats"],
    queryFn: async () => fetchData("https://api.opendota.com/api/heroStats"),
  });

  const currentHero = heroStats && getHero(heroStats, Number(heroId));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <section className="mx-auto w-10/12">
      {currentHero && (
        <>
          <HeroProfile currentHero={currentHero} />
          <HeroDetails currentHero={currentHero} />
          <HeroDetailsNavbar currentHero={currentHero} />
        </>
      )}
    </section>
  );
};

export default HeroPage;
