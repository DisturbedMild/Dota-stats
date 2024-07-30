"use client";

import Image from "next/image";

import getNumberWithOrdinal from "@/common/utils/getNumberWithOrdinal";

type HeroRankingItemProps = {
  name: string;
  rank: number;
  tier: number;
  score: number;
  avatar: string;
};

const imageLoader = ({ src, width }: { src: string; width: number }) => {
  return `${src}?w=${width}`;
};

const HeroRankingItem = ({
  name,
  rank,
  tier,
  score,
  avatar,
}: HeroRankingItemProps) => {
  return (
    <div className="flex items-center px-6 py-2 border-t border-b border-gray-200/10">
      <div className="w-3/12 text-xls">{getNumberWithOrdinal(rank)}</div>
      <div className="w-7/12 flex gap-2 items-center">
        <Image
          className="w-8 h-8"
          src={avatar}
          loader={imageLoader}
          alt={name}
          width={40}
          height={40}
        />
        <div className="flex flex-col w-11/12">
          <span className="text-xls">{name}</span>
          <span className="text-xs">{tier >= 80 ? "Immortal" : "?"}</span>
        </div>
      </div>
      <div className="w-2/12 text-xls">{score.toFixed(0)}</div>
    </div>
  );
};
export default HeroRankingItem;
