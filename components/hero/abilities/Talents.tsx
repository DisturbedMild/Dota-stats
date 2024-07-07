"use client";

import Image from "next/image";
import {useState} from "react";
import TalentsPopup from "@components/hero/abilities/TalentsPopup";
import {ITalent} from "@/services/api/endpoints/types";

type TalentsProps = {
  talents: ITalent[] | null,
}

const Talents = ({talents}: TalentsProps) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div
      className="relative w-12 h-12 bg-black/45 rounded cursor-pointer opacity-70 hover:opacity-100 transition-all hover:scale-110 shadow-xl  hover:shadow-black/40"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <Image src={'/icons/talent_tree.svg'} width={48} height={48} alt="Talent Tree" className="w-full h-full"/>
      {showPopup && <TalentsPopup talents={talents}/>}
    </div>
  )
}

export default Talents;
