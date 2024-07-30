"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

import { Hero } from "@/common/types/hero/hero";

const fetchHeroes = async () => {
  const response = await fetch("https://api.opendota.com/api/heroes");

  if (!response.ok) {
    throw new Error("Something went wrong with heroes");
  }
  return response.json();
};

const filterHeroes = (heroes: Hero[]) => {
  return heroes.sort((currentHero: Hero, nextHero: Hero) =>
    currentHero.localized_name.localeCompare(nextHero.localized_name),
  );
};

const setHeroImageSrc = (name: string): string =>
  `/heroes/${name.replaceAll(" ", "_").toLocaleLowerCase()}.png`;

const HeroesPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["heroes"],
    queryFn: fetchHeroes,
  });

  if (error) return <div>Error occurred</div>;
  if (isPending) return <div>Loading....</div>;

  const heroes = filterHeroes(data);

  return (
    <>
      <h1 className="text-2xl text-white mb-4">Heroes:</h1>
      <div className="grid grid-cols-8 gap-2 text-white">
        {heroes.map(({ id, localized_name }: Hero) => {
          const imageSrc = setHeroImageSrc(localized_name);

          return (
            <div
              key={id}
              className="relative group transition-all hover:scale-110"
            >
              <Link href={`/heroes/${id}`}>
                <Image
                  src={imageSrc}
                  alt={localized_name}
                  width={256}
                  height={144}
                />
                <div
                  className="absolute -bottom-2 left-0 flex px-2 items-center z-10 w-full h-8 text-xl transition-all bg-neutral-900/70 opacity-0 group-hover:bottom-0 group-hover:opacity-100"
                  key={id}
                >
                  {localized_name}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeroesPage;
