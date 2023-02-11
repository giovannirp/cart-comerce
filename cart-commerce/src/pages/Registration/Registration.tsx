import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getItem, setItem } from "../../hooks/LocalStorage";
import { IListProducts, IRegistration } from "../../interface/produts.model";
import { MessageWithout, TableContainer } from "../../styles/global";
import { ContainerResgistration, FormContainer, FormControl } from "./styles";

export function Registration() {
  const initilForm = {
    nome: "",
    phone: "",
    email: "",
  };

  const ALERT = {
    required: 'Esse campo é obrigatório',
    isFormat: 'Formato Inválido',
    isEmail: 'Digite um email válido',
  }

  const [data, setData] = useState<IRegistration[]>([]);
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

    if (formState.nome === '') {
      alert(ALERT.required);
      return false;
    }

    if (formState.phone === '') {
      alert(ALERT.required);
      return false;
    }

    const isEmailValidade = /^[\w._-]+@[\w_.-]+\.[\w]{2,}/i.test(
        formState.email
      )

    if (formState.email === '') {
      alert(ALERT.required);
      return false;
    }

    if (!isEmailValidade) {
      alert(ALERT.isEmail);
      return false;
    }

    //  const isEmailValidate = /^[\w._-]+@[\w_.-]+\.[\w]{2,}/i.test(
    //   formState.supportEmail
    // )

    const objectNew:IRegistration = {
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

  const addMaskPhone = (phoneNumber) => {
    return phoneNumber
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
  }

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
              placeholder="Digite o nome"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="">Telefone</label>
            <input
              type="number"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              placeholder="Digite o telefone"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Digite o email"
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
                  <td>{addMaskPhone(item.phone)}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </TableContainer>
    </ContainerResgistration>
  );
}
