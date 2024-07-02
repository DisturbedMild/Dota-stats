import HeroMatchupsItem from "@components/hero/matchups/heroMatchupsItem";
import {useContext, useState, useReducer, useEffect} from "react";
import {APIContext} from "@/common/context/api-context";
import {ISortedHeroMatchup} from "@/services/api/endpoints/types";

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
  heroMatchups: ISortedHeroMatchup[];
}

const HeroMatchups = ({heroMatchups}: THeroMatchupProps) => {
  const [sortedHeroMatchups, setSortedHeroMatchups] = useState(heroMatchups);
  const [sortBy, setSortBy] = useState<Sorting | null>(null);
  const [orderBy, setOrderBy] = useState(Toggle.ASC);

  const handleSorting = (sorting: Sorting) => {
    if (sortBy === sorting) {
      setOrderBy(prevState => prevState === Toggle.ASC ? Toggle.DESC : Toggle.ASC);
    } else {
      setSortBy(sorting);
      setOrderBy(Toggle.ASC);
    }
  }

  useEffect(() => {
    switch (sortBy) {
      case Sorting.BY_WINRATE:
          orderBy === Toggle.DESC ?
            setSortedHeroMatchups(prevState => prevState.sort((a, b) => b.winrate - a.winrate)) :
            setSortedHeroMatchups(prevState => prevState.sort((a, b) => a.winrate - b.winrate))
        break;
      case Sorting.BY_ADVANTAGE:
        orderBy === Toggle.DESC ?
          setSortedHeroMatchups(prevState => prevState.sort((a, b) => b.advantage - a.advantage)) :
          setSortedHeroMatchups(prevState => prevState.sort((a, b) => a.advantage - b.advantage))
        break;
      case Sorting.BY_GAMES:
        orderBy === Toggle.DESC ?
          setSortedHeroMatchups(prevState => prevState.sort((a, b) => b.games_played - a.games_played)) :
          setSortedHeroMatchups(prevState => prevState.sort((a, b) => a.games_played - b.games_played))
    }
    // if (sortBy === null) {
    //   setSortedHeroMatchups(prevState => prevState.sort((a, b) => a.games_played - b.games_played))
    // }
    // console.log(orderBy, Toggle.ASC, sortedHeroMatchups)
  }, [sortBy, orderBy]);

  const {heroes} = useContext(APIContext);

  return (
    <>
      <h3 className="mb-3 text-[#ffffff99] text-xls"><span className="font-medium text-[#ffffffde]">
        Recent</span> Data from professional matches
      </h3>
      <article className="rounded border-amber-50/50 border border-gray-300/10">
        <header className="flex px-6 py-2 rounded-t text-white uppercase bg-gradient-to-r from-[#020024] to-[#2da65c]">
          <div className="w-6/12 text-base">HERO</div>
          <div className="w-2/12 text-base text-center cursor-pointer"
               onClick={() => handleSorting(Sorting.BY_GAMES)}>GAMES
          </div>
          <div className="w-2/12 text-base text-center cursor-pointer"
               onClick={() => handleSorting(Sorting.BY_WINRATE)}>WIN %
          </div>
          <div className="w-2/12 text-base text-center cursor-pointer"
               onClick={() => handleSorting(Sorting.BY_ADVANTAGE)}>ADVANTAGE
          </div>
        </header>
        {sortedHeroMatchups && heroes && sortedHeroMatchups.map((matchup: ISortedHeroMatchup) =>
          <HeroMatchupsItem
            key={matchup.hero_id}
            heroes={heroes}
            id={matchup.hero_id}
            games={matchup.games_played}
            wins={matchup.wins}/>
        )}
      </article>
    </>
  )
};

export default HeroMatchups;
