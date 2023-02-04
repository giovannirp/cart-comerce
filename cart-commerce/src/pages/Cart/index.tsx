import { useState } from "react"
import { getItem } from "../../hooks/LocalStorage"
import { IListProducts } from "../../interface/produts.model"
import { CardList, ContainerCart, ContentCart } from "./styles"

export function Cart() {
  const [listProducts, setListProducts] = useState<IListProducts>(getItem('cart-yt') ||[])
  return(
    <ContainerCart>
      <ContentCart>
      {listProducts.map((item) => {
        return (
          <CardList key={item.id}>
            <h4>{item.title}</h4>
            <img src={item.thumbnail} alt="" />
            <strong>{item.price}</strong>
            <button>Remover</button>
          </CardList>
        )
      })}
      </ContentCart>
    </ContainerCart>
  )
}