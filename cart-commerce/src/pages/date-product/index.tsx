import { useEffect, useState } from "react";
import { IListProducts, IStateCyty } from "../../interface/produts.model";
import { TableContainer } from "../../styles/global";
import { dataFormater } from "../../ultis/formatter";
import { ButtonFilter, ContainerProduct, InitButton } from "./styles";

export function DateProduct() {
  const initialForm = {
    filter: "",
  };

  const handleChange = (event: any) => {
    const target = event.currentTarget;
    const { value, name } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [formState, setFormState] = useState(initialForm);
  const [dateProduct, setDateProduct] = useState<IStateCyty[]>([]);

  const filterStateSP = () => {
    const resultFilter = dateProduct.filter(
      (item) => item.seller_address.state.name === "São Paulo"
    );
    setDateProduct(resultFilter);
    console.log("url")
  };

  const handleStateFilterSP = () => {
    filterStateSP();
  };

  const handleInit = () => {
    window.location.reload();
  };

  const fetchListDate = async () => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
    const res = await fetch(url);
    const objListJson = await res.json();
    setDateProduct(objListJson.results)
    console.log(url)
  } 

  useEffect(() => {
    fetchListDate()
  }, [])

  return (
    <ContainerProduct>
      <InitButton onClick={() => handleInit()}>Carregar Todos</InitButton>
      <ButtonFilter onClick={() => handleStateFilterSP()}>
        Filtrar somente SP
      </ButtonFilter>

      <TableContainer>
        <thead>
          <tr>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Pais</th>
            <th>Time e data</th>
          </tr>
        </thead>
        <tbody>
          {dateProduct.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.seller_address.state.name}</td>
                <td>{item.seller_address.city.name}</td>
                <td>{item.seller_address.state.id}</td>
                <td>{dataFormater.format(new Date(item.stop_time))}</td>
              </tr>
            );
          })}
        </tbody>
      </TableContainer>
    </ContainerProduct>
  );
}
