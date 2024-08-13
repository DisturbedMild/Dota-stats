import itemsData from "dotaconstants/build/items.json";

import {Item, Items} from "@/common/types";
import GameItem from "@/components/items/item/GameItem";
import BackpackIcon from "@/components/ui/icons/backpackIcon";

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
    <td className="w-[270px] flex flex-col justify-start pb-2">
      <div className="flex h-8">
        {playerEndGameItems.map((item) => <GameItem key={item.id} item={item} withPopup={true} />)}
      </div>
      <div className="flex items-center gap-1 pt-1">
        <BackpackIcon/>
        {backpackEndGameItems.map((item) => <GameItem key={item.id} item={item} withPopup={true} />)}
      </div>
    </td>
  )
}

export default MatchOverviewTeamItems;
