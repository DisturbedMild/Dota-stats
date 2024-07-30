"use client";

import { usePublicMatches } from "@/common/api";

import MatchItem from "./MatchItem";

export interface MatchProps {
  match_id: number;
  radiant_win: number;
  duration: number;
  radiant_team: number[];
  dire_team: number[];
}

const AsideMatches = () => {
  const { isLoading, data: matches, error } = usePublicMatches();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong, try again later</p>;

  return (
    <aside className="w-1/3">
      <h2 className="text-left text-white mb-1 text-xl">
        Latest Pro public matches
      </h2>
      <div className="flex flex-col gap-3">
        {matches.map((match: MatchProps, index: number) => {
          if (index <= 8) {
            return <MatchItem key={match.match_id} match={match} />;
          }
        })}
      </div>
    </aside>
  );
};

export default AsideMatches;
