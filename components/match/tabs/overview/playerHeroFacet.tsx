import Image, {ImageLoaderProps} from "next/image";

import {HeroFacet} from "@/common/types";
import {facetColors} from "@/components/match/tabs/overview/facetColors";

const facetImageLoader = ({src}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/facets/${src}.png`
}

const PlayerHeroFacet = ({heroName, facet}: {heroName: string, facet: HeroFacet}) => {
  const facetColor = facet.color + "_" + facet.gradient_id;
  return (
    <div className="relative w-14">
      <Image src={`/heroes/${heroName}.png`} alt="Hero Icon" width={60} height={20}/>
      <div
        className={`group absolute -right-2 -bottom-1 flex items-center justify-center w-5 h-5 ${facetColors[facetColor]}`}>
        <Image src={facet.icon} alt="Facet Icon" loader={facetImageLoader} width={18}
               height={18}/>
        <div
          className="absolute hidden transition-all group-hover:block -top-8 left-7 block w-[400px]">
          <div className={`flex gap-4 items-center ${facetColors[facetColor]}`}>
            <Image src={facet.icon} alt="Facet Icon" className="p-3 w-16 h-16 bg-black/30"
                   loader={facetImageLoader} width={24} height={24}/>
            <span className="text-xl">{facet.title}</span>
          </div>
          <div className="p-3 bg-neutral-900 text-left">
            <p>{facet.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerHeroFacet;
