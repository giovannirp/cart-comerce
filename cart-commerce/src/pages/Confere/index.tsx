import { useState, useEffect } from "react"
import { getItem } from "../../hooks/LocalStorage";
import { IListProducts } from "../../interface/produts.model";
import { TableContainer } from "../../styles/global";
import { priceFormatter } from "../../ultis/formatter";
import { ContainerConfere } from "./styles";

export function Confere() {
  const [listConfere, setListConfere] = useState<IListProducts>(getItem('cart-yt') || [])

  //points.sort(function(a, b){return b - a});
  const filterList = () => {
    const listFilter = listConfere
      .filter(item => item.price >= 1000)
  }

  useEffect(() => {
    filterList()
  }, [])

  return(
    <ContainerConfere>
        <h2>Produtos com o valor maior que 1000 mil</h2>
        <TableContainer>
          <tbody>
            {listConfere.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{priceFormatter.format(item.price)}</td>
                  <td>{item.address.state_name}</td>
                </tr>
              )
            })}

          </tbody>
        </TableContainer> 
    </ContainerConfere>
  )
}