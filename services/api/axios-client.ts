import { API_URL } from "@/app/constants";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { setupCache } from "axios-cache-interceptor";

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
  private readonly instance;

  constructor() {
    this.instance = axios.create({
      baseURL: `${this.baseUrl}/`,
      headers: { "Content-Type": "application/json" },
    });
    this.axiosClient = setupCache(this.instance);
  }

  public get<T>(url: string): Promise<AxiosResponse<T>> {
    return this.axiosClient.get<T>(url);
  }
}
