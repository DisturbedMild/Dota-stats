import React, {createContext, useContext} from "react";
import {useParams} from "next/navigation";

import {useReactQueryRequest} from "@/common/hooks/useReactQueryRequest";
import {FullMatchInfo} from "@/common/types";
import {useMatchRequest} from "@/common/api";

export const MatchContext = createContext<FullMatchInfo | undefined>(undefined);

export const MatchContextProvider = ({children}: React.PropsWithChildren) => {
  const { matchId } = useParams()
  const { isLoading, data, error } = useMatchRequest(matchId.toString());

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  return (
    <MatchContext.Provider value={data}>
      {children}
    </MatchContext.Provider>
  )
};

export const useMatch = () => {
  const data = useContext(MatchContext);

  if (!data) {
    throw new Error(`Can't use useContext`);
  }

  return data;
}
