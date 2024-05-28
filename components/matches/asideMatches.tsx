"use client";

import MatchItem from "./matchItem";
import { useEffect, useState } from "react";
import { API } from "@/services/api";
import { IHeroes, IPublicMatches } from "@/services/api/endpoints/types";

export type TMatch = {
  match_id: number;
  radiant_win: number;
  duration: number;
  radiant_team: number[];
  dire_team: number[];
};

// const getTeamHeroes = (heroes, matches) => {};

const AsideMatches = () => {
  const [matches, setMatches] = useState<any | null>(null);
  const [matchesLoading, setMatchesLoading] = useState(true);

  useEffect(() => {
    API.matches
      .getPublicMatches("?min_rank=80")
      .then((data) => setMatches(data))
      .catch((error) => {})
      .finally(() => {
        setMatchesLoading(false);
      });
  }, []);

  return (
    <aside className="w-1/3">
      <h2 className="text-left text-white mb-1 text-xl">Latest Pro Publics</h2>
      <div className="flex flex-col gap-3">
        {matchesLoading && <div>Loading...</div>}
        {!matchesLoading &&
          matches?.map((match: TMatch, index: number) => {
            if (index <= 8) {
              return <MatchItem key={match.match_id} match={match} />;
            } else {
              return;
            }
          })}
      </div>
    </aside>
  );
};

export default AsideMatches;
