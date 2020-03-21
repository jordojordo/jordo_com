import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Typography } from "antd";
import Img from "react-image";
import { Spin } from "antd";

const { Text } = Typography;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: inset 7px 7px 14px #70b3bc, -7px -7px 14px #98f2fe;
  border-radius: 25px;
  margin-bottom: 3rem;
  padding: 1rem;
`;

const StyledElement = styled(Element)`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Image = styled(Img)`
  width: 100%;
  position: relative;
  bottom: 2rem;
  margin-top: 2rem;
  border-radius: 25px;
`;

const Spinner = () => {
  return (
    <Div>
      <Spin size="large" tip="Loading..." />
    </Div>
  );
};

const Project = props => {
  return (
    <StyledElement
      name="proCad"
      className="element"
      id="containerElement"
      style={{
        position: "relative",
        overflow: "scroll"
      }}
    >
      <Image
        src={props.imageSrc ? props.imageSrc : null}
        loader={<Spinner />}
        alt={`Image of ${props.children} landing page`}
      />

      <Heading>
        <Text>{props.projectDescription}</Text>
      </Heading>
    </StyledElement>
  );
};

export default Project;
