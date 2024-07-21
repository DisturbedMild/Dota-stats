export interface Item {
  abilities: [
    {
      type: string;
      title: string;
      description: string;
    }
  ],
  hint: [];
  id: number;
  img: string;
  dname: string;
  qual: string;
  cost: number;
  behavior: string | boolean | string[];
  notes: string;
  dispellable?: string;
  dmg_type?: string;
  bkbpierce?: string;
  target_team?: unknown[] | string;
  target_type?: string;
  attrib: {key: string, value: string, display?: string}[],
  mc: number | boolean;
  hc: boolean;
  cd: number | boolean;
  lore: string;
  components: string[] | null;
  created: boolean;
  charges: number | boolean;
}

export interface Items {
  [key: string]: Item;
}

export interface HeroItemsPopularity {
  start_game_items: number[];
  early_game_items: number[];
  mid_game_items: number[];
  late_game_items: number[];
}
