import HeroMatchupsItem from "@components/hero/matchups/heroMatchupsItem";
import {useContext} from "react";
import {APIContext} from "@/common/context/api-context";
import {IMatchup} from "@/services/api/endpoints/types";

type THeroMatchups = {
  heroMatchups: IMatchup[];
}

const HeroMatchups = ({heroMatchups}: THeroMatchups) => {
  const { heroes } = useContext(APIContext);
  const sortedHeroes = heroMatchups.sort((a, b) => b.games_played - a.games_played);
  return (
    <>
      <h3 className="mb-3 text-[#ffffff99] text-xls"><span className="font-medium text-[#ffffffde]">Recent</span>   Data from professional matches</h3>
      <article className="rounded border-amber-50/50 border border-gray-300/10">
        <header className="flex px-6 py-2 rounded-t text-white uppercase bg-gradient-to-r from-[#020024] to-[#2da65c]">
          <div className="w-6/12 text-base">HERO</div>
          <div className="w-2/12 text-base">GAMES</div>
          <div className="w-2/12 text-base">WIN %</div>
          <div className="w-2/12 text-base">ADVANTAGE</div>
        </header>
        {sortedHeroes && heroes && sortedHeroes.map((matchup: IMatchup) => <HeroMatchupsItem key={matchup.hero_id} heroes={heroes} id={matchup.hero_id} games={matchup.games_played} wins={matchup.wins} />)}
      </article>
    </>
  )
};

export default HeroMatchups;
