// interface Props {}
"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";

type THero = {
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

const filterHeroes = (heroes: THero[]) => {
  const sortedHeroes = heroes.sort((a: THero, b: THero) =>
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
      <h1>Heroes</h1>
      <div className="grid grid-cols-8 gap-1 text-white">
        {heroes.map((item: THero) => {
          const imageSrc = `/heroes/${item.localized_name
            .replaceAll(" ", "_")
            .toLocaleLowerCase()}.png`;

          return (
            <Link
              key={item.id}
              href={`/heroes/${item.localized_name.replaceAll(" ", "_")}`}
              className="relative"
            >
              <Image
                src={imageSrc}
                alt={item.localized_name}
                width={256}
                height={144}
              />
              <div
                className="absolute bottom-0.5 left-2 z-10 text-xl"
                key={item.id}
              >
                {item.localized_name}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HeroesPage;
