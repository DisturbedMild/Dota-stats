import { AxiosClient } from "./axios-client";
import { HeroEndpoint } from "./endpoints/hero.endpoints";
import { MatchEndpoint } from "./endpoints/match.endpoints";

const client = new AxiosClient();

export const API = {
  matches: new MatchEndpoint(client),
  heroes: new HeroEndpoint(client),
};
