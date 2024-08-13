"use client";

import { useEffect, useState } from "react";
import abilitiesData from "dotaconstants/build/abilities.json"
import aghsDescData from "dotaconstants/build/aghs_desc.json"
import Image from "next/image";
import { useParams } from "next/navigation";

import AghanimPopup from "@/components/hero/abilities/AghanimPopup";
import AghanimShardPopup from "@/components/hero/abilities/AghanimShardPopup";
import {Abilities, Ability, AghDescription} from "@/types/index";

const AghanimAndShard = () => {
  const abilities: Record<string, Ability> = JSON.parse(JSON.stringify(abilitiesData))
  const { heroId }: { heroId: string } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [aghanimAbility, setAghanimAbility] = useState<Ability | null>(null);
  const [shardAbility, setShardAbility] = useState<Ability | null>(null);

  const aghsDesc = JSON.parse(JSON.stringify(aghsDescData))

  useEffect(() => {
    const getAghanim = (data: AghDescription[]) => {
      if (!data || !abilities) return null;
      const [currentHeroAghanim] = data.filter(
        (element: AghDescription) => element.hero_id === Number(heroId),
      );

      for (const key in abilities) {
        if (abilities[key].dname === currentHeroAghanim.scepter_skill_name) {
          setAghanimAbility(abilities[key]);
        }
        if (abilities[key].dname === currentHeroAghanim.shard_skill_name) {
          setShardAbility(abilities[key]);
        }
      }
    };
    getAghanim(aghsDesc);
  }, [heroId]);

  return (
    <div
      className={`flex justify-center flex-col items-center w-12 h-12 bg-black/45 rounded cursor-pointer opacity-70 hover:opacity-100 transition-all hover:scale-110 shadow-xl  hover:shadow-black/40`}
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <Image
        src={"/icons/scepter.png"}
        width={30}
        height={30}
        alt="Talent Tree"
      />
      <Image
        src={"/icons/shard.png"}
        width={28}
        height={20}
        alt="Talent Tree"
      />
      {showPopup && (
        <div className="absolute -top-12 right-24">
          {aghanimAbility && (
            <AghanimPopup
              key={Math.random() * 1000}
              aghanimAbility={aghanimAbility}
            />
          )}
          {shardAbility && (
            <AghanimShardPopup
              key={Math.random() * 1000}
              aghanimShardAbility={shardAbility}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AghanimAndShard;
