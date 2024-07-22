"use client";

import {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import {v4 as uuidv4} from "uuid";

import TalentItem from "@/components/hero/abilities/TalentItem";
import {Talent} from "@/types/index";

type TalentsPopupProps = {
  talents: Talent[],
}

type TalentLevel = Pick<Talent, "talentLevel">;

const TalentCircle = ({talentLevel}: TalentLevel) => {

  return <div
    className="p-1 rounded-full basis-[30px] h-[30px] flex items-center justify-center bg-black/40 shadow-center shadow-amber-300 text-amber-300">{talentLevel}</div>
}

const TalentsPopup = ({talents}: TalentsPopupProps) => {
  const [updatedTalentsList, setUpdatedTalentsList] = useState<Talent[] | null>(null);


  const addLevelsToArray = useCallback(() => {
    if (!talents) return null
    let talentLevel = 10;
    let level = 0;

    const updatedTalentsArray: Talent[] = [...talents];
    for (let i = 0; i < updatedTalentsArray.length; i++) {
      if (updatedTalentsArray[i].desc && updatedTalentsArray[i].level > level) {
        level = updatedTalentsArray[i].level;
        updatedTalentsArray.splice(i + 1, 0, {desc: "", level, talentLevel: talentLevel});
        talentLevel += 5;
      }
    }
    return updatedTalentsArray;
  }, [talents])

  useEffect(() => {
    const talentsWithLevels = addLevelsToArray();
    setUpdatedTalentsList(talentsWithLevels)
  }, [addLevelsToArray]);

  return (
    <div
      className="absolute -bottom-20 right-14 flex items-center p-1 w-[440px] cursor-pointer z-10 border border-gray-900 bg-slate-800">
      <Image src={'/icons/talent_tree.svg'} width={150} height={150} alt="Talent Tree"
             className="absolute z-1 w-full h-full opacity-10"/>
      <div className="w-full z-2 flex flex-wrap justify-center gap-x-2 gap-y-4 items-center text-center text-white">
        {updatedTalentsList && updatedTalentsList.map((talent: Talent) => {
          const id = uuidv4();
          if (talent.talentLevel) {
            return <TalentCircle key={id} talentLevel={talent.talentLevel}/>;
          }
          if (talent.desc) return <TalentItem key={id} desc={talent.desc}/>
        })}
      </div>
    </div>
  )
}

export default TalentsPopup;
