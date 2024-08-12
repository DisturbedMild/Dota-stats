import itemsData from "dotaconstants/build/items.json";
import Image, {ImageLoaderProps} from "next/image";

import {Item, Items} from "@/common/types";
import BackpackIcon from "@/components/ui/icons/backpackIcon";

interface MatchOverviewTeamItemsProps {
  playerItems: number[],
  backpackPlayerItems: number[],
}

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
};

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
        {playerEndGameItems.map((item) => <div key={item.id} className="h-max">
          <Image src={item.img} loader={imageLoader} alt={item.dname} width={40} height={20}/></div>)}
      </div>
      <div className="flex items-center gap-1 pt-1">
        <BackpackIcon/>
        {backpackEndGameItems.map((item) => <div key={item.id} className="h-max">
          <Image src={item.img} loader={imageLoader} alt={item.dname} width={30} height={20}/></div>)}
      </div>
    </td>
  )
}

export default MatchOverviewTeamItems;
