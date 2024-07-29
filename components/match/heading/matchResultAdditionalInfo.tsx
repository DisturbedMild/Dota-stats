import {useContext} from "react";
import {useParams} from "next/navigation";

import {REGION} from "@/common/constants/constants";
import {MatchContext} from "@/common/context/match-context";
import CopyIcon from "@/components/ui/icons/copyIcon";


const MatchResultAdditionalInfo = () => {
  const {matchId} = useParams();
  const data = useContext(MatchContext);
  console.log(data)
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-end">
        <span className="text-xls text-neutral-500">LEAGUE</span>
        <span className="mt-2 text-xl">{data?.league.name}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-xls text-neutral-500">MATCH ID</span>
        <button type="button" onClick={() => {navigator.clipboard.writeText(String(matchId))}} className="flex items-center mt-2 p transition-all rounded w-max text-xl hover:bg-neutral-500/40">
          <CopyIcon/>
          {matchId}
        </button>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-xls text-neutral-500">REGION</span>
        {/*<span className="mt-2 text-xl">{REGION[data?.region]}</span>*/}
      </div>
    </div>
  )
}

export default MatchResultAdditionalInfo;
