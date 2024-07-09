import {
  Match,
  PublicMatches,
} from "@/types/index";
import { AxiosClient } from "@/services/api/axios-client";

export class MatchEndpoint {
  constructor(private readonly httpClient: AxiosClient) {
    this.httpClient = httpClient;
  }

  async getHeroMatches(hero_id: number): Promise<Match[]> {
    const request = await this.httpClient.get<Match[]>(
      `https://api.opendota.com/api/heroes/${hero_id}/matches`
    );

    return request.data;
  }

  async getProMatches(): Promise<Match[]> {
    const request = await this.httpClient.get<Match[]>(
      "https://api.opendota.com/api/proMatches"
    );

    return request.data;
  }

  async getPublicMatches(query?: string): Promise<PublicMatches> {
    const request = await this.httpClient.get<PublicMatches>(
      `https://api.opendota.com/api/publicMatches${query}`
    );

    return request.data;
  }

  async getMatch(match_id: number): Promise<Match> {
    const request = await this.httpClient.get<Match>(
      `https://api.opendota.com/api/matches/${match_id}`
    );

    return request.data;
  }
}
