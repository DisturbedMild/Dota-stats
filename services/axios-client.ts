import { API_URL } from "@/constants";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export class AxiosClient {
  /**
   * API host URL
   * Example: http://localhost:3000
   *
   * @private
   */
  private readonly baseUrl: string = API_URL || "";

  /**
   * Axios instance
   *
   * @private
   */
  private readonly axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: `${this.baseUrl}/`,
      headers: { "Content-Type": "application/json" },
    });
  }

  public get<T>(url: string): Promise<AxiosResponse<T>> {
    return this.axiosClient.get<T>(url);
  }

  public getHeroes<T>(): Promise<AxiosResponse<T>> {
    return this.axiosClient.get<T>("https://api.opendota.com/api/heroes");
  }

  public getHeroMatchups<T>(hero_id: number): Promise<AxiosResponse<T>> {
    return this.axiosClient.get<T>(
      `https://api.opendota.com/api/heroes/${hero_id}/matchups`
    );
  }

  public getHeroMatches<T>(hero_id: number): Promise<AxiosResponse<T>> {
    return this.axiosClient.get<T>(
      `https://api.opendota.com/api/heroes/${hero_id}/matches`
    );
  }

  public getHeroMatchDuration<T>(hero_id: number): Promise<AxiosResponse<T>> {
    return this.axiosClient.get<T>(
      `https://api.opendota.com/api/heroes/${hero_id}/duration`
    );
  }

  public getHeroPlayers<T>(hero_id: number): Promise<AxiosResponse<T>> {
    return this.axiosClient.get<T>(
      `https://api.opendota.com/api/heroes/${hero_id}/players`
    );
  }

  public getHeroItemsPopularity<T>(hero_id: number): Promise<AxiosResponse<T>> {
    return this.axiosClient.get<T>(
      `https://api.opendota.com/api/heroes/${hero_id}/items`
    );
  }

  public getMatch<T>(match_id: number): Promise<AxiosResponse<T>> {
    return this.axiosClient.get<T>(
      `https://api.opendota.com/api/matches/${match_id}`
    );
  }

  public getConstants<T>(resourse: string): Promise<AxiosResponse<T>> {
    return this.axiosClient.get<T>(
      `https://api.opendota.com/api/constants/${resourse}`
    );
  }

  public getProMatches<T>(): Promise<AxiosResponse<T>> {
    return this.axiosClient.get<T>(`https://api.opendota.com/api/proMatches`);
  }

  public getPublicMatches<T>(query?: string): Promise<AxiosResponse<T>> {
    return this.axiosClient.get<T>(
      `https://api.opendota.com/api/publicMatches${query}`
    );
  }
}
