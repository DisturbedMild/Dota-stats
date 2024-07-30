"use client";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Image, { ImageLoaderProps } from "next/image";
import Link from "next/link";

import { calculatedTimeFromLastMatch } from "@/common/utils/calucateTime";
import getNumberWithOrdinal from "@/common/utils/getNumberWithOrdinal";
import { Team } from "@/types/teams/teams";

interface TeamsTableItemProps extends Team {
  rank: number;
}

const imageLoader = ({ src }: ImageLoaderProps) => {
  return src;
};

const TeamsTableItem = ({
  team_id,
  rating,
  wins,
  losses,
  last_match_time,
  name,
  tag,
  logo_url,
  rank,
}: TeamsTableItemProps) => {
  const ratingWithOrdinal = getNumberWithOrdinal(rank);
  const lastMatchTime = calculatedTimeFromLastMatch(last_match_time);
  return (
    <div className="flex items-center px-6 py-2 border border-gray-200/10">
      <div className="w-2/12">{ratingWithOrdinal}</div>
      <div className="w-4/12 flex gap-2">
        <div className="flex justify-center w-[70px]">
          {logo_url && (
            <Image
              className="w-auto h-10"
              src={logo_url}
              width={60}
              height={40}
              loader={imageLoader}
              alt={tag}
            />
          )}
        </div>
        <div className="flex flex-col">
          <Link
            href={`/teams/${team_id}`}
            className="text-xxs text-light-blue transition-all hover:text-cyan-500"
          >
            {name ? name : tag}
            <ArrowRightIcon />
          </Link>
          <div className="text-neutral-500 text-xxs">
            {lastMatchTime === "0"
              ? "Today"
              : lastMatchTime === "1"
                ? lastMatchTime + " day ago"
                : lastMatchTime + " days ago"}
          </div>
        </div>
      </div>
      <div className="w-2/12 text-center">{rating.toFixed(0)}</div>
      <div className="w-2/12 text-center">{wins}</div>
      <div className="w-2/12 text-center">{losses}</div>
    </div>
  );
};
export default TeamsTableItem;
