import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Div = styled.div`
  height: 100%;
  margin: 0;
  background: #84d2dd;
  border: 1px solid hsl(185, 28%, 85%, .5);
  border-radius: 25px;
  box-shadow: -20px 20px 60px #70b3bc, 20px -20px 60px #98f2fe;
`;

const TopBar = styled.div`
  height: 25px;
  width: 100%;
  background-color: #b3f6ff;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  border-radius: 25px 25px 0 0;
  align-items: center;
`;

const Close = styled(Link)`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 2rem;
  height: 1rem;
  padding: .1rem;
  background-color: transparent;
  cursor: pointer;
  margin-left: 1.2rem;
  border: 2px solid hsl(185, 28%, 85%, .5);
  border-radius: 55px;
  box-shadow: -1px 1px 2px #70b3bc, 1px -1px 2px #98f2fe;
  transition: .1s ease;
  &:focus {
    border: 2px solid hsl(187, 5%, 35%, .75);
  }
  &:active {
    box-shadow: inset 1px 1px 2px #70b3bc, inset -1px -1px 2px #98f2fe;
  }
`;

const Box = props => (
  <Div>
    <TopBar>
      <Close to={`/`} />
    </TopBar>
    {props.children}
  </Div>
);

export default Box;
