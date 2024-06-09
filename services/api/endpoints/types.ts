export interface IPost {
  gid: string;
  title: string;
  url: string;
  author: string;
  contents: string;
  date: number;
  feedlabel: string;
}

export interface IHeroPlayerRanking {
  account_id: number;
  score: number;
  personaname: string;
  name?: string | null;
  avatar: string;
  last_login?: string;
  rank_tier: number
}

export interface IHeroPlayersRanking {
  hero_id?: number;
  rankings: IHeroPlayerRanking[]
}

export interface IMatches {
  match_id: number;
  duration: number;
  start_time: number;
  radiant_team_id: number;
  radiant_name: string;
  dire_team_id: number;
  dire_name: string;
  leagueid: number;
  league_name: string;
  series_id: number;
  series_type: number;
  radiant_score: number;
  dire_score: number;
  radiant_win: boolean;
  radiant: boolean;
}

export interface IMatchDuration {
  duration_bin: string;
  games_played: number;
  wins: number;
}

export interface IHeroPlayer {
  account_id: number;
  steamid: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  profileurl: string;
  personalname: string;
  last_login: string;
  full_history_name: string;
  cheese: number;
  fh_unavalible: boolean;
  loccountrycode: string;
  name: string;
  country_code: string;
  fantasy_role: number;
  team_id: number;
  team_name: string;
  team_tag: string;
  is_locked: boolean;
  is_pro: boolean;
  locked_until: number;
}

export type IHeroPlayers = IHeroPlayer[];

export interface IHeroItemsPopolarity {
  start_game_items: unknown;
  early_game_items: unknown;
  mid_game_items: unknown;
  late_game_items: unknown;
}

export interface IPublicMatches {
  match_id: number;
  radiant_win: boolean;
  start_time: number;
  duration: number;
  lobby_type: number;
  game_mode: number;
  avg_rank_tier: number;
  num_rank_tier: number;
  radiant_team: number[];
  dire_team: number[];
}

export interface IMatch {
  match_id: number;
  barracks_status_dire: number;
  barracks_status_radiant: number;
  cluster: number;
  cosmetics: unknown;
  property1: number;
  property2: number;
  dire_score: number;
  draft_timings: [
    {
      order: number;
      pick: number;
      active_team: number;
      hero_id: number;
      player_slot: number;
      extra_time: number;
      total_time_taken: number;
    }
  ];
  duration: number;
  engine: number;
  first_blood_time: number;
  game_mode: number;
  human_players: number;
  leagueid: number;
  lobby_type: number;
  match_seq_num: number;
  negative_votes: number;
  objectives: unknown[];
  picks_bans: [
    {
      is_pick: boolean;
      hero_id: number;
      team: number;
      order: number;
    }
  ];
  positive_votes: number;
  radiant_gold_adv: number[];
  radiant_score: number;
  radiant_win: boolean;
  radiant_xp_adv: number[];
  start_time: number;
  teamfights: unknown[];
  tower_status_dire: number;
  tower_status_radiant: number;
  version: number;
  replay_salt: number;
  series_id: number;
  series_type: number;
  radiant_team: unknown;
  dire_team: unknown;
  league: unknown;
  skill: number;
  // players: IPlayer[];
  players: any;
  patch: number;
  region: number;
  all_word_counts: unknown;
  my_word_counts: unknown;
  throw: number;
  comeback: number;
  loss: number;
  win: number;
  replay_url: number;
}

export interface IHero {
  id: number;
  name: string;
  localize_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
}

export type IHeroes = IHero[];

export interface IHeroStats {
  id: number;
  name: HeroKey;
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
  turn_rate: null;
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

export interface IMatchup {
  hero_id?: number;
  games_played: number;
  wins: number;
}

export interface IHeroAbilities {
  abilities: string[];
  talents: [
    {
      name: string;
      level: string;
    }
  ];
}

export interface IAbility {
  dname: string;
  behavior: string;
  dmg_type: string;
  bkbpierce: string;
  desc: string;
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

export type HeroKey = "npc_dota_hero_antimage" | "npc_dota_hero_axe";
