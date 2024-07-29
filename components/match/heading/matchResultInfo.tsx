import {useContext} from "react";

import {GAME_MODE} from "@/common/constants/constants";
import {MatchContext} from "@/common/context/match-context";
import {calculatedTimeFromLastMatch} from "@/common/utils/calucateTime";
import {convertTime} from "@/common/utils/convertTime";


const MatchResultInfo = () => {
  // @ts-expect-error: Unreachable code error
  const {radiant_score, dire_score, duration, start_time, game_mode} = useContext(MatchContext);
  // @ts-expect-error: Unreachable code error
  const replacedGameMod = GAME_MODE[game_mode].name.replace("game_mode_", "").replace("_", " ");
  const playedTime = convertTime(duration);
  const daysGone = calculatedTimeFromLastMatch(start_time);

  return (
    <div className="flex gap-4 justify-center">
      <div className="text-8xl text-success">{radiant_score}</div>
      <div className="flex flex-col items-center gap-2">
        <span className="uppercase text-xs">{replacedGameMod}</span>
        <span className="uppercase text-3xl">{playedTime.minutes}:{playedTime.seconds}</span>
        <span className="text-xs text-neutral-500">Ended {daysGone === "0" ? "Today" : daysGone === "1" ? daysGone + " day ago" : daysGone + " days ago"}</span>
      </div>
      <div className="text-8xl text-error">{dire_score}</div>
    </div>
  )
}

export default MatchResultInfo;
