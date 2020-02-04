import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyle = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default props => <LinkStyle {...props} />;
