"use client";

import HeroItemsList from "@/components/hero/items/HeroItemsList";
import {IHeroItemsPopularity} from "@/services/api/endpoints/types";

type HeroItemsProps = {
  heroItemsPopularity: IHeroItemsPopularity;
}

const HeroItems = ({heroItemsPopularity}: HeroItemsProps) => {
  const popularItems = Object.entries(heroItemsPopularity);

  return (
    <div className="">
      <h3 className="mb-4 text-[#ffffff99] text-xls">
        <span className="font-medium text-[#ffffffde]">Suggested Items</span> Data from professional matches
      </h3>
      <article>
        <header className="flex gap-4 px-6 py-2 rounded-t text-white uppercase bg-gradient-to-r from-[#020024] to-[#2da65c]">
          <div className="w-3/12 text-base">START GAME</div>
          <div className="w-3/12 text-base cursor-pointer">EARLY GAME</div>
          <div className="w-3/12 text-base cursor-pointer">MID GAME</div>
          <div className="w-3/12 text-base cursor-pointer">LATE GAME</div>
        </header>
        <div className="grid grid-cols-4 gap-4 px-6 rounded-b border border-gray-300/10 pb-4">
          {popularItems.map((items) => <HeroItemsList key={items[0]} itemsList={items[1]} />)}
        </div>
      </article>
    </div>
  )
}

export default HeroItems;
