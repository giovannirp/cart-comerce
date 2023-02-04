import styled from "styled-components";

export const ContainerCart = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const ContentCart = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardList = styled.article`
  border: 1px solid ${(props) => props.theme["gray-300"]};
  border-radius: 8px;
  max-width: 300px;
  width: 100%;
  margin-right: 20px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    padding: 20px;
    color: ${(props) => props.theme["gray-500"]}
  }

  img {
    max-width: 150px;
    width: 100%;
  }

  strong {
    font-size: 14px;
    color: ${(props) => props.theme["gray-700"]};
    padding-bottom: 15px;
  }

  button {
    font-size: 20px;
    margin-bottom: 20px;
    color: ${(props) => props.theme["red-300"]};
    border: 1px solid ${(props) => props.theme["gray-300"]};
    padding: 5px;
    cursor: pointer;
  }
`