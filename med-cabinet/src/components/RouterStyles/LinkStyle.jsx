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
  font-weight: bold;
  color: white;

  &:hover {
    color: #00796f;
  }
`;

export default props => <LinkStyle {...props} />;
