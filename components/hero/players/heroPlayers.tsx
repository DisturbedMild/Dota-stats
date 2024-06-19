import {IHeroPlayer} from "@/services/api/endpoints/types";
import HeroPlayer from "@components/hero/players/heroPlayer";

type THeroPlayersProps = {
  heroPlayers: IHeroPlayer[];
}

const HeroPlayers = ({heroPlayers}: THeroPlayersProps) => {
  return (
    <>
      <h3 className="mb-3 text-[#ffffff99] text-xls"><span className="font-medium text-[#ffffffde]">
        Players</span> Data from professional matches
      </h3>
      <article className="rounded border-amber-50/50 border border-gray-300/10">
        <header className="flex px-6 py-2 rounded-t text-white uppercase bg-gradient-to-r from-[#020024] to-[#2da65c]">
          <div className="w-6/12 text-base">ACCOUNT ID</div>
          <div className="w-2/12 text-base text-center cursor-pointer">GAMES</div>
          <div className="w-2/12 text-base text-center cursor-pointer">WIN %</div>
          <div className="w-2/12 text-base text-center cursor-pointer">ADVANTAGE</div>
        </header>
        {heroPlayers && heroPlayers.map((player) =>
          <HeroPlayer
            key={player.account_id} id={player.account_id}
            games={player.games_played} wins={player.wins}
          />)}
      </article>
    </>
  )
}

export default HeroPlayers;
