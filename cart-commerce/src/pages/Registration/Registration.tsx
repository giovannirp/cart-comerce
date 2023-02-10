import { useEffect, useState } from "react";
import { InputText } from "../../Components/Input-text";
import { getItem, setItem } from "../../hooks/LocalStorage";
import { TableContainer } from "../../styles/global";
import { ContainerResgistration, FormContainer, FormControl } from "./styles";

export function Registration() {
  const initilForm = {
    nome: "",
    phone: "",
    email: "",
  };

  const [data, setData] = useState([]);
  const [formState, SetFormState] = useState(initilForm);

  const handleChange = (event: any) => {
    const target = event.currentTarget;
    const { value, name } = target;

    SetFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const objectNew = {
      nome: formState.nome,
      phone: formState.phone,
      email: formState.email,
    };

    setData([...data, objectNew]);
    setItem("registration", data);

    SetFormState({ ...initilForm })
  };

  //carregar lista do storage
  useEffect(() => {
    console.log(localStorage.getItem("registration"));
    if (localStorage.getItem("registration") !== null) {
      //setData(JSON.parse(localStorage.getItem('registration'))
      setData(getItem("registration"));
    }
    console.log(data);
  }, []);

  // atualiza a lista no storage
  useEffect(() => {
    localStorage.setItem("registration", JSON.stringify(data));
  }, [data]);

  return (
    <ContainerResgistration>
        <FormContainer onSubmit={handleSubmit}>
          <FormControl>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              name="nome"
              value={formState.nome}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <label htmlFor="">Telefone</label>
            <input
              type="number"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <button>Enviar</button>
          </FormControl>
        </FormContainer>
        <TableContainer>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.nome}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </TableContainer>
    </ContainerResgistration>
  );
}
