"use client";

import React from "react";

import { MatchContextProvider } from "@/common/context/match-context";
import MatchResult from "@/components/match/heading/MatchResult";
import MatchTabList from "@/components/match/tabs/MatchTabList";

const MatchPage = () => {
  return (
    <MatchContextProvider>
      <MatchResult />
      <MatchTabList/>
    </MatchContextProvider>
  );
};

export default MatchPage;
