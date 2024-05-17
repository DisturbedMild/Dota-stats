"use client";

import { useQuery } from "@tanstack/react-query";
import MatchItem from "./matchItem";
import { fetchData } from "@/utils/fetchData";

export type TMatch = {
  match_id: number;
  radiant_win: number;
  duration: number;
  radiant_team: number[];
  dire_team: number[];
};

// const getTeamHeroes = (heroes, matches) => {};

const AsideMatches = () => {
  const {
    isPending: isPendingMatches,
    error: errorMatches,
    data: dataMatches,
  } = useQuery({
    queryKey: ["matches"],
    queryFn: () =>
      fetchData("https://api.opendota.com/api/publicMatches?min_rank=80"),
  });

  const {
    isPending: isPendingHeroes,
    error: errorHeroes,
    data: dataHeroes,
  } = useQuery({
    queryKey: ["heroes"],
    queryFn: () => fetchData("https://api.opendota.com/api/heroes"),
  });

  // const { isPending, error, data } = useQuery({
  //   queryKey: ["matches"],
  //   queryFn: () => fetchData("https://api.opendota.com/api/heroes"),
  // });

  if (errorMatches) {
    return <div>Error occured</div>;
  }

  if (isPendingMatches) {
    return <div>Loading....</div>;
  }

  return (
    <aside className="w-1/3">
      <h2 className="text-left text-white mb-1 text-xl">Latest Pro Publics</h2>
      <div className="flex flex-col gap-3">
        {dataMatches.map((match: TMatch, index: number) => {
          if (index <= 8) {
            return (
              <MatchItem
                key={match.match_id}
                match={match}
                heroes={dataHeroes}
              />
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
