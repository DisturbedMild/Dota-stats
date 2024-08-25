import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Link from "next/link";

import PlayerHeroFacet from "@/components/match/tabs/overview/facet/PlayerHeroFacet";
import {HeroFacet} from "@/types/index";

interface ShortHeroDescProps {
  heroName: string
  facet: HeroFacet | null
  personaname: string
  rank_tier: number
}

const ShortHeroDesc = ({heroName, facet, personaname, rank_tier}: ShortHeroDescProps) => {
  return (
    <div className="flex gap-4 items-center pl-4">
      {facet !== null ? <PlayerHeroFacet facet={facet} heroName={heroName}/> : null}
      <div className="flex flex-col text-xls text-left">
        <Link href={"/players/player.account_id"}
              className="flex items-center text-xls text-light-blue truncate transition-all hover:text-cyan-500"><span>{personaname}</span>
          <ArrowRightIcon style={{width: "20px", height: "20px"}}/></Link>
        <span className="text-xls text-neutral-500">{rank_tier === 80 ? "Immortal" : "Rank: unknown"}</span>
      </div>
    </div>
  )
}

export default ShortHeroDesc
