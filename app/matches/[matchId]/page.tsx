"use client";

import React from "react";
import {useParams} from "next/navigation";

import {MatchContextProvider} from "@/common/context/match-context";
import MatchResult from "@/components/match/heading/matchResult";

const MatchPage = () => {
  return (
    <MatchContextProvider>
      <MatchResult/>
    </MatchContextProvider>
  )

}

export default MatchPage
