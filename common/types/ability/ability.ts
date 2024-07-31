import {Talent} from "@/common/types";

export interface Ability {
  dname: string;
  behavior: string | string[];
  dmg_type: string;
  bkbpierce: string;
  desc: string;
  scepter_skill_name?: string;
  shard_skill_name?: string;
  mc?: string | string[];
  cd?: string | string[];
  dispellable?: string;
  talents: {
    name: string;
    level: string;
  }[];
  attrib: [
    {
      key: string;
      header: string;
      value: string | string[];
    },
  ];
  lore: string;
  img: string;
}

interface Talents {
  name: string;
  level: string;
}

export interface ShortAbilitiesDesc {
  abilities: string[],
  talents: Talents[]
}

export interface Abilities {
  abilities: Ability[];
}

export interface AghDescription {
  hero_name: string;
  hero_id: number;
  has_scepter: boolean;
  scepter_desc: string;
  scepter_skill_name: string;
  scepter_new_skill: boolean;
  has_shard: boolean;
  shard_desc: string;
  shard_skill_name: string;
  shard_new_skill: boolean;
}

export interface HeroAbilitiesNames {
  abilities: string[];
  talents: {
    name: string;
    level: string;
  }[];
}
