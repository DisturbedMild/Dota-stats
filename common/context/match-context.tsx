import React, {createContext, FC} from "react";

import {FullMatchInfo} from "@/common/types";

export const MatchContext = createContext<FullMatchInfo | null>(null);
