import React from "react";
import styled from "styled-components";
import { faUserAstronaut, faCubes, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ButtonContainer from "../../containers/ButtonContainer/ButtonContainer"

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 120px;
  width: 60%;
  border-radius: 50px;
  background: transparent;
  box-shadow: -5px 5px 9px #70b3bc, 5px -5px 9px #98f2fe;
  transition: 0.2s linear;
  border: 1px solid hsl(185, 28%, 85%, 0.5);
  transition: 0.1s ease;
  @media (max-width: 768px) {
    width: 75%;
  }
  @media (max-width: 567px) {
    width: 90%;
  }
`;

const Taskbar = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <Div>
          <ButtonContainer
            route="../../routes/About"
            faIcon={faUserAstronaut}
            routeName="About"
            buttonWrapMargin=".25rem"
            buttonwidth="75px"
            buttonheight="75px"
          />
          <ButtonContainer
            route="../../routes/Projects"
            faIcon={faCubes}
            routeName="Projects"
            buttonWrapMargin=".25rem"
            buttonwidth="75px"
            buttonheight="75px"
          />
          <ButtonContainer
            route="../../routes/Contact"
            faIcon={faEnvelope}
            routeName="Contact"
            buttonWrapMargin=".25rem"
            buttonwidth="75px"
            buttonheight="75px"
          />
        </Div>
      </div>
    </div>
  );
};

export default Taskbar;
