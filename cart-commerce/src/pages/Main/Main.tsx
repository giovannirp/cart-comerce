import { useEffect, useState } from "react"
import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs'
import { getItem, setItem } from "../../hooks/LocalStorage"
import { IListProducts } from "../../interface/produts.model";
import { CardList, ContainerMain, ContentMain } from "./styles"

export function Main() {
  const [listProduct, setListProduct] = useState<IListProducts[]>([]);
  const [cart, setCart] = useState<IListProducts[]>(getItem('cart-yt') || []);
  
  const fetchtList = async () => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
    const response = await fetch(url);
    const objListJson = await response.json();
    setListProduct(objListJson.results)
  }

  const handleClick = (obj: IListProducts) => {
    const elementVar = cart.find((element) => element.id === obj.id);
    if(elementVar) {
      const arrFilter = cart.filter((elementVew) => elementVew.id !== obj.id)
      console.log("arrfilter", arrFilter)
      setCart(arrFilter)
      setItem('cart-yt', arrFilter)
    } else {
      setCart([...cart, obj])
      setItem('cart-yt', [...cart, obj])
    }
  }

  useEffect(() => {
    fetchtList();
  }, [])

  return(
    <ContainerMain>
      <ContentMain>
        {listProduct.map((item) => {
          return (
            <CardList key={item.id}>
              <h4>{item.title}</h4>
              <img src={item.thumbnail} alt="" />
              <strong>{item.price}</strong>
              <button onClick={() => handleClick(item)}>
                {cart.some((itemCart) => itemCart.id === item.id) ? (
                  <BsFillCartCheckFill />
                ): (
                  <BsFillCartPlusFill />
                ) }
              </button>
            </CardList>
          )
        })}
      </ContentMain>
    </ContainerMain>
  )
}