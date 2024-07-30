import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Image from "next/image";
import Link from "next/link";

import { ITeamMostPopularHero } from "@/common/types";

const TeamMostPopularHero = ({
  hero_id,
  localized_name,
  wins,
  games_played,
}: ITeamMostPopularHero) => {
  const transformedHeroNameForSrcLink = localized_name
    .replaceAll(" ", "_")
    .toLocaleLowerCase();
  return (
    <div className="flex items-center px-6 py-2 border border-gray-200/10 rounded-t text-xls text-[#ffffff99]">
      <div className="w-8/12">
        <Link
          href={`/heroes/${hero_id}`}
          className="flex gap-2 items-center w-max text-light-blue transition-all hover:text-cyan-500"
        >
          <Image
            src={`/heroes/${transformedHeroNameForSrcLink}.png`}
            width={60}
            height={40}
            alt={localized_name}
          />
          {localized_name}
          <ArrowRightIcon />
        </Link>
      </div>
      <div className="w-2/12 text-xl text-center">{games_played}</div>
      <div className="w-2/12 text-xl text-center">{wins}</div>
    </div>
  );
};

export default TeamMostPopularHero;
