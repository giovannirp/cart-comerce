import { SmileyXEyes } from 'phosphor-react'
import styled from 'styled-components'

export const ContainerNotFound = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextNotFound = styled.p`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 22px;
  color: ${(props) => props.theme['red-300']};
`;

export const IconSmileyXEyes = styled(SmileyXEyes)`
  color: ${(props) => props.theme['red-500']};
  margin-top: 20px;
`;