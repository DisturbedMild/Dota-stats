"use client";

import {useTeams} from "@/common/api";
import TeamsTableItem from "@/components/teams/TeamsTableItem";
import {Team} from "@/types/teams/teams";

const TeamsTable = () => {
  const { isLoading, data: teams, error } = useTeams();

  if (isLoading) return <h1>Wait for it...</h1>

  if (error) return <h1>Oops, something went wrong, try again later</h1>

  return (
    <div className="mt-10">
      <div className="flex px-6 py-2 rounded-t text-white uppercase bg-gradient-to-r from-secondary to-teal">
        <div className="w-2/12">Rank</div>
        <div className="w-4/12 pl-4">Team</div>
        <div className="w-2/12 text-center">Rating</div>
        <div className="w-2/12 text-center">Wins</div>
        <div className="w-2/12 text-center">Losses</div>
      </div>
      {teams.map((team: Team, index: number) => index < 100 && <TeamsTableItem key={team.team_id} rank={index + 1} {...team} />)}
    </div>
  )
}

export default TeamsTable;
