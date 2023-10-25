import { useFilter } from "@/hooks/useFilter";
import { PriorityType } from "@/types/priority-types";
import { useState } from "react";
import styled from "styled-components";
import { ArrowIcon } from "./arrow-icon";

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 8px;
    }
  }
`
const PriorityFilter = styled.ul`
  position: absolute;
  width: 250px;
  padding: 12px 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background: #FFFFFF;
  list-style: none;
  top: 100%;

  li {
    color: var(--text-dark);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;
  }
  li + li { // Quando tiver um li acima,ou seja, exceto o primeiro não tem um li acima
    margin-top: 4px;
  }
`

export function FilterByPriority(props: FilterByPriorityProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleUpdatePriority = (value: PriorityType) => {
    setPriority(value);
    setIsOpen(false); // QUANDO CLICAR(ATUALIZAR) NA PRIORIDADE, JÁ FECHA A MODAL EM SEGUINTE
  };
  
  const handleOpen = () => setIsOpen(prev => !prev);

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen &&
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityType.NEWS)}>Novidades</li>
          <li onClick={() => handleUpdatePriority(PriorityType.BIGGEST_PRICE)}>Preço: Maior - menor</li>
          <li onClick={() => handleUpdatePriority(PriorityType.MINOR_PRICE)}>Preço: Menor - maior</li>
          <li onClick={() => handleUpdatePriority(PriorityType.POPULARITY)}>Mais vendidos</li>
        </PriorityFilter>}
    </FilterContainer>
  )
}