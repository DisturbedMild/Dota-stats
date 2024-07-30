"use client";

import { useHeroMatchups } from "@/common/api";
import Spinner from "@/components/ui/loaders/Spinner";
import { HeroStats, Matchup } from "@/types/index";

type HeroShortDescriptionProps = {
  currentHero: HeroStats | undefined;
};

const HeroShortDescription = ({ currentHero }: HeroShortDescriptionProps) => {
  const {
    isLoading,
    data: heroMatchupsData,
    error,
  } = useHeroMatchups(currentHero!.id);

  const heroOverallWinrate = (games: Matchup[] | null): number => {
    if (games === null) {
      return 0;
    }
    const gamesPlayed = games?.reduce(
      (acc: { games: number; wins: number }, curr: Matchup) => {
        acc.games += curr.games_played;
        acc.wins += curr.wins;
        return acc;
      },
      { games: 0, wins: 0 },
    );

    return Number(((gamesPlayed?.wins / gamesPlayed?.games) * 100).toFixed(2));
  };

  const winrate = heroOverallWinrate(heroMatchupsData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong, try again later...</p>;

  return (
    <div className="text-lg text-white w-4/12">
      <h1 className="my-2 text-4xl font-bold">{currentHero?.localized_name}</h1>
      <div>
        {currentHero?.attack_type} -{" "}
        <span className="uppercase text-xs text-gray-500">
          {currentHero?.roles.join(", ")}
        </span>
      </div>
      <div
        className={`flex items-center gap-2 my-3 text-xs uppercase 
        ${Number(winrate) === 0 ? ("text-white" ? Number(winrate) < 50 : "text-error") : "text-success"}`}
      >
        Winrate:{" "}
        {winrate === 0 ? (
          <Spinner w={12} h={12} lineColor={"#00da96"} />
        ) : (
          winrate + "%"
        )}
      </div>
    </div>
  );
};

export default HeroShortDescription;
