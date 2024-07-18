"use client";

import React, {createContext, useContext, useState} from "react";

import {APIContext} from "@/common/context/api-context";
import {Item, Items} from "@/common/types";

const initialContext = {
  currentActiveItem: null,
  setCurrentItem: (id) => {}
}

interface ItemsContext {
  currentActiveItem: Item | null;
  setCurrentItem: (id) => void;
}

export const ItemsContext = createContext<ItemsContext>(initialContext)

type ItemsContextProvideProps = {
  children?: React.JSX.Element;
}

export const ItemsContextProvide = ({children}: ItemsContextProvideProps) => {
  const {items}: {items: Items} = useContext(APIContext);
  const [currentActiveItem, setCurrentActiveItem] = useState<Item | null>(null);

  const ctxValue = {
    currentActiveItem,
    setCurrentItem
  }

  function setCurrentItem(id) {
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
