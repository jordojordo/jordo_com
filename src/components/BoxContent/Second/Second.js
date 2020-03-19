import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import ProjectButton from "../../ProjectButton/ProjectButton";

const Div = styled.div`
  width: 100%;
  height: 98%;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin: 1rem;
`;

const Second = () => {
  return (
    <Div>
      <Container>
        <ButtonContainer>
          <ProjectButton route={`../../routes/Cadmium`}>
            <FontAwesomeIcon
              icon={faMobile}
              color="hsl(9, 34%, 50%, .7)"
              size="4x"
            />
          </ProjectButton>
        </ButtonContainer>
        <Link route={`../../routes/Cadmium`}>CadmiumCD</Link>
      </Container>
    </Div>
  );
};

export default Second;
