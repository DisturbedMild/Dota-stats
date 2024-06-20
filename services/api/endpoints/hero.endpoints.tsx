import {
  IHeroes,
  IMatchDuration,
  IHeroPlayers,
  IHeroItemsPopularity,
  IHeroStats,
  IMatchup,
  IHeroPlayersRanking,
  IHeroBenchmarks,
  IMatch,
} from "@/services/api/endpoints/types";

import {AxiosClient} from "@/services/api/axios-client";

export class HeroEndpoint {
  constructor(private readonly httpClient: AxiosClient) {
    this.httpClient = httpClient;
  }

  async getHeroes(): Promise<IHeroes> {
    const request = await this.httpClient.get<IHeroes>(
      "https://api.opendota.com/api/heroes"
    );

    return request.data;
  }

  async getItems(): Promise<IHeroes> {
    const request = await this.httpClient.get<IHeroes>(
      "https://api.opendota.com/api/heroes"
    );

    return request.data;
  }

  async getHeroMatchups(hero_id: number): Promise<IMatchup[]> {
    const request = await this.httpClient.get<IMatchup[]>(
      `https://api.opendota.com/api/heroes/${hero_id}/matchups`
    );

    return request.data;
  }

  async getHeroMatches(hero_id: number): Promise<IMatch[]> {
    const request = await this.httpClient.get<IMatch[]>(
      `https://api.opendota.com/api/heroes/${hero_id}/matches`
    );

    return request.data;
  }

  async geHeroBenchmarks(hero_id: number): Promise<IHeroBenchmarks> {
    const request = await this.httpClient.get<IHeroBenchmarks>(
      `https://api.opendota.com/api/benchmarks?hero_id=${hero_id}`
    )

    return request.data;
  }

  async getHeroPlayersRanking(hero_id: number): Promise<IHeroPlayersRanking> {
    const request = await this.httpClient.get<IHeroPlayersRanking>(
      `https://api.opendota.com/api/rankings?hero_id=${hero_id}`
    );

    return request.data;
  }

  async getHeroMatchDuration(hero_id: number): Promise<IMatchDuration[]> {
    const request = await this.httpClient.get<IMatchDuration[]>(
      `https://api.opendota.com/api/heroes/${hero_id}/durations`
    );

    return request.data;
  }

  async getHeroPlayers(hero_id: number): Promise<IHeroPlayers> {
    const request = await this.httpClient.get<IHeroPlayers>(
      `https://api.opendota.com/api/heroes/${hero_id}/players`
    );

    return request.data;
  }

  async getHeroItemsPopularity(hero_id: number): Promise<IHeroItemsPopularity> {
    const request = await this.httpClient.get<IHeroItemsPopularity>(
      `https://api.opendota.com/api/heroes/${hero_id}/itemPopularity`
    );

    return request.data;
  }

  async getHeroStats(): Promise<IHeroStats[]> {
    const request = await this.httpClient.get<IHeroStats[]>(
      "https://api.opendota.com/api/heroStats"
    );
    return request.data;
  }
}
