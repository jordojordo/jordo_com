import React from "react";
import styled from "styled-components";

import x_1 from "../../assets/x_1.svg";

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

const Close = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  margin-left: 1.1rem;
  border: transparent;
  border-radius: 50px;
  background: transparent;
  box-shadow: -1px 1px 2px #98d1d9, 1px -1px 2px #ceffff;
  &:active {
    box-shadow: inset -1px 1px 2px #98d1d9, inset 1px -1px 2px #ceffff;
  }
`;

const handleClick = e => {
  let window = document.getElementById("react-draggable");
  window.classList.add("hidden");
};

const Box = props => (
  <Div>
    <TopBar>
      <Close onClick={handleClick}>
        <img src={x_1} alt={"x"} />
      </Close>
    </TopBar>
    {props.children}
  </Div>
);

export default Box;
