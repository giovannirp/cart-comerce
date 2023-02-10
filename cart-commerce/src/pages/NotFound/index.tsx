import { ContainerNotFound, IconSmileyXEyes, TextNotFound } from "./styles";

export function NotFound() {
  return(
    <ContainerNotFound>
      <TextNotFound>Erro 404 Página não Encontrada no</TextNotFound>
      <IconSmileyXEyes size={60} />
    </ContainerNotFound>
  )
}