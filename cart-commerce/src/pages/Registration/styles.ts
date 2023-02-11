import styled from "styled-components";

export const ContainerResgistration = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const FormContainer = styled.form`
  margin-bottom: 25px;
`;

export const FormControl = styled.div`
  margin-bottom: 15px;

  label {
    margin-right: 20px;
    color: ${(props) => props.theme["gray-900"]};
    max-width: 65px;
    display: inline-block;
    width: 100%;
  }

  input {
    border: 1px solid ${(props) => props.theme["gray-100"]};
    height: 30px;
    max-width: 300px;
    width: 100%;
    padding-left: 10px;
  }

  button {
    background-color: ${(props) => props.theme["green-300"]};
    border: 2px solid ${(props) => props.theme["gray-300"]};
    color: ${(props) => props.theme.white};
    max-width: 100px;
    height: 30px;
    width: 100%;
    cursor: pointer;
  }
`;
