import React from "react";
import styled from "styled-components";

import x_1 from "../../assets/x_1.svg";

const Div = styled.div`
  background-color: #f8f8f8;
  height: 100%;
  margin: 0;
  border: 1px solid #333;
  box-shadow: -0.6rem 0.6rem 0 rgba(29, 30, 28, 0.26);
`;

const TopBar = styled.div`
  height: 25px;
  width: 100%;
  border-bottom: 1px solid #333;
  background-color: #ddd;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const Close = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 1.5rem;
  height: 25px;
  padding: 0.3rem;
  background-color: transparent;
  cursor: pointer;
  z-index: 2;
`;

const handleClick = (e) => {
  let window = document.getElementById('react-draggable')
  window.classList.add('hidden')
}

const Box = () => (
  <Div>
    <TopBar>
      <Close onClick={handleClick}>
        <img src={x_1} alt={"x"} />
      </Close>
    </TopBar>
  </Div>
);

export default Box;
