import {
  Heroes,
  MatchDuration,
  HeroPlayers,
  HeroItemsPopularity,
  HeroStats,
  Matchup,
  PlayersHeroRanking,
  HeroBenchmarks,
  Match,
} from "@/types/index";

import {AxiosClient} from "@/services/api/axios-client";

export class HeroEndpoint {
  constructor(private readonly httpClient: AxiosClient) {
    this.httpClient = httpClient;
  }

  async getHeroes(): Promise<Heroes> {
    const request = await this.httpClient.get<Heroes>(
      "https://api.opendota.com/api/heroes"
    );

    return request.data;
  }

  async getItems(): Promise<Heroes> {
    const request = await this.httpClient.get<Heroes>(
      "https://api.opendota.com/api/heroes"
    );

    return request.data;
  }

  async getHeroMatchups(hero_id: number): Promise<Matchup[]> {
    const request = await this.httpClient.get<Matchup[]>(
      `https://api.opendota.com/api/heroes/${hero_id}/matchups`
    );

    return request.data;
  }

  async getHeroMatches(hero_id: number): Promise<Match[]> {
    const request = await this.httpClient.get<Match[]>(
      `https://api.opendota.com/api/heroes/${hero_id}/matches`
    );

    return request.data;
  }

  async geHeroBenchmarks(hero_id: number): Promise<HeroBenchmarks> {
    const request = await this.httpClient.get<HeroBenchmarks>(
      `https://api.opendota.com/api/benchmarks?hero_id=${hero_id}`
    )

    return request.data;
  }

  async getHeroPlayersRanking(hero_id: number): Promise<PlayersHeroRanking> {
    const request = await this.httpClient.get<PlayersHeroRanking>(
      `https://api.opendota.com/api/rankings?hero_id=${hero_id}`
    );

    return request.data;
  }

  async getHeroMatchDuration(hero_id: number): Promise<MatchDuration[]> {
    const request = await this.httpClient.get<MatchDuration[]>(
      `https://api.opendota.com/api/heroes/${hero_id}/durations`
    );

    return request.data;
  }

  async getHeroPlayers(hero_id: number): Promise<HeroPlayers> {
    const request = await this.httpClient.get<HeroPlayers>(
      `https://api.opendota.com/api/heroes/${hero_id}/players`
    );

    return request.data;
  }

  async getHeroItemsPopularity(hero_id: number): Promise<HeroItemsPopularity> {
    const request = await this.httpClient.get<HeroItemsPopularity>(
      `https://api.opendota.com/api/heroes/${hero_id}/itemPopularity`
    );

    return request.data;
  }

  async getHeroStats(): Promise<HeroStats[]> {
    const request = await this.httpClient.get<HeroStats[]>(
      "https://api.opendota.com/api/heroStats"
    );
    return request.data;
  }
}
