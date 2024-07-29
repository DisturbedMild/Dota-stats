import MatchResultAdditionalInfo from "@/components/match/heading/matchResultAdditionalInfo";
import MatchResultInfo from "@/components/match/heading/matchResultInfo";
import MatchResultTeam from "@/components/match/heading/matchResultTeam";

const MatchResult = () => {
  return (
  // Team winner
  // results(kills, time, side,)
  // League/matchid/region
    <div className="flex items-center justify-between">
      <MatchResultTeam/>
      <MatchResultInfo/>
      <MatchResultAdditionalInfo/>
    </div>
  )
}

export default MatchResult;
