import React from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";

import Box from "../Box/Box";

const Div = styled.div`
  overflow: hidden;
`;

// Rnd can't take a percentage for default positioning
const calcWidth = ((35 / 100) * window.innerWidth);
const calcHeight = ((35 / 100) * window.innerHeight);

const Window = props => {
  return (
    <Div id={"windowDiv"}>
      <Rnd
        id={"react-draggable"}
        default={{
          x: calcWidth,
          y: calcHeight,
          width: 320,
          height: 200
        }}
      >
        <Box>{props.children}</Box>
      </Rnd>
    </Div>
  );
};

export default Window;
