"use client";

import AghanimPopupDescription from "@/components/hero/abilities/AghanimPopupDescription";
import { Ability } from "@/types/index";

type AghanimPopupProps = {
  aghanimAbility: Ability;
};

const AghanimPopup = ({ aghanimAbility }: AghanimPopupProps) => {
  return <AghanimPopupDescription {...aghanimAbility} />;
};

export default AghanimPopup;
