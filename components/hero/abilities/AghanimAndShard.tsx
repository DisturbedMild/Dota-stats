"use client";

import {useContext, useEffect, useState} from "react";
import Image from "next/image";
import {useParams} from "next/navigation";

import {APIContext} from "@/common/context/api-context";
import AghanimPopup from "@/components/hero/abilities/AghanimPopup";
import AghanimShardPopup from "@/components/hero/abilities/AghanimShardPopup";
import {API} from "@/services/api";
import {Ability} from "@/types/index";

interface AghanimAndShardProps {
  heroName: string
}

const AghanimAndShard = ({heroName}: AghanimAndShardProps) => {
  const {abilities} = useContext(APIContext);
  const {heroId}: {heroId: string} = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [aghanimAbility, setAghanimAbility] = useState<Ability | null>(null);
  const [shardAbility, setShardAbility] = useState<Ability | null>(null);
  useEffect(() => {
    const getAghanim = (data: Ability[]) => {
      const [currentHeroAghanim] = data.filter((element: any) => element.hero_id === Number(heroId))

      for (const key in abilities) {
        if (abilities[key].dname === currentHeroAghanim.scepter_skill_name) {
          setAghanimAbility(abilities[key])
        }
        if (abilities[key].dname === currentHeroAghanim.shard_skill_name) {
          setShardAbility(abilities[key])
        }
      }
    }
    API.constants
      .getConstants("aghs_desc")
      .then((data) => getAghanim(data));
  }, []);

  return (
    <div
      className={`flex justify-center flex-col items-center w-12 h-12 bg-black/45 rounded cursor-pointer opacity-70 hover:opacity-100 transition-all hover:scale-110 shadow-xl  hover:shadow-black/40`}
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <Image src={'/icons/scepter.png'} width={30} height={30} alt="Talent Tree"/>
      <Image src={'/icons/shard.png'} width={28} height={20} alt="Talent Tree"/>
      {showPopup && (
        <div className="absolute -top-12 right-24">
          {aghanimAbility && <AghanimPopup key={aghanimAbility.dname} aghanimAbility={aghanimAbility}/>}
          {shardAbility && <AghanimShardPopup key={shardAbility.dname} aghanimShardAbility={shardAbility} />}
        </div>
      )}
    </div>
  )
}

export default AghanimAndShard;



