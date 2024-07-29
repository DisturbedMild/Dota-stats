import {useContext} from "react";
import Image from "next/image";

import {MatchContext} from "@/common/context/match-context";

const MatchResultTeam = () => {
  // @ts-expect-error: Unreachable code error
  const {radiant_win, dire_name, radiant_name} = useContext(MatchContext);
  return (
    <div className="m-4">
        <span className={
          `flex gap-2 items-center w-max p-2 rounded border text-2xl ${radiant_win ?
            "text-success bg-success/10 border-success/40" :
            "text-error bg-error/10 border-error/40"}`
        }>
          <Image src={`${radiant_win ? "/icons/radiant_icon.svg" : "/icons/dire_icon.svg"}`} alt="Dota side icon" width={32} height={32} className="fill-white" />
          {radiant_win ? radiant_name : dire_name} Victory
        </span>
    </div>
  )
}

export default MatchResultTeam;
