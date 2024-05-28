import { AxiosClient } from "@/services/api/axios-client";

export class APIConstants {
  constructor(private readonly httpClient: AxiosClient) {
    this.httpClient = httpClient;
  }

  async getConstants(resourse: string) {
    const request = await this.httpClient.get(
      `https://api.opendota.com/api/constants/${resourse}`
    );

    return request.data;
  }
}
