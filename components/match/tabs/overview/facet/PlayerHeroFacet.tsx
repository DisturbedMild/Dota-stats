import {Tooltip} from "react-tooltip";
import Image, {ImageLoaderProps} from "next/image";

import {facetColors} from "@/components/match/tabs/overview/facet/facetColors";
import {HeroFacet} from "@/types/index";

const facetImageLoader = ({src}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/facets/${src}.png`
}

const PlayerHeroFacet = ({heroName, facet}: { heroName: string, facet: HeroFacet }) => {
  const facetColor = facet.color + "_" + facet.gradient_id;
  return (
    <div className="relative w-14">
      <Image src={`/heroes/${heroName}.png`} alt="Hero Icon" width={56} height={20}/>
      <div
        className={`group absolute -right-2 -bottom-1 flex items-center justify-center w-5 h-5 ${facetColors[facetColor]}`}>
        <Image src={facet.icon} alt="Facet Icon" className={heroName} loader={facetImageLoader} width={18} height={18}/>
      </div>
      <Tooltip anchorSelect={`.${heroName}`} style={{width: "400px", padding: 0}}>
        <div className={`flex gap-4 items-center ${facetColors[facetColor]}`}>
          <Image src={facet.icon} alt="Facet Icon" className="p-3 w-16 h-16 bg-black/30"
                 loader={facetImageLoader} width={24} height={24}/>
          <span className="text-xl">{facet.title}</span>
        </div>
        <div className="p-3 bg-neutral-900 text-left">
          <p>{facet.description}</p>
        </div>
      </Tooltip>
    </div>
  )
}

export default PlayerHeroFacet;
