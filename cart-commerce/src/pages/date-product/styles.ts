import styled from "styled-components";

export const ContainerProduct = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const ButtonFilter = styled.button`
  width: 150px;
  height: 30px;
  margin-bottom: 20px;
  background: ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme.white};
  border: 2px solid #e9e9e9;
  cursor: pointer;
`;

export const InitButton = styled.button`
  width: 150px;
  height: 30px;
  margin-bottom: 20px;
  background: ${(props) => props.theme["red-300"]};
  color: ${(props) => props.theme.white};
  border: 2px solid #e9e9e9;
  cursor: pointer;
  margin-right: 10px;
`
