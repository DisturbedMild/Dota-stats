"use client";

import Image, {type ImageLoaderProps} from "next/image";
import {useState} from "react";
import HeroItemPopup from "@components/hero/items/HeroItemPopup";
import {IItem} from "@/services/api/endpoints/types";

type HeroItemProps = {
  item: IItem;
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
    <div className="relative basis-11" onMouseEnter={showPopupHandler} onMouseLeave={hidePopupHandler}>
      <Image src={item.img} alt={item.dname} loader={imageLoader} width={52} height={44} className="h-fit"/>
      {showPopup && <HeroItemPopup item={item} />}
    </div>
  )
}

export default HeroItem;
