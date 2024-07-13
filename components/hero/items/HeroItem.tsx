"use client";

import {useState} from "react";
import Image, {type ImageLoaderProps} from "next/image";

import HeroItemPopup from "@/components/hero/items/HeroItemPopup";
import {Item} from "@/types/index";

type HeroItemProps = {
  item: Item;
}

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
}

const HeroItem = ({item}: HeroItemProps) => {
  const [showPopup, setShowPopup] = useState(false);

  const showPopupHandler = () => {
    setShowPopup(true);
  }

  const hidePopupHandler = () => {
    setShowPopup(false);
  }

  return (
    <div className="relative basis-11  bg-black/45 transition-all cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 shadow-xl  hover:shadow-black/40" onMouseEnter={showPopupHandler} onMouseLeave={hidePopupHandler}>
      <Image src={item.img} alt={item.dname} loader={imageLoader} width={52} height={44} className="h-fit"/>
      {showPopup && <HeroItemPopup item={item} />}
    </div>
  )
}

export default HeroItem;
