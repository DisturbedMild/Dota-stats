"use client";

import {IItem} from "@/services/api/endpoints/types";
import Image, {type ImageLoaderProps} from "next/image";

type THeroItemProps = {
  item: IItem;
}

const imageLoader = ({src, width}: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
}

const HeroItem = ({item}: THeroItemProps) => {
  return (
    <Image src={item.img} alt={item.dname} loader={imageLoader} width={50} height={50} className="h-fit" />
  )
}

export default HeroItem;
