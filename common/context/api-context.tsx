"use client";

import React, {createContext, useEffect, useState} from "react";
import {IAbility, IHeroes, IItems} from "@/services/api/endpoints/types";
import {API} from "@/services/api";


type Abilities = {
  [key: string]: IAbility
}

type APIContextType = {
  heroes: IHeroes | null;
  items: IItems | null;
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
  const [heroes, setHeroes] = useState<IHeroes | null>(null);
  const [items, setItems] = useState<IItems | null>(null);
  const [abilities, setAbilities] = useState<Abilities | null>(null);

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

  useEffect(() => {
    API.constants
      .getConstants("abilities")
      .then((data: Abilities) => {
        setAbilities(data);
      })
      .catch((error) => {
      });
  }, []);

  const ctxValue = {
    heroes,
    items,
    abilities
  }

  return <APIContext.Provider value={ctxValue}>
    {children}
  </APIContext.Provider>
}
