"use client";

import {useState} from "react";

import {Item} from "@/common/types";
import ChosenItem from "@/components/items/chosenItem";
import Items from "@/components/items/Items";
import {ItemsContextProvide} from "@/common/context/items-context";

const ItemsPage = () => {
  const [currentItem, setCurrentItem] = useState<Item | null>(null)

  return (
    <section>
      <h1 className="text-2xl">Items <span className="text-xxs text-slate-500">includes old and removed items.</span></h1>
      <div className="flex gap-2">
        <ItemsContextProvide>
          <Items/>
          <ChosenItem item={currentItem} />
        </ItemsContextProvide>
      </div>
    </section>
  );
};

export default ItemsPage;
