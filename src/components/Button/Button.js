import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Div = styled(Link)`
  height: 45px;
  width: 45px;
  cursor: pointer;
  border-radius: 55px;
  background: transparent;
  box-shadow: -7px 7px 14px #70b3bc, 7px -7px 14px #98f2fe;
  &:active {
    box-shadow: inset 7px 7px 14px #70b3bc, inset -7px -7px 14px #98f2fe;
  }
`;

const Button = props => {
  return (
    <Div to={props.route} />
  )
};

export default Button;
