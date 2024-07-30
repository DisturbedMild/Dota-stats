import { useReactQueryRequest } from "@/common/hooks/useReactQueryRequest";

export const useItems = () => {
  return useReactQueryRequest(
    "items",
    "https://api.opendota.com/api/constants/items",
  );
};

export const useHeroes = () => {
  return useReactQueryRequest("heroes", "https://api.opendota.com/api/heroes");
};

export const useAbilities = () => {
  return useReactQueryRequest(
    "abilities",
    "https://api.opendota.com/api/constants/abilities",
  );
};

export const useHeroMatchups = (heroId: number) => {
  return useReactQueryRequest(
    "hero-matchups",
    `https://api.opendota.com/api/heroes/${heroId}/matchups`,
  );
};

export const useAghsDesc = () => {
  return useReactQueryRequest(
    "aghs_desc",
    "https://api.opendota.com/api/constants/aghs_desc",
  );
};

export const useHeroAbilities = () => {
  return useReactQueryRequest(
    "heroAbilities",
    "https://api.opendota.com/api/constants/hero_abilities",
  );
};

export const useHeroPlayers = (heroId: number) => {
  return useReactQueryRequest(
    "hero-players",
    `https://api.opendota.com/api/heroes/${heroId}/players`,
  );
};

export const usePublicMatches = () => {
  return useReactQueryRequest(
    "matches",
    "https://api.opendota.com/api/publicMatches?min_rank=80",
  );
};

export const useMatchesDuration = (heroId: number) => {
  return useReactQueryRequest(
    "matches-duration",
    `https://api.opendota.com/api/heroes/${heroId}/durations`,
  );
};

export const useHeroBenchmarks = (heroId: number) => {
  return useReactQueryRequest(
    "benchmark",
    `https://api.opendota.com/api/benchmarks?hero_id=${heroId}`,
  );
};

export const usePlayersHeroRanking = (heroId: number) => {
  return useReactQueryRequest(
    "players-hero-ranking",
    `https://api.opendota.com/api/rankings?hero_id=${heroId}`,
  );
};

export const useHeroItemsPopularity = (heroId: number) => {
  return useReactQueryRequest(
    "items-popularity",
    `https://api.opendota.com/api/heroes/${heroId}/itemPopularity`,
  );
};

export const useHeroMatches = (heroId: number) => {
  return useReactQueryRequest(
    "hero-matches",
    `https://api.opendota.com/api/heroes/${heroId}/matches`,
  );
};

export const useTeamPlayers = (teamId: string) => {
  return useReactQueryRequest(
    "team-players",
    `https://api.opendota.com/api/teams/${teamId}/players`,
  );
};

export const useTeamHeroes = (teamId: string) => {
  return useReactQueryRequest(
    "team-heroes",
    `https://api.opendota.com/api/teams/${teamId}/heroes`,
  );
};

export const useTeamMatches = (teamId: string) => {
  return useReactQueryRequest(
    "team-matches",
    `https://api.opendota.com/api/teams/${teamId}/matches`,
  );
};

export const useTeams = () => {
  return useReactQueryRequest("teams", "https://api.opendota.com/api/teams");
};

export const useTeamDescription = (teamId: string) => {
  return useReactQueryRequest(
    "team-desc",
    `https://api.opendota.com/api/teams/${teamId}`,
  );
};

export const useMatchRequest = (matchId: string) => {
  return useReactQueryRequest(
    "match",
    `https://api.opendota.com/api/matches/${matchId}`,
  );
};
