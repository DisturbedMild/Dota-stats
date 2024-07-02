"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";

export type Hero = {
  attack_type: string;
  id: number;
  legs: number;
  localized_name: string;
  name: string;
  primary_attr: string;
  roles: [];
};

const fetchHeroes = async () => {
  const response = await fetch("https://api.opendota.com/api/heroes");

  if (!response.ok) {
    throw new Error("Something went wrong with heroes");
  }

  return response.json();
};

const filterHeroes = (heroes: Hero[]) => {
  const sortedHeroes = heroes.sort((a: Hero, b: Hero) =>
    a.localized_name.localeCompare(b.localized_name)
  );

  return sortedHeroes;
};

const HeroesPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["heroes"],
    queryFn: fetchHeroes,
  });

  if (error) {
    return <div>Error occured</div>;
  }

  if (isPending) {
    return <div>Loading....</div>;
  }

  const heroes = filterHeroes(data);

  return (
    <>
      <h1 className="text-2xl text-white mb-4">Heroes:</h1>
      <div className="grid grid-cols-8 gap-2 text-white">
        {heroes.map((item: Hero) => {
          const imageSrc = `/heroes/${item.localized_name
            .replaceAll(" ", "_")
            .toLocaleLowerCase()}.png`;

          return (
            <div
              key={item.id}
              className="relative group transition-all hover:scale-110"
            >
              <Link
                href={`/heroes/${item.localized_name.replaceAll(" ", "_")}`}
              >
                <Image
                  src={imageSrc}
                  alt={item.localized_name}
                  width={256}
                  height={144}
                />
                <div
                  className="absolute -bottom-2 left-0 flex px-2 items-center z-10 w-full h-8 text-xl transition-all bg-neutral-900/70 opacity-0 group-hover:bottom-0 group-hover:opacity-100"
                  key={item.id}
                >
                  {item.localized_name}
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
