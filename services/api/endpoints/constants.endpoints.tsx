import { AxiosClient } from "@/services/api/axios-client";

export class APIConstants {
  constructor(private readonly httpClient: AxiosClient) {
    this.httpClient = httpClient;
  }

  async getConstants(resource: string): Promise<any> {
    const request = await this.httpClient.get<any>(
      `https://api.opendota.com/api/constants/${resource}`
    );

    return request.data;
  }
}
