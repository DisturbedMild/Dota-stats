"use client";

import HeroItem from "@components/hero/items/heroItem";
import {useContext} from "react";
import {APIContext} from "@/common/context/api-context";
import {IHeroItemsPopularity, IItem, IItems} from "@/services/api/endpoints/types";

type THeroItemsListProps = {
  itemsList: Record<string, IHeroItemsPopularity>
}

const HeroItemsList = ({itemsList}: THeroItemsListProps) => {
  const { items } = useContext(APIContext);
  const currentItems: IItems = [];


  if (!items) {
    console.error("Items context is undefined or null")
    return <p>Something went wrong with items...</p>
  }

  for (const itemKey in itemsList) {
    const itemId = Number(itemKey);
    if(!isNaN(itemId)) {
      for (const pieceKey in items) {
        const piece = items[pieceKey];
        if(piece.id === Number(itemKey)) currentItems.push(piece);
      }
    }

  }

  console.log(currentItems);

  return (
    <div className="grid grid-cols-6 grid-rows-6 justify-center mt-4 w-3/12">
      {currentItems.map((item) => (<HeroItem key={item.id} item={item} />))}
    </div>
  )
}

export default HeroItemsList;
