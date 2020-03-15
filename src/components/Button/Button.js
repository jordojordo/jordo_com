import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  cursor: pointer;
  border-radius: 55px;
  background: transparent;
  box-shadow: -7px 7px 14px #70b3bc, 7px -7px 14px #98f2fe;
  border: 2px solid hsl(185, 28%, 85%, 0.5);
  transition: 0.1s ease;
  &:focus {
    border: 2px solid hsl(187, 5%, 35%, 0.75);
  }
  &:active {
    box-shadow: inset 7px 7px 14px #70b3bc, inset -7px -7px 14px #98f2fe;
  }
`;

const Button = props => {
  return <Div to={props.route}>{props.children}</Div>;
};

export default Button;
