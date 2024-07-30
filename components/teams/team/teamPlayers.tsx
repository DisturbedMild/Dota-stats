import { ITeamPlayer } from "@/common/types";
import TeamPlayer from "@/components/teams/team/teamPlayer";

interface TeamPlayersProps {
  players: ITeamPlayer[];
}

const TeamPlayers = ({ players }: TeamPlayersProps) => {
  return (
    <div className="flex flex-col mb-6">
      <h2 className="mb-2">Team players</h2>
      <div className="flex px-6 py-2 rounded-t text-xls text-white uppercase bg-gradient-to-r from-secondary to-teal">
        <div className="w-4/12">Name</div>
        <div className="w-4/12 text-center">Games</div>
        <div className="w-4/12 text-center">Winrate</div>
      </div>
      {players?.map(
        (player) =>
          player.is_current_team_member && (
            <TeamPlayer key={player.account_id} {...player} />
          ),
      )}
    </div>
  );
};

export default TeamPlayers;
