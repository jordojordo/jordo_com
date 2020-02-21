import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 0;
  margin-bottom: 1rem;
  position: absolute;
`;

const Div = styled("div")`
  height: 50px;
  width: 90%;
  border-radius: 50px;
  background: transparent;
  box-shadow: -5px 5px 9px #70b3bc, 5px -5px 9px #98f2fe;
`;

const Taskbar = (props) => {
  return (
    <Container>
      <Div>
        {props.children}
      </Div>
    </Container>
  );
};

export default Taskbar;
