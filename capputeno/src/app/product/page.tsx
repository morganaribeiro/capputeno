"use client"

import { BackButton } from "@/components/back-button"
import { DefaultPageLayout } from "@/components/default-page-layout"
import { ShoppingBagIcon } from "@/components/icons/shopping-bag-icon"
import { useProduct } from "@/hooks/useProduct"
import { formatPrice } from "@/utils/format-price"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  section {
    display: flex;
    justify-content: center;
    gap: 32px; // 32px entre a img e a div
    width: 100%;
    margin-top: 24px;

    img {
      max-width: 640px;
      width: 50%;
    }

    > div { // primeira div filha
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      button {
        color: white;
        border: none;
        cursor: pointer;
        padding: 10px 0px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        border-radius: 4px;
        background: var(--brand-blue, #115D8C);
        mix-blend-mode: multiply;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
    }
  }
`

const ProductInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: var(--text-dark-2);
    }
    h2 {
      font-size: 32px;
      font-weight: 300;
      line-height: 150%; 
      color: var(--text-dark-2);
      margin-top: 12px;
    }
    span:nth-of-type(2) { // selecionou o segundo span
      font-size: 20px;
      font-weight: 600;
      line-height: 150%; 
      color: var(--shapes-dark);
      margin-bottom: 24px;
    }
    p {
      font-weight: 400;
      font-size: 12px;
      color: var(--text-dark-2);
    }
    div {
      margin-top: 24px;

      h3 {
        text-transform: uppercase;
        color: var(--text-dark);
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        color: var(--text-dark-2);
      }
    }
`


export default function Product({ searchParams }: { searchParams: { id: string } }) {
  const { data } = useProduct(searchParams.id); // retornando os dados do produto a partir do 'id'

  console.log(data);

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate="/"/>
        <section>
          <img src={data?.image_url} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button>
              <ShoppingBagIcon/>
              adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}