"use client";

import AghanimPopupDescription from "@/components/hero/abilities/AghanimPopupDescription";
import { Ability } from "@/types/index";

type AghanimShardPopupProps = {
  aghanimShardAbility: Ability;
};

const AghanimShardPopup = ({ aghanimShardAbility }: AghanimShardPopupProps) => {
  return <AghanimPopupDescription {...aghanimShardAbility} />;
};

export default AghanimShardPopup;
