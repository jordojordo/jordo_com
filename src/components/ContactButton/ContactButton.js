import React from "react";
import styled from "styled-components";

const Div = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.buttonwidth ? props.buttonwidth : "100px")};
  height: ${props => (props.buttonheight ? props.buttonheight : "100px")};
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
  return (
    <Div
      href={props.href}
      target="_blank"
      buttonwidth={props.buttonwidth}
      buttonheight={props.buttonheight}
    >
      {props.children}
    </Div>
  );
};

export default Button;
