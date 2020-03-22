import React from "react";
import styled from "styled-components";
import Tilt from "react-tilt";
import { Typography } from "antd";

import jordoImg from "../../../assets/jordo.png";

const { Title, Text } = Typography;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow: hidden;
`;

const StyledTilt = styled(Tilt)`
  margin: 1rem 0;
`

const Img = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  > * {
    border-radius: 12px;
  }
`;

const AboutContent = () => {
  return (
    <Div>
      <StyledTilt className="Tilt" option={{ max: 25 }}>
        <Img src={jordoImg} className="Tilt-inner" />
      </StyledTilt>
      <Title level={1}>Hello from Jordon Leach!</Title>
      <Text>
        I'm a Front End Developer with strong commitment to collaboration and
        solutions-oriented problem-solving. Use various web design software to
        develop customer-focused websites and designs.
      </Text>
    </Div>
  );
};

export default AboutContent;
