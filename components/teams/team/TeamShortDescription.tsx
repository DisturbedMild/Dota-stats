import Image, {ImageLoaderProps} from "next/image";
import {useParams} from "next/navigation";

import {useReactQueryRequest} from "@/common/hooks/useReactQueryRequest";

const imageLoader = ({src}: ImageLoaderProps) => {
  return src
}

const TeamShortDescription = () => {
  const { teamId } = useParams();
  const { data: teamDescription } = useReactQueryRequest("team-desc", `https://api.opendota.com/api/teams/${teamId}`);
  return (
    <div className="flex gap-6 items-center mb-8">
      <div>
        <Image src={teamDescription?.logo_url} alt={teamDescription?.name} width={124} height={75} loader={imageLoader} />
      </div>
      <div>
        <h1 className="text-2xl">{teamDescription?.name}</h1>
        <div className="flex gap-8 justify-between text-center">
          <div className="flex flex-col uppercase text-success"><span>Wins</span><span>{teamDescription?.wins}</span></div>
          <div className="flex flex-col uppercase text-error"><span>Losses</span><span>{teamDescription?.losses}</span></div>
          <div className="flex flex-col uppercase text-teal"><span>Rating</span><span>{teamDescription?.rating}</span></div>
        </div>
      </div>
    </div>
  )
}

export default TeamShortDescription
