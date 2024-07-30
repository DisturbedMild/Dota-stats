import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Image, { ImageLoaderProps } from "next/image";
import Link from "next/link";

import { ITeamMatch } from "@/common/types";
import { calculatedTimeFromLastMatch } from "@/common/utils/calucateTime";
import { convertTime } from "@/common/utils/convertTime";

const imageLoader = ({ src }: ImageLoaderProps) => {
  return src;
};

const TeamMatch = ({
  match_id,
  league_name,
  radiant_win,
  radiant,
  opposing_team_logo,
  opposing_team_name,
  opposing_team_id,
  start_time,
  duration,
}: ITeamMatch) => {
  const lastMatchTime = calculatedTimeFromLastMatch(start_time);
  const { minutes, seconds } = convertTime(duration);
  const matchResult =
    radiant && radiant_win
      ? "Won match"
      : !radiant && !radiant_win
        ? "Won match"
        : "Lost match";
  return (
    <div className="flex items-center px-6 py-2 border border-gray-200/10 rounded-t text-xls text-[#ffffff99]">
      <div className="w-6/12">
        <div>
          <Link
            href={`/matches/${match_id}`}
            className="text-xs text-light-blue transition-all hover:text-cyan-500"
          >
            {match_id}
            <ArrowRightIcon />
          </Link>
        </div>
        <div className="text-xxs text-neutral-500">
          {lastMatchTime === "0"
            ? "Today"
            : lastMatchTime === "1"
              ? lastMatchTime + " day ago"
              : lastMatchTime + " days ago"}
          /{league_name}
        </div>
      </div>
      <div className="w-2/12 flex flex-col items-center justify-center text-xs">
        <span>
          {minutes}:{seconds}
        </span>
        <span className="text-xxs">{radiant ? "Radiant" : "Dire"}</span>
      </div>
      <div
        className="w-2/12 flex justify-center"
        style={{ color: matchResult === "Won match" ? "#A8DF8E" : "#E11640" }}
      >
        {matchResult}
      </div>
      <div className="w-2/12 flex justify-center gap-2">
        <div className="w-12 h-8 flex">
          <Image
            src={opposing_team_logo}
            alt={opposing_team_name}
            width={60}
            height={28}
            loader={imageLoader}
            className="w-auto h-full"
          />
        </div>
        <Link
          href={`/teams/${opposing_team_id}`}
          className="flex items-center text-xxs text-light-blue transition-all hover:text-cyan-500"
        >
          {opposing_team_name}
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
};

export default TeamMatch;
