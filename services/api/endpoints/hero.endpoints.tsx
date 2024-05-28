import {
  IHeroes,
  IMatches,
  IMatchDuration,
  IHeroPlayers,
  IHeroItemsPopolarity,
  IHeroStats,
} from "@/services/api/endpoints/types";
import { AxiosClient } from "@/services/api/axios-client";

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

  async getHeroMatchups(hero_id: number): Promise<IMatches> {
    const request = await this.httpClient.get<IMatches>(
      `https://api.opendota.com/api/heroes/${hero_id}/matchups`
    );

    return request.data;
  }

  async getHeroMatchDuration(hero_id: number): Promise<IMatchDuration> {
    const request = await this.httpClient.get<IMatchDuration>(
      `https://api.opendota.com/api/heroes/${hero_id}/duration`
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

  async getHeroStats(): Promise<IHeroStats> {
    const request = await this.httpClient.get<IHeroStats>(
      "https://api.opendota.com/api/heroStats"
    );
    return request.data;
  }
}
