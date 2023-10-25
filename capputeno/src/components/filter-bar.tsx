"use client"

import styled from "styled-components";
import { FilterByPriority } from "./filter-by-priority";
import { FilterByType } from "./filter-by-type";

interface FilterBarProps {

}

const FilterContainer = styled.div`
  display: flex;
  width: 100%; // ocupar todo espaço na largura
  align-items: start; // iniciar os itens na esquerda */
  justify-content: space-between;
`

export function FilterBar(props: FilterBarProps) {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority/>
    </FilterContainer>
  )
} 