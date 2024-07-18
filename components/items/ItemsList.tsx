"use client";

import {Item} from "@/common/types";

import ShopItem from "./ShopItem.tsx";

interface ItemsListProps {
  items: ShopItem[],
  type: string,
  color: string
}

const ItemsList = ({items, type, color}: ItemsListProps) => {
  return (
    <div className="bg-secondary/30">
      <h1 className="px-2 py-1 text-xls uppercase bg-secondary text-center">{type}</h1>
      <div className="flex flex-wrap gap-2 px-2 py-2">
        {items.map((item: Item) => <ShopItem key={item.id} item={item} color={color} />)}
      </div>
    </div>
  )
}

export default ItemsList;
