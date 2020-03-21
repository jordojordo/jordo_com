import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button/Button";

const Third = () => {
  return (
    <div>
      <Button route={`../../routes/One`}>
        <FontAwesomeIcon icon={faUserAstronaut} color="hsl(9, 34%, 50%, .7)" size="2x"/>
      </Button>
    </div>
  )
};

export default Third;
