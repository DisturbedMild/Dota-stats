"use client";

import Image from "next/image";

const AghanimAndShard = () => {
  return (
    <div
      className="flex justify-center flex-col items-center w-12 h-12 bg-black/45 rounded cursor-pointer opacity-70 hover:opacity-100 transition-all hover:scale-110 shadow-xl  hover:shadow-black/40">
      <Image src={'/icons/scepter.png'} width={30} height={30} alt="Talent Tree"/>
      <Image src={'/icons/shard.png'} width={28} height={20} alt="Talent Tree"/>
    </div>
  )
}

export default AghanimAndShard;
