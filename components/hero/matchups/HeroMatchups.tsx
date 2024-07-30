"use client";

import { useEffect, useState } from "react";

import HeroMatchupsItem from "@/components/hero/matchups/HeroMatchupsItem";
import { SortedHeroMatchup } from "@/types/index";

enum Sorting {
  BY_GAMES,
  BY_WINRATE,
  BY_ADVANTAGE,
}

enum Toggle {
  ASC = "ascending",
  DESC = "descending",
}

interface THeroMatchupProps {
  calculatedHeroMatchupsWinrateWithAdvantage: SortedHeroMatchup[];
}

const HeroMatchups = ({
  calculatedHeroMatchupsWinrateWithAdvantage,
}: THeroMatchupProps) => {
  const [sortedHeroMatchups, setSortedHeroMatchups] = useState(
    calculatedHeroMatchupsWinrateWithAdvantage,
  );
  const [sortBy, setSortBy] = useState<Sorting | null>(null);
  const [orderBy, setOrderBy] = useState(Toggle.ASC);

  const handleSorting = (sorting: Sorting) => {
    if (sortBy === sorting) {
      setOrderBy((prevState) =>
        prevState === Toggle.ASC ? Toggle.DESC : Toggle.ASC,
      );
      // setSortBy(null);
    } else {
      setSortBy(sorting);
      setOrderBy(Toggle.ASC);
    }
  };

  useEffect(() => {
    switch (sortBy) {
      case Sorting.BY_WINRATE:
        orderBy === Toggle.DESC
          ? setSortedHeroMatchups((prevState) =>
              prevState.sort((a, b) => b.winrate - a.winrate),
            )
          : setSortedHeroMatchups((prevState) =>
              prevState.sort((a, b) => a.winrate - b.winrate),
            );
      case Sorting.BY_ADVANTAGE:
        orderBy === Toggle.DESC
          ? setSortedHeroMatchups((prevState) =>
              prevState.sort((a, b) => b.advantage - a.advantage),
            )
          : setSortedHeroMatchups((prevState) =>
              prevState.sort((a, b) => a.advantage - b.advantage),
            );
      case Sorting.BY_GAMES:
        orderBy === Toggle.DESC
          ? setSortedHeroMatchups((prevState) =>
              prevState.sort((a, b) => b.games_played - a.games_played),
            )
          : setSortedHeroMatchups((prevState) =>
              prevState.sort((a, b) => a.games_played - b.games_played),
            );
    }
  }, [sortBy, orderBy]);

  return (
    <>
      <h3 className="mb-3 text-[#ffffff99] text-xls">
        <span className="font-medium text-[#ffffffde]">Recent</span> Data from
        professional matches
      </h3>
      <article className="rounded border-amber-50/50 border border-gray-300/10">
        <header className="flex px-6 py-2 rounded-t text-white uppercase bg-gradient-to-r from-secondary to-teal">
          <div className="w-6/12 text-base">HERO</div>
          <div
            className="w-2/12 text-base text-center cursor-pointer"
            onClick={() => handleSorting(Sorting.BY_GAMES)}
          >
            GAMES
          </div>
          <div
            className="w-2/12 text-base text-center cursor-pointer"
            onClick={() => handleSorting(Sorting.BY_WINRATE)}
          >
            WIN %
          </div>
          <div
            className="w-2/12 text-base text-center cursor-pointer"
            onClick={() => handleSorting(Sorting.BY_ADVANTAGE)}
          >
            ADVANTAGE
          </div>
        </header>
        {sortedHeroMatchups &&
          sortedHeroMatchups.map((matchup: SortedHeroMatchup) => (
            <HeroMatchupsItem
              key={matchup.hero_id}
              id={matchup.hero_id}
              games={matchup.games_played}
              wins={matchup.wins}
            />
          ))}
      </article>
    </>
  );
};

export default HeroMatchups;
