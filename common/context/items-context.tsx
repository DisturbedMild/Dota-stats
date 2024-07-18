"use client";

import React, {createContext, useContext, useState} from "react";

import {APIContext} from "@/common/context/api-context";
import {Item, Items} from "@/common/types";

const initialContext = {
  currentActiveItem: null,
  setCurrentItem: (id: number) => {}
}

interface ItemsContext {
  currentActiveItem: Item | null;
  setCurrentItem: (id: number) => void;
}

export const ItemsContext = createContext<ItemsContext>(initialContext)

type ItemsContextProvideProps = {
  children?: React.JSX.Element;
}

export const ItemsContextProvide = ({children}: ItemsContextProvideProps) => {
  const {items} = useContext(APIContext);
  const [currentActiveItem, setCurrentActiveItem] = useState<Item | null>(null);

  const ctxValue = {
    currentActiveItem,
    setCurrentItem
  }

  function setCurrentItem(id: number) {
    if (items === null) return null
    for (const item in items) {
      if (items[item].id === id) {
        setCurrentActiveItem(items[item])
      }
    }
  }

  return <ItemsContext.Provider value={ctxValue}>
    {children}
  </ItemsContext.Provider>
}
