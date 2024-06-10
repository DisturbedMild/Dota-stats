import {
  IHeroes,
  IMatchDuration,
  IHeroPlayers,
  IHeroItemsPopolarity,
  IHeroStats,
  IMatchup,
  IHeroPlayersRanking,
  IHeroBenchmarks,
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

  async getHeroMatchups(hero_id: number): Promise<IMatchup[]> {
    const request = await this.httpClient.get<IMatchup[]>(
      `https://api.opendota.com/api/heroes/${hero_id}/matchups`
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

  async getHeroMatchDuration(hero_id: number): Promise<IMatchDuration> {
    const request = await this.httpClient.get<IMatchDuration>(
      `https://api.opendota.com/api/rankings?hero_id=1`
    );

    return request.data;
  }

  async getHeroPlayers(hero_id: number): Promise<IHeroPlayers> {
    const request = await this.httpClient.get<IHeroPlayers>(
      `https://api.opendota.com/api/heroes/${hero_id}/players`
    );

    return request.data;
  }

  async getHeroItemsPopularity(hero_id: number): Promise<IHeroItemsPopolarity> {
    const request = await this.httpClient.get<IHeroItemsPopolarity>(
      `https://api.opendota.com/api/heroes/${hero_id}/items`
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
