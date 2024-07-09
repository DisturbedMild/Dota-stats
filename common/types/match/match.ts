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
