import React, { useState } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Typography } from "antd";
import Img from "react-image";
import { Spin } from "antd";
import ReactPlayer from "react-player";

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
  margin: 1rem 0;
`;

const Image = styled(Img)`
  width: 100%;
  position: relative;
  bottom: 2rem;
  margin-top: 2rem;
  border-radius: 25px;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
`;

const Spinner = () => {
  return (
    <Div>
      <Spin size="large" tip="Loading..." />
    </Div>
  );
};

const Project = props => {
  const [showSpinner, setShowSpinner] = useState(true);

  let overFlow = props.overFlow ? props.overFlow : "scroll";

  const loadSpinner = () => {
    return (
      showSpinner ? (
        <Spinner />
      ) : null
    )
  };

  return (
    <StyledElement
      name="proCad"
      className="element"
      id="containerElement"
      style={{
        position: "relative",
        overflow: overFlow
      }}
    >
      {props.imageSrc ? (
        <Image
          src={props.imageSrc ? props.imageSrc : null}
          loader={<Spinner />}
          alt={`Image of ${props.children} landing page`}
        />
      ) : (
        <VideoContainer>
          <ReactPlayer
            onBuffer={() => loadSpinner()}
            onPlay={() => setShowSpinner(false)}
            url={props.videoSrc}
            playing
            loop
          />
        </VideoContainer>
      )}

      <Heading>
        <Text>{props.projectDescription}</Text>
      </Heading>
    </StyledElement>
  );
};

export default Project;
