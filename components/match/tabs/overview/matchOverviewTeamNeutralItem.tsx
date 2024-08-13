import itemsData from 'dotaconstants/build/items.json'
import Image, {ImageLoaderProps} from "next/image";

import {Items} from "@/common/types";
import GameItem from "@/components/items/item/GameItem";

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
  const items: Items = JSON.parse(JSON.stringify(itemsData))

  const neutralEndGameItem = getNeutralItem(neutralItem, items)
  return (
    <td>
      {neutralEndGameItem ? (
        <GameItem item={neutralEndGameItem} imageClassName="rounded-full h-9" width={40} height={30} withPopup={true} />
      ) : null
      }
    </td>)
}

export default MatchOverviewTeamNeutralItem
