export interface HeroBenchmarks {
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
