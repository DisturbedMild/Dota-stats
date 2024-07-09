"use client";

import {PlayerHeroRanking,PlayersHeroRanking} from "@/types/index";

import HeroRankingItem from "./HeroRankingItem";

type HeroRankingProps = PlayersHeroRanking

const HeroRanking = ({rankings}: HeroRankingProps) => {
  return (
    <>
      <h3 className="mb-4 text-[#ffffff99] text-xls">
        <span className="font-medium text-[#ffffffde]">Rankings</span>
      </h3>
      <article className="rounded border-amber-50/50 border border-gray-300/10">
        <header className="flex px-6 py-2 rounded-t text-white uppercase bg-gradient-to-r from-secondary to-teal">
          <div className="w-3/12 text-base">RANK</div>
          <div className="w-7/12 text-base">NAME</div>
          <div className="w-2/12 text-base">SCORE</div>
        </header>
        <div>
          {rankings.map((player: PlayerHeroRanking, index) =>
            <HeroRankingItem
              key={player.account_id}
              name={player.personaname}
              avatar={player.avatar}
              score={player.score}
              rank={index + 1}
              tier={player.rank_tier}/>)}
        </div>
      </article>
    </>
  )
};

export default HeroRanking;
