import React from "react";
import styled from "styled-components";
import { faMobile, faChartBar, faCode } from "@fortawesome/free-solid-svg-icons";

import ButtonContainer from "../../../containers/ButtonContainer/ButtonContainer"
import cadIcon from "../../../assets/cadmium.ico";
import threadIcon from "../../../assets/thread-logo.png";
import endernetIcon from "../../../assets/endernet-logo.png";

const Div = styled.div`
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const ProjectWindow = () => {
  return (
    <Div>
      <ButtonContainer
        route="../../routes/Cadmium"
        iconSrc={cadIcon}
        routeName="CadmiumCD"
      />
      <ButtonContainer
        route="../../routes/Eventscribe"
        faIcon={faMobile}
        routeName="EventScribe"
      />
      <ButtonContainer
        route="../../routes/Scorecard"
        faIcon={faChartBar}
        routeName="Abstract Scorecard"
      />
      <ButtonContainer
        route="../../routes/Thread"
        iconSrc={threadIcon}
        routeName="Thread Coffee Roasters"
      />
      <ButtonContainer
        route="../../routes/Endernet-Design"
        iconSrc={endernetIcon}
        borderRadius="30px"
        routeName="Endernet.Design"
      />
      <ButtonContainer
        route="../../routes/Endernet-io"
        faIcon={faCode}
        routeName="Endernet.io"
      />
    </Div>
  );
};

export default ProjectWindow;
