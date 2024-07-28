export interface Match {
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
  picks_bans: {
    is_pick: boolean;
    hero_id: number;
    team: number;
    order: number;
  }[];
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
  // players: Player[];
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

export interface MatchDuration {
  duration_bin: string;
  games_played: number;
  wins: number;
}

export interface PublicMatches {
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

export interface ITeamMatch {
  match_id: number;
  radiant_win: boolean;
  radiant_score:number;
  dire_score: number;
  radiant: boolean;
  duration: number;
  start_time: number;
  leagueid: number;
  league_name:string;
  cluster: number;
  opposing_team_id: number;
  opposing_team_name: string;
  opposing_team_logo: string;
}

export interface FullMatchInfo {
  barracks_status_dire: number;
  barracks_status_radiant: number;
  chat: {
    key: string;
    player_slot: number;
    slot: number;
    time: number;
    type: string;
  }[],
  cluster: number;
  dire_captain: number;
  dire_logo: number;
  dire_name: string;
  dire_score: number;
  dire_team: {
    logo_url: string;
    name: string;
    tag: string;
    team_id: number;
  };
  dire_team_complete: number;
  dire_team_id: number;
  draft_timings: {
    active_team: number;
    extra_time: number;
    hero_id: number;
    order: number;
    pick:boolean;
    player_slot: null;
    total_time_taken: number;
  }[];
  duration: number;
  engine: number;
  first_blood_time: number;
  flags: number;
  game_mode: number;
  human_players: number;
  league: {
    banner: unknown;
    leagueid: number;
    name: number;
    ticket: any;
    tier: string
  }[]
  leagueid: number;
  lobby_type: number;
  loss: number;
  match_id: number;
  match_seq_num: number;
  metadata: any;
  objectives: MatchObjectives[];
  od_data:{
    has_api: boolean;
    has_gcdata: boolean;
    has_parsed: boolean;
  }
  patch: number;
  picks_bans: {
    hero_id: number;
    is_pick: boolean;
    order: number;
    team: number;
  }[];
  players: FullMatchInfoPlayer[];
  pre_game_duration: number;
  radiant_captain: number;
  radiant_gold_adv: number[];
  radiant_logo: number;
  radiant_name: number;
  radiant_score: number;
  radiant_team: {
    logo_url: string;
    name: string;
    tag: string;
    team_id: number;
  };
  radiant_team_complete: number;
  radiant_team_id: number;
  radiant_win: boolean;
  radiant_xp_adv: number[];
  region: number;
  replay_salt: number;
  replay_url: string;
  series_id: number;
  series_type: number;
  start_time: number;
  team_fights: {};
  throw: number;
  tower_status_dire: number;
  tower_status_radiant: number;
  version: number;
}

interface FullMatchInfoPlayer {
  abandons: number;
  ability_targets: unknown;
  ability_upgrades_arr: number[];
  account_id: number;
  actions: unknown;
  actions_per_min: number;
  aghanims_scepter: number;
  aghanims_shard: number;
  ancient_kills: number;
  assists: number;
  backpack_0: number;
  backpack_1: number;
  backpack_2: number;
  benchmarks: Record<string, {pct: number; raw: number}>;
  buyback_count:number;
  buyback_log: any[];
  camps_stacked: number;
  cluster: number;
  connection_log: any[];
  courier_kills: number;
  creeps_stacked: number;
  damage: Record<string, number>;
  damage_inflictor: Record<string, number>;
  damage_inflictor_received: Record<string, number>;
  damage_taken: Record<string, number>;
  damage_targets: Record<string, number>;
  deaths: number;
  denies: number;
  dn_t: number[];
  duration: number;
  first_purchase_time: Record<string, number>;
  firstblood_claimed: number;
  game_mode: number;
  gold: number;
  gold_per_min: number;
  gold_reasons: any;
  gold_spent: number;
  gold_t: number[];
  healing: Record<string, number>;
  hero_damage: number;
  hero_healing: number;
  hero_hits: Record<string, number>;
  hero_id: number;
  hero_kills: number;
  hero_variant: number;
  isRadiant: boolean;
  is_contributor: boolean;
  is_roaming: boolean;
  is_subscriber: boolean;
  item_0: number;
  item_1: number;
  item_2: number;
  item_3: number;
  item_4: number;
  item_5: number;
  item_neutral: number;
  item_usage: Record<string, number>;
  item_uses: Record<string, number>;
  item_win: Record<string, number>;
  kda: number;
  kill_streaks: Record<string, number>;
  killed: Record<string, number>;
  killed_by: Record<string, number>;
  kills: number;
  kills_log: {
    key: string; time: number
  }[];
  kills_per_min: number;
  lane: number;
  lane_efficiency: number;
  lane_efficiency_pct: number;
  lane_kills: number;
  lane_pos: {[key:string]: Record<string, number>};
  lane_role: number;
  last_hits: number;
  last_login: string;
  leaver_status: number;
  level: number;
  lh_t: Record<string, number>[];
  life_state: Record<string, number>;
  life_state_dead: number;
  lobby_type:number;
  lose: number;
  max_hero_hit: any;
  moonshard: number;
  multi_kills: Record<string, number>;
  name: string;
  necronomicon_kills: number;
  net_worth: number;
  neutral_kills: number;
  obs: {[key: string]: Record<string, number>};
  obs_left_log: MatchPlayerLeftLog[];
  obs_log: MatchPlayerLog[];
  obs_placed: number;
  observer_kills: number;
  observer_uses: number;
  observers_placed: number;
  party_id: number;
  party_size: number;
  patch: number;
  permanent_buffs: Record<string, number>[];
  personaname: string;
  pings: number;
  player_slot: number;
  pred_vict: boolean;
  purchase: Record<string, number>;
  purchase_log: {[key:string]: {time: number; key: string}}[];
  purchase_time: Record<string, number>;
  purchase_tpscroll: number;
  purchase_ward_observer: number;
  purchase_ward_sentry: number;
  radiant_win: boolean;
  randomed: number;
  rank_tier: number;
  region: number;
  roshan_kills: number;
  roshans_killed: number;
  rune_pickups: number;
  runes: Record<string, number>;
  runes_log: {[key:string]: {time: number; key: string}}[];
  sen: {[key:string]: {time: number; key: string}}[];
  sen_left_log: MatchPlayerLeftLog[];
  sen_log: MatchPlayerLog[];
  sen_placed: number;
  sentry_kills: number;
  sentry_uses: number;
  start_time: number;
  stuns: number;
  team_number: number;
  team_slot: number;
  teamfight_participation: number;
  times: Record<string, number>[];
  total_gold: number;
  total_xp: number;
  tower_damage: number;
  tower_kills: number;
  towers_killed: number;
  win: number;
  xp_per_min: number;
  xp_reasons: Record<string, number>;
  xp_t: Record<string, number>[]
}

interface MatchObjectives {
  key?: number | string;
  killer?: number;
  player_slot: number;
  slot?: number;
  time: number;
  type: string;
  unit?: string;
  value?: number;
}

interface MatchPlayerLeftLog {
  attackername: string,
  ehandle: number;
  entityleft: boolean;
  key: string;
  player_slot: number;
  slot: number;
  time: number;
  type: string;
  x: number;
  y: number;
  z: number;
}

interface MatchPlayerLog {
  ehandle: number;
  entityleft: boolean;
  key: string;
  player_slot: number;
  slot: number;
  time: number;
  type: string;
  x: number;
  y: number;
  z: number;
}
