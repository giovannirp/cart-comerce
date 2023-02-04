import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["green-700"]};
  padding: 2.5rem 0 7.6rem;
  height: 150px;
  background: ${(props) => props.theme.white};
  border-bottom: 3px solid ${(props) => props.theme['green-300']};
  display: flex;
  justify-content: space-between;

  a {
    margin-right: 40px;
  }
  
  img {
    margin-left: 25px;
  }
`