import { useState, useEffect } from "react"
import { getItem } from "../../hooks/LocalStorage";
import { IListProducts } from "../../interface/produts.model";
import { priceFormatter } from "../../ultis/formatter";
import { ContainerConfere, TableConfere } from "./styles";



export function Confere() {
  const [listConfere, setListConfere] = useState<IListProducts>(getItem('cart-yt') || [])

  const filterList = () => {
    const listFilter = listConfere.filter(item => item.price >= 1000);
    setListConfere(listFilter)
  }

  useEffect(() => {
    filterList()
  }, [])

  return(
    <ContainerConfere>
        <h2>Produtos com o valor maior que 1000 mil</h2>
        <TableConfere>
          <tbody>
            {listConfere.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{priceFormatter.format(item.price)}</td>
                </tr>
              )
            })}

          </tbody>
        </TableConfere> 
    </ContainerConfere>
  )
}