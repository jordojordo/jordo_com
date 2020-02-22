import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Div = styled.div`
  height: 100%;
  margin: 0;
  border-radius: 25px;
  background: #84d2dd;
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
  border: 2px solid transparent;
  border-radius: 55px;
  background: #b3f6ff;
  box-shadow: -1px 1px 2px #70b3bc, 1px -1px 2px #98f2fe;
  &:active {
    box-shadow: inset 1px 1px 2px #70b3bc, inset -1px -1px 2px #98f2fe;
  }
`;

// Make a slider button that can change the color of the background slowly from light to dark

const handleClick = e => {
  let window = document.getElementById("react-draggable");
  window.classList.add("hidden");
};

const Box = props => (
  <Div>
    <TopBar>
      <Close to={`/`} />
    </TopBar>
    {props.children}
  </Div>
);

export default Box;
