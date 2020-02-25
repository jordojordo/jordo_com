import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut, faCubes, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 75px;
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
          <Button route={`../../routes/One`}>
            <FontAwesomeIcon icon={faUserAstronaut} color="hsl(9, 34%, 50%, .7)" size="2x"/>
          </Button>
          <Button route={`../../routes/Two`}>
            <FontAwesomeIcon icon={faCubes} color="hsl(9, 34%, 50%, .7)" size="2x"/>
          </Button>
          <Button route={`../../routes/Three`}>
            <FontAwesomeIcon icon={faEnvelope} color="hsl(9, 34%, 50%, .7)" size="2x"/>
          </Button>
        </Div>
      </div>
    </div>
  );
};

export default Taskbar;
