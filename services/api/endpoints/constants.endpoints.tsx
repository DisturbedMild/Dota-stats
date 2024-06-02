import { AxiosClient } from "@/services/api/axios-client";

export class APIConstants {
  constructor(private readonly httpClient: AxiosClient) {
    this.httpClient = httpClient;
  }

  async getConstants(resourse: string): Promise<any> {
    const request = await this.httpClient.get<any>(
      `https://api.opendota.com/api/constants/${resourse}`
    );

    return request.data;
  }
}
