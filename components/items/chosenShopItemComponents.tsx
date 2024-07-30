"use client";

import Image from "next/image";
import { ImageLoaderProps } from "next/image";

const imageLoader = ({ src, width }: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com${src}?w=${width}`;
};

const itemImageLoader = ({ src, width }: ImageLoaderProps) => {
  return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/${src}.png?w=${width}`;
};

interface ChoseShopItemComponentsProps {
  img: string;
  dname: string;
  components: string[] | null;
}

const ChoseShopItemComponents = ({
  img,
  dname,
  components,
}: ChoseShopItemComponentsProps) => {
  return (
    <div className="flex flex-col justify-center mx-1.5 my-2 p-2 border border-secondary/30 bg-neutral-900/50 h-40">
      <div className="flex justify-center mb-4">
        <Image
          src={img}
          alt={dname}
          loader={imageLoader}
          width={66}
          height={48}
          loading="lazy"
          className="h-full border border-black"
        />
      </div>
      <div className="flex justify-center gap-4">
        {components?.map((item) => (
          <Image
            key={`current-item-${item}`}
            src={item}
            alt={item}
            loader={itemImageLoader}
            width={66}
            height={48}
            loading="lazy"
            className="h-full border border-black"
          />
        ))}
        <Image src={"/recipe.png"} alt="Item recipe" width={66} height={48} />
      </div>
    </div>
  );
};

export default ChoseShopItemComponents;
