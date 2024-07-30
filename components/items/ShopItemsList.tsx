"use client";

import { Item } from "@/common/types";

import ShopItem from "./ShopItem";

interface ItemsListProps {
  items: Item[] | null;
  type: string;
  color: string;
}

const ShopItemsList = ({ items, type, color }: ItemsListProps) => {
  return (
    <div className="bg-secondary/30">
      <h1 className="px-2 py-1 text-xls uppercase bg-secondary text-center">
        {type}
      </h1>
      <div className="flex flex-wrap gap-2 px-2 py-2">
        {items?.map((item: Item) => (
          <ShopItem key={item.id} item={item} color={color} />
        ))}
      </div>
    </div>
  );
};

export default ShopItemsList;
