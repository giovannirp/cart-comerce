import { useEffect, useState } from "react"
import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs'
import { CardList, ContainerMain, ContentMain } from "./styles"

export interface IListProducts {
  id: number
  title: string
  thumbnail: string
  price: number
  obj: string
}

export function Main() {
  const [listProduct, setListProduct] = useState<IListProducts[]>([]);
  const [cart, setCart] = useState<IListProducts[]>([]);
  
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
    } else {
      setCart([...cart, obj])
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