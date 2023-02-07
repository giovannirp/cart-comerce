import styled from "styled-components";

export const ContainerConfere = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TableConfere = styled.table`
  width: 100%;

  td {
    border-right: 1px solid ${(props) => props.theme["gray-400"]};
    border-bottom: 1px solid ${(props) => props.theme["gray-400"]};
    padding: 10px;
  }

  td:last-child {
    border-right: none;
  }
`;