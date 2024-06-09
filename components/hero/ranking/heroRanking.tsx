import {IHeroPlayersRanking, IHeroPlayerRanking} from "@/services/api/endpoints/types";
import HeroRankingItem from "./heroRankingItem";

type THeroRankingProps = IHeroPlayersRanking

const HeroRanking = ({rankings}: THeroRankingProps) => {
  return (
    <article className="rounded border-amber-50/50 border border-gray-300/10">
      <header className="flex px-6 py-2 rounded-t text-white uppercase bg-gradient-to-r from-[#020024] to-[#2da65c]">
        <div className="w-3/12 text-base">RANK</div>
        <div className="w-7/12 text-base">NAME</div>
        <div className="w-2/12 text-base">SCORE</div>
      </header>
      <div>
        {rankings.map((player: IHeroPlayerRanking, index) =>
          <HeroRankingItem
            key={player.account_id}
            name={player.personaname}
            avatar={player.avatar}
            score={player.score}
            rank={index + 1}
            tier={player.rank_tier}/>)}
      </div>
    </article>
  )
};

export default HeroRanking;
