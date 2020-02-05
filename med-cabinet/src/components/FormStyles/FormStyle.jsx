import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  width: 50vw;
  max-width: 500px;
  margin: 50px auto;

  border-radius: 10px;

  padding: 10px 0;
  background: white;

  box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.2),
    0 5px 18px 0 rgba(0, 0, 0, 0.4);
  }

  &:hover {
    transition: all 0.2s ease-in;
  }
`;
