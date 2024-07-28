"use client";

import {useParams} from "next/navigation";

import {useReactQueryRequest} from "@/common/hooks/useReactQueryRequest";
import TeamMatches from "@/components/teams/team/teamMatches";
import TeamMostPopularHeroes from "@/components/teams/team/teamMostPopularHeroes";
import TeamPlayers from "@/components/teams/team/teamPlayers";
import TeamShortDescription from "@/components/teams/team/TeamShortDescription";


const TeamPage = () => {
    const { teamId } = useParams();

    const { data: teamPlayers } = useReactQueryRequest("team-players", `https://api.opendota.com/api/teams/${teamId}/players`);
    const { data: teamHeroes } = useReactQueryRequest("team-heroes", `https://api.opendota.com/api/teams/${teamId}/heroes`);
    const { data: teamMatches } = useReactQueryRequest("team-matches", `https://api.opendota.com/api/teams/${teamId}/matches`)

    return (
      <section>
          <TeamShortDescription/>
          <div className="flex gap-4">
              <TeamMatches matches={teamMatches} />
              <aside className="flex flex-col w-4/12">
                <TeamPlayers players={teamPlayers} />
                <TeamMostPopularHeroes heroes={teamHeroes} />
              </aside>
          </div>
      </section>
    )
}

export default TeamPage
