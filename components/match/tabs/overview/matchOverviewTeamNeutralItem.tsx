import itemsData from 'dotaconstants/build/items.json'
import Image, {ImageLoaderProps} from "next/image";

import {Item, Items} from "@/common/types";

interface MatchOverviewTeamNeutralItemProps {
  neutralItem: number
}

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
};

const getNeutralItem = (item: number, items: Items) => {
  for (const key in items) {
    if (items[key].id === item) {
      return items[key]
    }
  }
}

const MatchOverviewTeamNeutralItem = ({neutralItem}: MatchOverviewTeamNeutralItemProps) => {
  const items: any = itemsData

  const neutralEndGameItem = getNeutralItem(neutralItem, items)
  return (
    <td>
      {neutralEndGameItem ? (
        <div className="flex w-8 h-8">
          <Image src={neutralEndGameItem.img} loader={imageLoader} alt={neutralEndGameItem.dname} width={40}
                 height={40} className="rounded-full" />
        </div>
      ) : null
      }
    </td>)
}

export default MatchOverviewTeamNeutralItem
