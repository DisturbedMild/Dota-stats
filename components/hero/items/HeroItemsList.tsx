"use client";

import {useContext} from "react";

import {APIContext} from "@/common/context/api-context";
import HeroItem from "@/components/hero/items/HeroItem";
import {HeroItemsPopularity} from "@/types/index";

type HeroItemsListProps = {
  itemsList: Record<string, HeroItemsPopularity>
}

const HeroItemsList = ({itemsList}: HeroItemsListProps) => {
  const { items } = useContext(APIContext);
  const currentItems= [];

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

  return (
    <div className="flex flex-wrap gap-1 h-fit items-start mt-4">
      {currentItems.map((item) => (<HeroItem key={item.id} item={item} />))}
    </div>
  )
}

export default HeroItemsList;
