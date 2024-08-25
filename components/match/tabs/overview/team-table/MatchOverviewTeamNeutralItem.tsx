import itemsData from 'dotaconstants/build/items.json'

import GameItem from "@/components/items/item/GameItem";
import {Items} from "@/types/index";

interface MatchOverviewTeamNeutralItemProps {
  neutralItem: number
}

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
    <td className="h-20 w-[30px] text-xls">
      {neutralEndGameItem ? (
        <GameItem item={neutralEndGameItem} className="flex justify-center" imageClassName="rounded-full h-7" width={28} height={28} withPopup={true} />
      ) : null
      }
    </td>)
}

export default MatchOverviewTeamNeutralItem
