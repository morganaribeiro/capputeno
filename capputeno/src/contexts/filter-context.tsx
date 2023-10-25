"use client";

import { FilterType } from "@/types/filter-types";
import { PriorityType } from "@/types/priority-types";
import { ReactNode, createContext, useState } from "react";

// CRIANDO CONTEXT PARA COMPARTILHAR OS ESTADOS DO FILTRO
export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterType.ALL,
  priority: PriorityType.NEWS,
  setPriority: (value: PriorityType) => {},
  setSearch: (value: string) => { },
  setPage: (value: number) => { },
  setType: (value: FilterType) => { }
});

interface ProviderProps {
  children: ReactNode;
}

// CRIAR UM PROVIDER PARA O CONTEXTO
export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(PriorityType.NEWS);

  return (
    <FilterContext.Provider value={{ search, page, type, setPage, setSearch, setType, priority, setPriority }}>
      {children}
    </FilterContext.Provider>
  )
}
