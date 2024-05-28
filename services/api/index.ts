import { AxiosClient } from "./axios-client";
import { HeroEndpoint } from "./endpoints/hero.endpoints";
import { MatchEndpoint } from "./endpoints/match.endpoints";
import { APIConstants } from "./endpoints/constants.endpoints";

const client = new AxiosClient();

export const API = {
  matches: new MatchEndpoint(client),
  heroes: new HeroEndpoint(client),
  constants: new APIConstants(client),
};
