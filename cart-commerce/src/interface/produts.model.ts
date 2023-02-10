export interface IListProducts {
  id: number
  title: string
  thumbnail: string
  price: number
  obj: string
}

export interface IStateCyty {
  id: number
  seller_address: string
  stop_time: string
  state: string
  cyty: string
}

export interface IRegistration {
  id: string,
  nome: string,
  phone: string,
  email: string
}