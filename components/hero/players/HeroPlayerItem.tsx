"use client";

import { calculateWilsonScore } from "@/common/utils/calculateWilsonScore";

type HeroPlayerProps = {
  id: number;
  games: number;
  wins: number;
};

const HeroPlayerItem = ({ id, games, wins }: HeroPlayerProps) => {
  return (
    <div className="flex items-center px-6 py-2 border-t border-b border-gray-200/10 rounded-t text-xls text-[#ffffff99]">
      <div className="w-6/12 text-base text-blue-400">{id}</div>
      <div className="w-2/12 text-base text-center">{games}</div>
      <div className="w-2/12 text-base text-center">
        {((wins * 100) / games).toFixed(2)}
      </div>
      <div className="w-2/12 text-base text-center">
        {calculateWilsonScore(wins, games) + 1}
      </div>
    </div>
  );
};

export default HeroPlayerItem;
