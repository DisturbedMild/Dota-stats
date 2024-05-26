import {
  IMatch,
  IPublicMatches,
  IMatches,
} from "@/services/api/endpoints/types";
import { AxiosClient } from "@/services/api/axios-client";

export class MatchEndpoint {
  constructor(private readonly httpClient: AxiosClient) {
    this.httpClient = httpClient;
  }

  async getHeroMatches(hero_id: number): Promise<IMatches> {
    const request = await this.httpClient.get<IMatches>(
      `https://api.opendota.com/api/heroes/${hero_id}/matches`
    );

    return request.data;
  }

  async getProMatches(): Promise<IMatches> {
    const request = await this.httpClient.get<IMatches>(
      "https://api.opendota.com/api/proMatches"
    );

    return request.data;
  }

  async getPublicMatches(query?: string): Promise<IPublicMatches> {
    const request = await this.httpClient.get<IPublicMatches>(
      `https://api.opendota.com/api/publicMatches${query}`
    );

    return request.data;
  }

  async getMatch(match_id: number): Promise<IMatch> {
    const request = await this.httpClient.get<IMatch>(
      `https://api.opendota.com/api/matches/${match_id}`
    );

    return request.data;
  }
}
