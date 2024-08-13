import type { ImageLoaderProps } from "next/image";
import Image from "next/image";

import { Item } from "@/common/types";

import GameItemPopup from "./GameItemPopup";

interface ItemProps {
  item: Item
  className?: string
  imageClassName?: string
  onClick?: () => void
  width?: number
  height?: number
  withPopup: boolean
}

const imageLoader = ({ src, width }: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
};


const GameItem = ({ item, className = "", imageClassName = "", onClick, width = 40, height = 20, withPopup = false }: ItemProps) => {

  return (
    <div
      className={"relative group cursor-pointer " + className}
      onClick={onClick}
    >
      <Image
        src={item.img}
        alt={item.dname}
        width={width}
        height={height}
        loader={imageLoader}
        className={imageClassName && imageClassName}
      />
      {withPopup ? <GameItemPopup className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all" item={item}/> : null}
    </div>
  );
};

export default GameItem;
