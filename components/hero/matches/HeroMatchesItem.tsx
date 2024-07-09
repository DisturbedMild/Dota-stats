"use client";

import {useMemo} from "react";

import {convertTime} from "@/common/utils/convertTime";
import {HeroMatch} from "@/types/index";

type HeroMatchesItemProps = {
  match: HeroMatch
}

type calcKDAProps = Pick<HeroMatch, "kills" | "assists" | "deaths">;

const calcKDALineWidth = ({kills, assists, deaths}: calcKDAProps): {
  killsPercentage: number,
  assistsPercentage: number
  deathsPercentage: number
} => {
  const sum = kills + assists + deaths;
  const killsPercentage = Number((kills * 100 / sum).toFixed(0)),
    assistsPercentage = Number((assists * 100 / sum).toFixed(0)),
    deathsPercentage = Number((deaths * 100 / sum).toFixed(0));

  return {killsPercentage, assistsPercentage, deathsPercentage};
};

const HeroMatchesItem = ({match}: HeroMatchesItemProps) => {
  const matchDuration = convertTime(match.duration);
  const {kills, assists, deaths} = match;

  const KDAPercentages = useMemo(() => calcKDALineWidth({kills, assists, deaths}), [kills, assists, deaths]);;

  return (
    <div className="flex items-center px-6 py-2 border-t border-b border-gray-200/10">
      <div className="w-3/12 text-xls">{match.account_id}</div>
      <div className="flex flex-col w-2/12 text-ice">
        <span className="text-xls">{matchDuration.minutes}:{matchDuration.seconds}</span>
        <span className="text-xs ">{match.radiant ? "Radiant" : "Dire"}</span>
      </div>
      <div className="flex flex-col w-4/12 text-xls">
        <span
          className={match.radiant_win ? "text-success" : "text-error"}>{match.radiant_win ? "Win Match" : "Lost Match"}</span>
        <span className="text-[#ffffff99] text-xs">{match.league_name}</span>
      </div>
      <div className="w-3/12 text-xls">
        <div className="flex">
          <div className="w-4/12">{match.kills}</div>
          <div className="w-4/12">{match.deaths}</div>
          <div className="w-4/12">{match.assists}</div>
        </div>
        <div className="w-full flex mt-2">
          <span className={`inline-block h-1 bg-success`} style={{width:`${KDAPercentages.killsPercentage}%`}}></span>
          <span className={`inline-block h-1 bg-error`} style={{width:`${KDAPercentages.deathsPercentage}%`}}></span>
          <span className={`inline-block h-1 bg-[#ffffff99]`} style={{width:`${KDAPercentages.assistsPercentage}%`}}></span>
        </div>
      </div>
    </div>
  )
}

export default HeroMatchesItem;
