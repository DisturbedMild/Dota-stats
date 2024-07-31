"use client";

import React from "react";

import { MatchContextProvider } from "@/common/context/match-context";
import MatchResult from "@/components/match/heading/matchResult";
import MatchTabList from "@/components/match/tabs/matchTabList";

const MatchPage = () => {
  return (
    <MatchContextProvider>
      <MatchResult />
      <MatchTabList/>
    </MatchContextProvider>
  );
};

export default MatchPage;
