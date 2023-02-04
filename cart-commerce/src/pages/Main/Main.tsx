import { useEffect, useState } from "react"
import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs'
import { CardList, ContainerMain, ContentMain } from "./styles"

export interface IListProducts {
  id: number
  title: string
  thumbnail: string
  price: number
}

export function Main() {
  const [listProduct, setListProduct] = useState<IListProducts[]>([]);
  
  const fetchtList = async () => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
    const response = await fetch(url);
    const objListJson = await response.json();
    setListProduct(objListJson.results)
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
              <button>
                <BsFillCartCheckFill />
              </button>
            </CardList>
          )
        })}
      </ContentMain>
    </ContainerMain>
  )
}