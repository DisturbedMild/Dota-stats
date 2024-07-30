export interface Matchup {
  hero_id?: number;
  games_played: number;
  wins: number;
}

export interface SortedHeroMatchup extends Matchup {
  winrate: number;
  advantage: number;
}
