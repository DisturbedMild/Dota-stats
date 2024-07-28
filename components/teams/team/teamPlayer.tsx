import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from "next/link";

import {ITeamPlayer} from "@/common/types";

const TeamPlayer = ({name, wins, games_played}: ITeamPlayer) => {

  return (
    <div className="flex px-6 py-2 border border-gray-200/10 rounded-t text-xls text-[#ffffff99]">
      <div className="w-4/12">
        <Link href={``} className="text-xl text-light-blue transition-all hover:text-cyan-500">
          {name}
          <ArrowRightIcon/>
        </Link>
      </div>
      <div className="w-4/12 text-center">{wins}</div>
      <div className="w-4/12 text-center">{(wins * 100 / games_played).toFixed(1)}</div>
    </div>
  )
}

export default TeamPlayer;
