import {Tooltip} from "react-tooltip";
import aghanimsDescriptionsData from 'dotaconstants/build/aghs_desc.json'
import Image from "next/image";

import {AghDescription} from "@/common/types";

interface MatchOverviewTeamAghanimProps {
  id: number,
  haveAghanim: number,
  haveShard: number
}

// const getHeroAghanimAndShard = (id: number, aghsWithDesc: AghDescription[]): AghDescription => {
//   return aghsWithDesc.find((item) => item.hero_id === id)
// }

const MatchOverviewTeamAghanim = ({id, haveAghanim, haveShard}: MatchOverviewTeamAghanimProps) => {
  const aghanimsDescriptions = JSON.parse(JSON.stringify(aghanimsDescriptionsData));
  // const currentHeroAghanimDescription: AghDescription = getHeroAghanimAndShard(id, aghanimsDescriptions)
  return <td className="text-center h-20 w-[30px] text-xls">
    <div className="flex flex-col items-center">
      <div>
        {haveAghanim === 0 ? (
          <Image
            src={"/icons/scepter.png"}
            width={24}
            height={24}
            alt="Aghanim scepter"
            className="cursor-pointer scepter-anchor"
          />) : (
          <Image
            src={"/icons/scepter_active.png"}
            width={24}
            height={24}
            alt="Aghanim scepter"
            className="cursor-pointer scepter-anchor"
          />
        )
        }
        <Tooltip anchorSelect=".scepter-anchor" place="left">
          Scepter description
        </Tooltip>
      </div>
      <div>
        {haveShard === 0 ? (
          <Image
            src={"/icons/shard.png"}
            width={24}
            height={16}
            alt="Aghanim's shard"
            className="cursor-pointer shard-anchor"
          />
        ) : (
          <Image
            src={"/icons/shard_active.png"}
            width={24}
            height={16}
            alt="Aghanim's shard"
            className="cursor-pointer shard-anchor"
          />
        )
        }
        <Tooltip anchorSelect=".shard-anchor" place="left">
          Shard description
        </Tooltip>
      </div>
    </div>
  </td>
}

export default MatchOverviewTeamAghanim
