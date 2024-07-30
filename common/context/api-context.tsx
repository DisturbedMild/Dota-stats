"use client";

import React, {createContext} from "react";

import {useAbilities, useHeroes, useItems} from "@/common/api";
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

  const {data: items} = useItems();
  const {data: heroes} = useHeroes();
  const {data: abilities} = useAbilities();

  const ctxValue = {
    heroes,
    items,
    abilities
  }

  return <APIContext.Provider value={ctxValue}>
    {children}
  </APIContext.Provider>
}
