"use client";

import React, {createContext, useEffect, useState} from "react";
import {IHeroes, IItems} from "@/services/api/endpoints/types";
import {API} from "@/services/api";

type APIContextType = {
  heroes: IHeroes | null;
  items: IItems | null;
}

export const APIContext = createContext<APIContextType>({
  heroes: null,
  items: null
})

type APIContextProvideProps = {
  children?: React.JSX.Element;
}

export const APIContextProvider = ({children}: APIContextProvideProps) => {
  const [heroes, setHeroes] = useState<IHeroes | null>(null);
  const [items, setItems] = useState<IItems | null>(null);

  useEffect(() => {
    API.heroes
      .getHeroes()
      .then((data) => {
        setHeroes(data);
      })
      .catch((error) => {
      });
  }, []);

  useEffect(() => {
    API.constants
      .getConstants("items")
      .then((data: IItems) => {
        setItems(data);
      })
      .catch((error) => {
      });
  }, []);

  const ctxValue = {
    heroes,
    items
  }

  return <APIContext.Provider value={ctxValue}>
    {children}
  </APIContext.Provider>
}
