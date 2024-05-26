import { API_URL } from "@/app/constants";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

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
}
