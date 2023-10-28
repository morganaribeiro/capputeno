"use client"

import { useFilter } from '@/hooks/useFilter';
import { Saira_Stencil_One } from 'next/font/google';
import styled from "styled-components";
import { CartControl } from './cart-control';
import { PrimaryInputSearchIcon } from './primary-input';

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

interface HeaderProps {

};

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 40px;
  font-weight: 400;
  line-height: 150%;
`;

export function Header(props: HeaderProps) {
  const { search, setSearch } = useFilter();
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeno</Logo>
      <div>
        <PrimaryInputSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  )
};