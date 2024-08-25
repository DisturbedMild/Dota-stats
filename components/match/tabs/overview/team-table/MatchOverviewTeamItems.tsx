import itemsData from "dotaconstants/build/items.json";

import GameItem from "@/components/items/item/GameItem";
import BackpackIcon from "@/components/ui/icons/backpackIcon";
import {Item, Items} from "@/types/index";

interface MatchOverviewTeamItemsProps {
  playerItems: number[],
  backpackPlayerItems: number[],
}

const getPlayerItems = (playerItems: number[], items: Items): Item[] => {
  const itemsArr = [];
  for (const item in items) {
    if (playerItems.find((id) => items[item].id === id)) {
      itemsArr.push(items[item])
    }
  }
  return itemsArr
}

const MatchOverviewTeamItems = ({playerItems, backpackPlayerItems}: MatchOverviewTeamItemsProps) => {
  const items: Items = JSON.parse(JSON.stringify(itemsData));
  const playerEndGameItems = getPlayerItems(playerItems, items)
  const backpackEndGameItems = getPlayerItems(backpackPlayerItems, items);
  return (
    <td className="w-[210px] flex flex-col justify-start pt-4">
      <div className="flex h-6">
        {playerEndGameItems.map((item) => (
          <GameItem key={item.id} item={item} imageClassName="w-auto h-auto" className="w-8 h-6" width={20} height={16} withPopup={true}/>
        ))}
      </div>
      <div className="flex items-center gap-1 pt-1">
        <BackpackIcon/>
        {backpackEndGameItems.map((item) => (
          <GameItem key={item.id} imageClassName="w-auto h-auto" className="w-8 h-6" width={20} height={16} item={item} withPopup={true}/>
        ))}
      </div>
    </td>
  )
}

export default MatchOverviewTeamItems;
