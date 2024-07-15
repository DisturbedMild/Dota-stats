"use client";

import React, {createContext} from "react";

import {useReactQueryRequest} from "@/common/hooks/useReactQueryRequest";
import {Ability, Heroes, Item} from "@/types/index";


type Abilities = {
  [key: string]: Ability
}

type Items = {
  [key: string]: Item
}

type APIContextType = {
  heroes: Heroes | null;
  items: Items | null;
  abilities: Abilities | null;
}

export const APIContext = createContext<APIContextType>({
  heroes: null,
  items: null,
  abilities: null
})

type APIContextProvideProps = {
  children?: React.JSX.Element;
}

export const APIContextProvider = ({children}: APIContextProvideProps) => {

  const {data: items}: {data: Items | null} = useReactQueryRequest("items", "https://api.opendota.com/api/constants/items");
  const {data: heroes}: {data: Heroes | null} = useReactQueryRequest("heroes", "https://api.opendota.com/api/heroes");
  const {data: abilities}: {data: Abilities | null} = useReactQueryRequest("abilities", "https://api.opendota.com/api/constants/abilities");

  const ctxValue = {
    heroes,
    items,
    abilities
  }

  return <APIContext.Provider value={ctxValue}>
    {children}
  </APIContext.Provider>
}
