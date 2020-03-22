import React from "react";

import Window from "../../components/Window/Window";
import Project from "../../components/BoxContent/Project/Project";

import ioLanding from "../../assets/endernet-io.png";

const EndernetIo = () => {
  return (
    <div>
      <Window width={500} height={600} title="Endernet.io ⎯ Projects">
        <Project
          imageSrc={ioLanding}
          overFlow="hidden"
          projectDescription="A small blog built on React.js to give 
          back to the community... and to remind myself how to build 
          certain things."
        />
      </Window>
    </div>
  );
};

export default EndernetIo;
