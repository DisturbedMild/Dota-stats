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
    }
  ];
  lore: string;
  img: string;
}

export interface Abilities {
  abilities: Ability[]
}

export interface HeroAbilitiesNames {
  abilities: string[];
  talents: {
    name: string;
    level: string;
  }[];
}
