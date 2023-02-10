import { useCallback, useEffect, useState } from "react";
import { getItem, setItem } from "../../hooks/LocalStorage";
import { ContainerResgistration } from "./styles";

export function Registration() {
  const initilForm = {
    nome: "",
    phone: "",
    email: "",
  };

  const [data, setData] = useState([])
  const [formState, SetFormState] = useState(initilForm);

  const handleChange = (event: any) => {
    const target = event.currentTarget;
    const { value, name } = target;

    SetFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = useCallback((event: any) => {
    event.preventDefault();

    const objectNew = {
      nome: formState.nome,
      phone: formState.phone,
      email: formState.email
    }

    setData([...data, objectNew]);

    console.log(data)
    setItem('registration', data)
  }, [data]);

  return (
    <ContainerResgistration>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              name="nome"
              value={formState.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Telefone</label>
            <input
              type="number"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Enviar</button>
          </div>
        </form>
      </div>
    </ContainerResgistration>
  );
}