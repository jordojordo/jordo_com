import React from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";

import Box from "../Box/Box";

const Div = styled.div`
  overflow: hidden;
`;

const Window = props => {
  // Rnd can't take a percentage for default positioning
  let width = props.width;
  let height = props.height;

  const calcBoxCenter = (
    (width / 2) + (height / 2)
  );
  const calcWindowWidth = ((window.innerWidth - calcBoxCenter) / 2);
  const calcWindowHeight = ((window.innerHeight - calcBoxCenter) / 2);

  return (
    <Div id={"windowDiv"}>
      <Rnd
        id={"react-draggable"}
        default={{
          x: calcWindowWidth,
          y: calcWindowHeight,
          width: width,
          height: height
        }}
      >
        <Box>{props.children}</Box>
      </Rnd>
    </Div>
  );
};

export default Window;
