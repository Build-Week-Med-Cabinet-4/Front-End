import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  width: 80vw;
  height: 50vh;
  margin: 50px auto;

  border-radius: 10px;

  padding: 10px 0;
  background: #00726a;

  &:hover {
    transition: all 0.2s ease-in;
  }
`;
