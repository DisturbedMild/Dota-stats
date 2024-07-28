import type {ITeamMatch} from "@/common/types";

import TeamMatch from "./teamMatch"

interface TeamMatchesProps {
  matches: ITeamMatch[]
}

const TeamMatches = ({matches}: TeamMatchesProps) => {
  return (
    <div className="flex flex-col w-8/12">
      <h2 className="mb-2">Recent Matches</h2>
      <div className="flex px-6 py-2 rounded-t text-xls text-white uppercase bg-gradient-to-r from-secondary to-teal">
        <div className="w-6/12">ID</div>
        <div className="w-2/12 text-center">Duration</div>
        <div className="w-2/12 text-center">Result</div>
        <div className="w-2/12 text-center">OPPOSING TEAM</div>
      </div>
      {matches?.map((match, index: number) => index <= 15 && <TeamMatch key={match.match_id} {...match} />)}
    </div>
  )
}

export default TeamMatches;
