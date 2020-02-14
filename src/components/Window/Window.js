import React, { useState } from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";

import Box from "../Box/Box";

const Div = styled.div`
  overflow: hidden;
`;

const Window = () => {
  return (
    <Div id={"windowDiv"}>
      <Rnd
        id={"react-draggable"}
        default={{
          x: 200,
          y: 200,
          width: 320,
          height: 200
        }}
      >
        <Box />
      </Rnd>
    </Div>
  );
};

export default Window;
