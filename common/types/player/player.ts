export interface PlayerHeroRanking {
  account_id: number;
  score: number;
  personaname: string;
  name?: string | null;
  avatar: string;
  last_login?: string;
  rank_tier: number
}

export interface PlayersHeroRanking {
  hero_id?: number;
  rankings: PlayerHeroRanking[]
}

export interface HeroPlayer {
  account_id: number;
  games_played: number;
  wins: number;
}

export interface ITeamPlayer {
  account_id: number;
  name: string;
  games_played: number;
  wins: number;
  is_current_team_member: boolean
}

export type HeroPlayers = HeroPlayer[];
