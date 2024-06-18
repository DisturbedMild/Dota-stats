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

export interface IHeroBenchmarks {
  hero_id?: number;
  result: {
    gold_per_min: {
      percentile: number;
      value: number
    }[],
    xp_per_min: {
      percentile: number;
      value: number
    }[],
    kills_per_min: {
      percentile: number;
      value: number
    }[],
    last_hits_per_min: {
      percentile: number;
      value: number
    }[],
    hero_damage_per_min: {
      percentile: number;
      value: number
    }[],
    hero_healing_per_min: {
      percentile: number;
      value: number
    }[],
    tower_damage: {
      percentile: number;
      value: number
    }[],
  }
}

export interface IMatch {
  match_id: number;
  account_id: number;
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
  kills: number;
  deaths: number;
  assists: number;
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
  localized_name: string;
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

export interface ISortedHeroMatchup extends IMatchup {
  winrate: number;
  advantage: number
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

export type HeroKey =
  "npc_dota_hero_antimage" |
  "npc_dota_hero_axe" |
  "npc_dota_hero_bane" |
  "npc_dota_hero_bloodseeker" |
  "npc_dota_hero_crystal_maiden" |
  "npc_dota_hero_drow_ranger" |
  "npc_dota_hero_earthshaker" |
  "npc_dota_hero_juggernaut" |
  "npc_dota_hero_mirana" |
  "npc_dota_hero_morphling" |
  "npc_dota_hero_nevermore" |
  "npc_dota_hero_phantom_lancer" |
  "npc_dota_hero_puck" |
  "npc_dota_hero_pudge" |
  "npc_dota_hero_razor" |
  "npc_dota_hero_sand_king" |
  "npc_dota_hero_storm_spirit" |
  "npc_dota_hero_sven" |
  "npc_dota_hero_tiny" |
  "npc_dota_hero_vengefulspirit" |
  "npc_dota_hero_windrunner" |
  "npc_dota_hero_zuus" |
  "npc_dota_hero_kunkka" |
  "npc_dota_hero_lina" |
  "npc_dota_hero_lion" |
  "npc_dota_hero_shadow_shaman" |
  "npc_dota_hero_slardar" |
  "npc_dota_hero_tidehunter" |
  "npc_dota_hero_witch_doctor" |
  "npc_dota_hero_lich" |
  "npc_dota_hero_riki" |
  "npc_dota_hero_enigma" |
  "npc_dota_hero_tinker" |
  "npc_dota_hero_sniper" |
  "npc_dota_hero_necrolyte" |
  "npc_dota_hero_warlock" |
  "npc_dota_hero_beastmaster" |
  "npc_dota_hero_queenofpain" |
  "npc_dota_hero_venomancer" |
  "npc_dota_hero_faceless_void" |
  "npc_dota_hero_skeleton_king" |
  "npc_dota_hero_death_prophet" |
  "npc_dota_hero_phantom_assassin" |
  "npc_dota_hero_pugna" |
  "npc_dota_hero_templar_assassin" |
  "npc_dota_hero_viper" |
  "npc_dota_hero_luna" |
  "npc_dota_hero_dragon_knight" |
  "npc_dota_hero_dazzle" |
  "npc_dota_hero_rattletrap" |
  "npc_dota_hero_leshrac" |
  "npc_dota_hero_furion" |
  "npc_dota_hero_life_stealer" |
  "npc_dota_hero_dark_seer" |
  "npc_dota_hero_clinkz" |
  "npc_dota_hero_omniknight" |
  "npc_dota_hero_enchantress" |
  "npc_dota_hero_huskar" |
  "npc_dota_hero_night_stalker" |
  "npc_dota_hero_broodmother" |
  "npc_dota_hero_bounty_hunter" |
  "npc_dota_hero_weaver" |
  "npc_dota_hero_jakiro" |
  "npc_dota_hero_batrider" |
  "npc_dota_hero_chen" |
  "npc_dota_hero_spectre" |
  "npc_dota_hero_ancient_apparition" |
  "npc_dota_hero_doom_bringer" |
  "npc_dota_hero_ursa" |
  "npc_dota_hero_spirit_breaker" |
  "npc_dota_hero_gyrocopter" |
  "npc_dota_hero_alchemist" |
  "npc_dota_hero_invoker" |
  "npc_dota_hero_silencer" |
  "npc_dota_hero_obsidian_destroyer" |
  "npc_dota_hero_lycan" |
  "npc_dota_hero_brewmaster" |
  "npc_dota_hero_shadow_demon" |
  "npc_dota_hero_lone_druid" |
  "npc_dota_hero_chaos_knight" |
  "npc_dota_hero_meepo" |
  "npc_dota_hero_treant" |
  "npc_dota_hero_ogre_magi" |
  "npc_dota_hero_undying" |
  "npc_dota_hero_rubick" |
  "npc_dota_hero_disruptor" |
  "npc_dota_hero_nyx_assassin" |
  "npc_dota_hero_naga_siren" |
  "npc_dota_hero_keeper_of_the_light" |
  "npc_dota_hero_wisp" |
  "npc_dota_hero_visage" |
  "npc_dota_hero_slark" |
  "npc_dota_hero_medusa" |
  "npc_dota_hero_troll_warlord" |
  "npc_dota_hero_centaur" |
  "npc_dota_hero_magnataur" |
  "npc_dota_hero_shredder" |
  "npc_dota_hero_bristleback" |
  "npc_dota_hero_tusk" |
  "npc_dota_hero_skywrath_mage" |
  "npc_dota_hero_abaddon" |
  "npc_dota_hero_elder_titan" |
  "npc_dota_hero_legion_commander" |
  "npc_dota_hero_techies" |
  "npc_dota_hero_ember_spirit" |
  "npc_dota_hero_earth_spirit" |
  "npc_dota_hero_abyssal_underlord" |
  "npc_dota_hero_terrorblade" |
  "npc_dota_hero_phoenix" |
  "npc_dota_hero_oracle" |
  "npc_dota_hero_winter_wyvern" |
  "npc_dota_hero_arc_warden" |
  "npc_dota_hero_monkey_king" |
  "npc_dota_hero_dark_willow" |
  "npc_dota_hero_pangolier" |
  "npc_dota_hero_grimstroke" |
  "npc_dota_hero_hoodwink" |
  "npc_dota_hero_void_spirit" |
  "npc_dota_hero_snapfire" |
  "npc_dota_hero_mars" |
  "npc_dota_hero_dawnbreaker" |
  "npc_dota_hero_marci" |
  "npc_dota_hero_primal_beast" |
  "npc_dota_hero_muerta";
