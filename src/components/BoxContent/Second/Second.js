import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

import ProjectButton from "../../ProjectButton/ProjectButton";
import cadIcon from "../../../assets/cadmium.ico";

const Div = styled.div`
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin: 1rem;
`;

const Container = props => {
  const { route, faIcon, iconSrc, routeName } = props;
  return (
    <StyledContainer>
      <ButtonContainer>
        <ProjectButton route={`../../routes/${route}`}>
          {faIcon ? (
            <FontAwesomeIcon
              icon={faIcon}
              color="hsl(9, 34%, 50%, .7)"
              size="4x"
            />
          ) : (
            <img src={iconSrc} alt={`Icon for ${routeName}`} />
          )}
        </ProjectButton>
      </ButtonContainer>
      <Link to={`../../routes/${route}`}>{routeName}</Link>
    </StyledContainer>
  );
};

const Second = () => {
  return (
    <Div>
      <Container
        route="../../routes/Cadmium"
        iconSrc={cadIcon}
        routeName="CadmiumCD"
      />
      <Container
        route="../../routes/Eventscribe"
        faIcon={faMobile}
        routeName="EventScribe"
      />
      <Container
        route="../../routes/Scorecard"
        faIcon={faMobile}
        routeName="Abstract Scorecard"
      />
      <Container
        route="../../routes/Thread"
        faIcon={faMobile}
        routeName="Thread Coffee Roasters"
      />
    </Div>
  );
};

export default Second;
