"use client";

import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";

import HeroDetailsNavbar from "@/components/hero/detail-nav/HeroDetailsTabList";
import HeroDetails from "@/components/hero/HeroDetails";
import HeroProfile from "@/components/hero/profile/HeroProfile";
import {API} from "@/services/api";
import {HeroStats} from "@/types/hero/hero";

const getHero = (heroes: HeroStats[] | null, name: string) => {
  if (heroes === null) return null

  return heroes.find((hero: HeroStats) => {
    const heroName = hero.localized_name.replaceAll(" ", "_");

    if (heroName === name) return hero;
  });
};

const HeroPage = () => {
  const {hero}: { hero: string } = useParams();
  const [heroStats, setHeroStats] = useState<HeroStats[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const currentHero = getHero(heroStats, hero);

  useEffect(() => {
    API.heroes
      .getHeroStats()
      .then((data) => {
        setHeroStats(data);
      })
      .catch(() => {
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="mx-auto w-10/12">
      {currentHero && (
        <>
          <HeroProfile currentHero={currentHero}/>
          <HeroDetails currentHero={currentHero}/>
          <HeroDetailsNavbar currentHero={currentHero}/>
        </>
      )}
    </section>
  );
};

export default HeroPage;
