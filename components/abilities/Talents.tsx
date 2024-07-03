"use client";

import Image from "next/image";

const Talents = () => {

  return (
    <div
      className="w-12 h-12 bg-black/45 rounded cursor-pointer opacity-70 hover:opacity-100 transition-all hover:scale-110 shadow-xl  hover:shadow-black/40">
      <Image src={'/icons/talent_tree.svg'} width={48} height={48} alt="Talent Tree" className="w-full h-full"/>
    </div>
  )
}

export default Talents;
