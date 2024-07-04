"use client";

import {API} from "@/services/api";
import {useParams} from "next/navigation";
import React, {useEffect, useState} from "react";
import {
  IHeroStats,
} from "@/services/api/endpoints/types";
import HeroProfile from "@components/hero/HeroProfile";
import HeroDetails from "@components/hero/HeroDetails";
import HeroDetailsNavbar from "@components/hero/detail-nav/HeroDetailsTabList";

const getHero = (heroes: IHeroStats[] | null, name: string) => {
  if (heroes === null) {
    return;
  }
  return heroes.find((hero: IHeroStats) => {
    const heroName = hero.localized_name.replaceAll(" ", "_");

    if (heroName === name) return hero;
  });
};

const HeroPage = () => {
  const {hero}: { hero: string } = useParams();
  const [heroStats, setHeroStats] = useState<IHeroStats[] | null>(null);
  const currentHero = getHero(heroStats, hero);

  useEffect(() => {
    API.heroes
      .getHeroStats()
      .then((data) => {
        setHeroStats(data);
      })
      .catch(() => {
      });
  }, []);

  return (
    <section className="mx-auto w-10/12">
      <HeroProfile currentHero={currentHero}/>
      {currentHero && <HeroDetails currentHero={currentHero}/>}
      <HeroDetailsNavbar currentHero={currentHero}/>
    </section>
  );
};

export default HeroPage;
