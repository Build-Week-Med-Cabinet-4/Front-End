import styled from "styled-components";

export const LgSgButtonStyle = styled.button`
  background: white;
  margin: 15px auto;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: #191919;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.12),
    0 2px 2px 1px rgba(0, 0, 0, 0.24);

  &:hover {
    transition: all 0.2 ease-in;
    transform: translateY(-1px);
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.12),
      0 2px 3px 2px rgba(0, 0, 0, 0.24);
    background: #b6e1de;
    color: white;
  }
`;
