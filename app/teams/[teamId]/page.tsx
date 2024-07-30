"use client";

import { useParams } from "next/navigation";

import { useTeamHeroes, useTeamMatches, useTeamPlayers } from "@/common/api";
import TeamMatches from "@/components/teams/team/teamMatches";
import TeamMostPopularHeroes from "@/components/teams/team/teamMostPopularHeroes";
import TeamPlayers from "@/components/teams/team/teamPlayers";
import TeamShortDescription from "@/components/teams/team/TeamShortDescription";

const TeamPage = () => {
  const { teamId }: { teamId: string } = useParams();

  const { data: teamPlayers } = useTeamPlayers(teamId.toString());
  const { data: teamHeroes } = useTeamHeroes(teamId.toString());
  const { data: teamMatches } = useTeamMatches(teamId.toString());

  return (
    <section>
      <TeamShortDescription />
      <div className="flex gap-4">
        <TeamMatches matches={teamMatches} />
        <aside className="flex flex-col w-4/12">
          <TeamPlayers players={teamPlayers} />
          <TeamMostPopularHeroes heroes={teamHeroes} />
        </aside>
      </div>
    </section>
  );
};

export default TeamPage;
