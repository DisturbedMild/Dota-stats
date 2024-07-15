import {HeroKeys} from "@/common/types/keys/heroes";

export interface Hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  legs: number;
}

export interface Heroes  {
  heroes: Hero[]
}

export interface HeroStats {
  id: number;
  name: HeroKeys;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  base_health: number;
  base_health_regen: number;
  base_mana: number;
  base_mana_regen: number;
  base_armor: number;
  base_mr: number;
  base_attack_min: number;
  base_attack_max: number;
  base_str: number;
  base_agi: number;
  base_int: number;
  str_gain: number;
  agi_gain: number;
  int_gain: number;
  attack_range: number;
  projectile_speed: number;
  attack_rate: number;
  base_attack_time: number;
  attack_point: number;
  move_speed: number;
  turn_rate: null | number;
  cm_enabled: true;
  legs: null;
  day_vision: number;
  night_vision: number;
  localized_name: string;
  "1_pick": number;
  "1_win": number;
  "2_pick": number;
  "2_win": number;
  "3_pick": number;
  "3_win": number;
  "4_pick": number;
  "4_win": number;
  "5_pick": number;
  "5_win": number;
  "6_pick": number;
  "6_win": number;
  "7_pick": number;
  "7_win": number;
  "8_pick": number;
  "8_win": number;
  turbo_picks: number;
  number: number[];
  turbo_wins: 114397;
  turbo_wins_trend: number[];
  pro_pick: number;
  pro_win: number;
  pro_ban: number;
  pub_pick: number;
  pub_pick_trend: number[];
  pub_win: number;
  pub_win_trend: number[];
}
export interface HeroMatch {
  match_id: number;
  duration: number;
  start_time: number;
  leagueid: number;
  league_name: string;
  radiant_win: boolean;
  radiant: boolean;
  player_slot: number;
  account_id: number;
  kills: number;
  deaths: number;
  assists: number;
}
