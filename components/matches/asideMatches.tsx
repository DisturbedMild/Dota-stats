"use client";

import { useQuery } from "@tanstack/react-query";
import MatchItem from "./matchItem";
import { fetchData } from "@/utils/fetchData";
import { useEffect, useState } from "react";
import { API } from "@/services/api";
import { IHeroes } from "@/services/api/endpoints/types";

export type TMatch = {
  match_id: number;
  radiant_win: number;
  duration: number;
  radiant_team: number[];
  dire_team: number[];
};

// const getTeamHeroes = (heroes, matches) => {};

const AsideMatches = () => {
  const [heroes, setHeroes] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    API.heroes.getHeroes().then((data) => {
      console.log(data);
      setHeroes(data);
    });
  }, []);

  useEffect(() => {
    API.matches
      .getPublicMatches(
        "https://api.opendota.com/api/publicMatches?min_rank=80"
      )
      .then((data) => setMatches(data));
  }, []);

  return (
    <aside className="w-1/3">
      <h2 className="text-left text-white mb-1 text-xl">Latest Pro Publics</h2>
      <div className="flex flex-col gap-3">
        {matches.map((match: TMatch, index: number) => {
          if (index <= 8) {
            return (
              <MatchItem key={match.match_id} match={match} heroes={heroes} />
            );
          } else {
            return;
          }
        })}
      </div>
    </aside>
  );
};

export default AsideMatches;
