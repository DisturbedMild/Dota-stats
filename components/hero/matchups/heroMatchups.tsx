import HeroMatchupsItem from "@components/hero/matchups/heroMatchupsItem";
import {useContext, useState, useReducer} from "react";
import {APIContext} from "@/common/context/api-context";
import {ISortedHeroMatchup} from "@/services/api/endpoints/types";

enum heroMatchupActionKind {
  SORT_BY_GAMES = 'SORT_BY_GAMES',
  SORT_BY_WINRATE = 'SORT_BY_WINRATE',
  SORT_BY_ADVANTAGE = 'SORT_BY_ADVANTAGE',
}

interface heroMatchupAction {
  type: heroMatchupActionKind,
  payload: boolean
}

interface THeroMatchupProps {
  heroMatchups: ISortedHeroMatchup[];
}

const reducer = (state: ISortedHeroMatchup[], action: heroMatchupAction) => {
  const {type, payload} = action;
  switch (type) {
    case heroMatchupActionKind.SORT_BY_WINRATE:
      return payload ?
        state.sort((a, b) => a.winrate - b.winrate) :
        state.sort((a, b) => b.winrate - a.winrate)

    case heroMatchupActionKind.SORT_BY_ADVANTAGE:
      return payload ?
        state.sort((a, b) => a.advantage - b.advantage) :
        state.sort((a, b) => b.advantage - a.advantage)

    case heroMatchupActionKind.SORT_BY_GAMES:
      return payload ?
        state.sort((a, b) => a.games_played - b.games_played) :
        state.sort((a, b) => b.games_played - a.games_played)
  }
}

const HeroMatchups = ({heroMatchups}: THeroMatchupProps) => {
  const [sortedByGames, setSortedByGames] = useState(false);
  const [sortedByWinrate, setSortedByWinrate] = useState(false);
  const [sortedByAdvantage, setSortedByAdvantage] = useState(false);
  const [sortedHeroes, dispatch] = useReducer(reducer, heroMatchups)

  const handleGamesSorting = () => {
    setSortedByGames(sortedByGames => !sortedByGames);
    dispatch({type: heroMatchupActionKind.SORT_BY_GAMES, payload: sortedByGames})
  }

  const handleWinrateSorting = () => {
    setSortedByWinrate(sortedByWinrate => !sortedByWinrate);
    dispatch({type: heroMatchupActionKind.SORT_BY_WINRATE, payload: sortedByWinrate})
  }

  const handleAdvantageSorting = () => {
    setSortedByAdvantage(sortedByAdvantage => !sortedByAdvantage);
    dispatch({type: heroMatchupActionKind.SORT_BY_ADVANTAGE, payload: sortedByAdvantage})
  }

  const {heroes} = useContext(APIContext);

  return (
    <>
      <h3 className="mb-3 text-[#ffffff99] text-xls"><span className="font-medium text-[#ffffffde]">
        Recent</span> Data from professional matches
      </h3>
      <article className="rounded border-amber-50/50 border border-gray-300/10">
        <header className="flex px-6 py-2 rounded-t text-white uppercase bg-gradient-to-r from-[#020024] to-[#2da65c]">
          <div className="w-6/12 text-base">HERO</div>
          <div className="w-2/12 text-base text-center cursor-pointer" onClick={handleGamesSorting}>GAMES</div>
          <div className="w-2/12 text-base text-center cursor-pointer" onClick={handleWinrateSorting}>WIN %</div>
          <div className="w-2/12 text-base text-center cursor-pointer" onClick={handleAdvantageSorting}>ADVANTAGE</div>
        </header>
        {sortedHeroes && heroes && sortedHeroes.map((matchup: ISortedHeroMatchup) =>
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
