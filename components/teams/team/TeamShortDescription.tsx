import Image, { ImageLoaderProps } from "next/image";
import { useParams } from "next/navigation";

import { useTeamDescription } from "@/common/api";

const imageLoader = ({ src }: ImageLoaderProps) => {
  return src;
};

const TeamShortDescription = () => {
  const { teamId } = useParams();
  const { data: teamDescription } = useTeamDescription(teamId.toString());

  return (
    <div className="flex gap-6 items-center mb-8">
      <div>
        {teamDescription?.logo_url ? (
          <Image
            src={teamDescription?.logo_url}
            alt={teamDescription?.name}
            width={124}
            height={75}
            loader={imageLoader}
          />
        ) : null}
      </div>
      <div>
        <h1 className="text-2xl">{teamDescription?.name}</h1>
        <div className="flex gap-8 justify-between text-center">
          <div className="flex flex-col uppercase text-success">
            <span>Wins</span>
            <span>{teamDescription?.wins}</span>
          </div>
          <div className="flex flex-col uppercase text-error">
            <span>Losses</span>
            <span>{teamDescription?.losses}</span>
          </div>
          <div className="flex flex-col uppercase text-teal">
            <span>Rating</span>
            <span>{teamDescription?.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamShortDescription;
