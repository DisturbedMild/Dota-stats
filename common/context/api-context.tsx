"use client";

import React, {createContext, useEffect, useState} from "react";
import {IHeroes} from "@/services/api/endpoints/types";
import {API} from "@/services/api";

type APIContextType = {
  heroes: IHeroes | null;
}

export const APIContext = createContext<APIContextType>({
  heroes: null
})

type APIContextProvideProps = {
  children?: React.JSX.Element;
}

export const APIContextProvider = ({children}: APIContextProvideProps) => {
  const [heroes, setHeroes] = useState<IHeroes | null>(null);

  useEffect(() => {
    API.heroes
      .getHeroes()
      .then((data) => {
        setHeroes(data);
      })
      .catch((error) => {
      });
  }, []);

  const ctxValue = {
    heroes
  }

  return <APIContext.Provider value={ctxValue}>
    {children}
  </APIContext.Provider>
}
