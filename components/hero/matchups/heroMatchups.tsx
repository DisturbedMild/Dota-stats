import HeroMatchupsItem from "@components/hero/matchups/heroMatchupsItem";
import {useContext, useState} from "react";
import {APIContext} from "@/common/context/api-context";
import {IMatchup} from "@/services/api/endpoints/types";
import {calculateWilsonScore} from "@/common/utils/calculateWilsonScore";

type THeroMatchups = {
  heroMatchups: IMatchup[];
}

interface ISortedHeroMatchups extends IMatchup {
  winrate: number;
  advantage: number
}


const HeroMatchups = ({heroMatchups}: THeroMatchups) => {
  const arrWithWinrate = heroMatchups.map((heroMatchup) => {
    return {
      winrate: Number((heroMatchup.wins * 100 / heroMatchup.games_played).toFixed(2)),
      advantage: calculateWilsonScore(heroMatchup.wins, heroMatchup.games_played),
      ...heroMatchup
    }
  })
  const sorted = arrWithWinrate.sort((a, b) => b.games_played - a.games_played);
  const [sortedHeroes, setSortedHeroes] = useState<ISortedHeroMatchups[]>(sorted);
  const [sortedByWinrate, setSortedByWinrate] = useState(false);
  const [sortedByAdvantage, setSortedByAdvantage] = useState(false);


  const handleWinrateSorting = () => {
    setSortedByWinrate(sortedByWinrate => !sortedByWinrate);
    setSortedHeroes((sortedHeroes) =>
      sortedByWinrate ?
        sortedHeroes.sort((a, b) => a.winrate - b.winrate) :
        sortedHeroes.sort((a, b) => b.winrate - a.winrate)
    )
  }

  const handleAdvantageSorting = () => {
    setSortedByAdvantage(sortedByAdvantage => !sortedByAdvantage);
    setSortedHeroes((sortedHeroes) =>
      sortedByAdvantage ?
        sortedHeroes.sort((a, b) => a.advantage - b.advantage) :
        sortedHeroes.sort((a, b) => b.advantage - a.advantage)
    )
  }

  const {heroes} = useContext(APIContext);

  return (
    <>
      <h3 className="mb-3 text-[#ffffff99] text-xls"><span className="font-medium text-[#ffffffde]">Recent</span> Data
        from professional matches</h3>
      <article className="rounded border-amber-50/50 border border-gray-300/10">
        <header className="flex px-6 py-2 rounded-t text-white uppercase bg-gradient-to-r from-[#020024] to-[#2da65c]">
          <div className="w-6/12 text-base">HERO</div>
          <div className="w-2/12 text-base text-center">GAMES</div>
          <div className="w-2/12 text-base text-center cursor-pointer" onClick={handleWinrateSorting}>WIN %</div>
          <div className="w-2/12 text-base text-center cursor-pointer" onClick={handleAdvantageSorting}>ADVANTAGE</div>
        </header>
        {sortedHeroes && heroes && sortedHeroes.map((matchup: IMatchup) =>
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
