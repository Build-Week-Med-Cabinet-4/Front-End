import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
  text-decoration: none;
  padding: 5px;
  transition: all 0.2s ease-in;
  background-size: 0px;

  &:hover {
    color: #a7a5a5;
    background: white;
    background-size: 100%;
    border-radius: 5px;
  }
`;

export default props => <LinkStyle {...props} />;
