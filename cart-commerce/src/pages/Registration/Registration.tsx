import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getItem, setItem } from "../../hooks/LocalStorage";
import { TableContainer } from "../../styles/global";
import { ContainerResgistration, FormContainer, FormControl, MessageWithout } from "./styles";

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
      id: uuidv4(),
      nome: formState.nome,
      phone: formState.phone,
      email: formState.email,
    };

    setData([...data, objectNew]);
    setItem("registration", data);
    console.log(data)

    SetFormState({ ...initilForm })
  };

  //carregar lista do storage
  useEffect(() => {
    // console.log(localStorage.getItem("registration"));
    if (localStorage.getItem("registration") !== null) {
      //setData(JSON.parse(localStorage.getItem('registration'))
      setData(getItem("registration"));
    }
  }, []);

  // atualiza a lista no storage
  useEffect(() => {
    localStorage.setItem("registration", JSON.stringify(data));
    console.log(data)
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

        {data.length === 0 && (
          <MessageWithout>Não existe, dados cadastrado!</MessageWithout>
        )}
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
