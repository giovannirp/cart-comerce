import { useState } from "react"
import { getItem, setItem } from "../../hooks/LocalStorage"
import { IListProducts } from "../../interface/produts.model"
import { priceFormatter } from '../../ultis/formatter'
import { CardList, ContainerCart, ContentCart } from "./styles"

export function Cart() {
  const [listProducts, setListProducts] = useState<IListProducts>(getItem('cart-yt') ||[])

  const removeCart = (item: IListProducts) => {
    const filterArray = listProducts.filter((e: IListProducts) => e.id !== item.id)
    console.log(filterArray)
    setListProducts(filterArray);
    setItem('cart-yt', filterArray)
  }

  return(
    <ContainerCart>
      <ContentCart>
      {listProducts.map((item: IListProducts) => {
        return (
          <CardList key={item.id}>
            <h4>{item.title}</h4>
            <img src={item.thumbnail} alt="" />
            <strong>{priceFormatter.format(item.price)}</strong>
            <button onClick={() => removeCart(item)}>Remover</button>
          </CardList>
        )
      })}
      </ContentCart>
    </ContainerCart>
  )
}