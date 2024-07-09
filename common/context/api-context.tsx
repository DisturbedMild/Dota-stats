"use client";

import React, {createContext, useEffect, useState} from "react";

import {API} from "@/services/api";
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
  const [heroes, setHeroes] = useState<Heroes | null>(null);
  const [items, setItems] = useState<Items | null>(null);
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
      .then((data: Items) => {
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
