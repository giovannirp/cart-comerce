import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};
  }

  body {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['gray-900']};
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
`

export const TableContainer = styled.table`
  width: 100%;
  margin-bottom: 30px;

  thead {
    th {
      background-color: ${(props) => props.theme['gray-500']};
      color: ${(props) => props.theme.white};
      text-align: left;
      padding: 10px;
    }
  }

  tr:nth-child(even) {
		background: ${(props) => props.theme['gray-100']};
  }

  td {
    border-right: 1px solid ${(props) => props.theme["gray-400"]};
    border-bottom: 1px solid ${(props) => props.theme["gray-400"]};
    padding: 10px;
  }



  td:last-child {
    border-right: none;
  }
`;