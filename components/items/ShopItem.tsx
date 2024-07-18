"use client";

import {useContext} from "react";
import type {ImageLoaderProps} from 'next/image';
import Image from "next/image";

import {ItemsContext} from "@/common/context/items-context";
import {Item} from "@/common/types";

interface ShopItemProps {
  item: Item,
  color: string,
}

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
}

const ShopItem = ({item, color}: ShopItemProps) => {
  const {setCurrentItem} = useContext(ItemsContext);

  return (
    <div
      style={{border: `1px solid ${color}`}}
      className="w-[40px] h-[30px] cursor-pointer"
      onClick={() => setCurrentItem(item.id)}
    >
      <Image src={item.img} alt={item.dname} width={40} height={20} loader={imageLoader} />
    </div>
  )
}

export default ShopItem;
