"use client";

import { ItemsContextProvide } from "@/common/context/items-context";
import ChosenShopItem from "@/components/items/chosenShopItem";
import ShopItems from "@/components/items/ShopItems";

const ItemsPage = () => {
  return (
    <section>
      <h1 className="text-2xl">
        Items{" "}
        <span className="text-xxs text-slate-500">
          includes old and removed items.
        </span>
      </h1>
      <div className="flex gap-2">
        <ItemsContextProvide>
          <>
            <ShopItems />
            <ChosenShopItem />
          </>
        </ItemsContextProvide>
      </div>
    </section>
  );
};

export default ItemsPage;
