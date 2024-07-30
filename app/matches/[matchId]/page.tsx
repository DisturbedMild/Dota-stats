"use client";

import React from "react";
import {useParams} from "next/navigation";

import {MatchContextProvider} from "@/common/context/match-context";
import {useReactQueryRequest} from "@/common/hooks/useReactQueryRequest";
import {FullMatchInfo} from "@/common/types";
import MatchResult from "@/components/match/heading/matchResult";

const MatchPage = () => {
  const { matchId } = useParams()
  const { data } = useReactQueryRequest("match", `https://api.opendota.com/api/matches/${matchId}`)

  if (data) {
    const matchData: FullMatchInfo = data;
    return (
      <MatchContextProvider>
        <MatchResult/>
      </MatchContextProvider>
    )
  }

}

export default MatchPage
