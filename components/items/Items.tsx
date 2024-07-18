"use client"

import {useContext} from "react";

import {APIContext} from "@/common/context/api-context";
import {Item,Items} from "@/common/types";
import ItemsList from "@/components/items/ItemsList";

const ITEM_COLOR = {
  rare: "#1A87F9",
  artifact: "#E29B01",
  secret_shop: "#FFFFFF",
  consumable: "#1D80E7",
  common: "#2BAB01",
  epic: "#B812F9",
  component: "#FFFFFF"
}

const filterItemsByType = (items: Items, type: string): Item[] => {
  const filteredItems = [];

  for (const item in items) {
    if (items[item].qual === type) {
      filteredItems.push(items[item])
    }
  }
  return filteredItems
}

const Items = () => {
  const {items}: {items: Items} = useContext(APIContext);

  const componentItems = filterItemsByType(items, "component");
  const rareItems = filterItemsByType(items, "rare");
  const epicItems = filterItemsByType(items, "epic");
  const commonItems = filterItemsByType(items, "common");
  const consumableItems = filterItemsByType(items, "consumable");
  const secretShopItems = filterItemsByType(items, "secret_shop");
  const artifactItems = filterItemsByType(items, "artifact");

  return (
    <div className="grid grid-cols-3 gap-2 w-9/12">
      <ItemsList items={componentItems} type={"component"} color={ITEM_COLOR.component}/>
      <ItemsList items={rareItems} type={"rare"} color={ITEM_COLOR.rare}/>
      <ItemsList items={epicItems} type={"epic"} color={ITEM_COLOR.epic}/>
      <ItemsList items={commonItems} type={"common"} color={ITEM_COLOR.common}/>
      <ItemsList items={consumableItems} type={"consumable"} color={ITEM_COLOR.consumable}/>
      <ItemsList items={secretShopItems} type={"secret Shop"} color={ITEM_COLOR.secret_shop}/>
      <ItemsList items={artifactItems} type={"artifact"} color={ITEM_COLOR.artifact}/>
    </div>
  )
}

export default Items;
