import MatchResultAdditionalInfo from "@/components/match/heading/MatchResultAdditionalInfo";
import MatchResultInfo from "@/components/match/heading/MatchResultInfo";
import MatchResultTeam from "@/components/match/heading/MatchResultTeam";

const MatchResult = () => {
  return (
    <div className="flex items-center justify-between">
      <MatchResultTeam />
      <MatchResultInfo />
      <MatchResultAdditionalInfo />
    </div>
  );
};

export default MatchResult;
