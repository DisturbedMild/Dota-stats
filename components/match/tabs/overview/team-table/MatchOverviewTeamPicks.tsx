import heroesData from "dotaconstants/build/heroes.json"
import Image, {ImageLoaderProps} from "next/image";

import getHero from "@/common/utils/getHero";
import {Hero} from "@/types/index";

interface MatchOverviewTeamPicksProps {
  picks: {
    hero_id: number;
    is_pick: boolean;
    order: number;
    team: number;
  }[]
}

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
}

const MatchOverviewTeamPicks = ({picks}: MatchOverviewTeamPicksProps) => {
  const heroes: Record<string, Hero> = JSON.parse(JSON.stringify(heroesData))
  return <div className="flex gap-2 mb-6">
    {picks.map((round) => {
      const hero = getHero(round.hero_id, heroes);
      return <div className="w-18 h-18" key={Math.random() * 1000}>
        {hero ? <Image src={hero.img!} alt={hero.localized_name!} className={`${!round.is_pick ? "grayscale" : ""}`}
                       loader={imageLoader} width={64} height={64}/> : null}
        <div className="py-0.5 bg-black/60 w-16 text-center text-xs">
          {round.is_pick ? "Pick" : "Ban"} {round.order + 1}
        </div>
      </div>
    })}
  </div>
}

export default MatchOverviewTeamPicks
