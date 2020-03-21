import React from "react";

import Window from "../../components/Window/Window";
import Project from "../../components/BoxContent/Project/Project";

import threadLanding from "../../assets/thread-landing.png";

const Thread = () => {
  return (
    <div>
      <Window width={500} height={600} title="Thread Coffee Roasters ⎯ Projects">
        <Project
          imageSrc={threadLanding}
          projectDescription="Thread Coffee Roasters is a women & queer-owned coffee 
          roasting company based in Baltimore, Maryland. A worker-cooperative 
          that uses a fully transparent model of trade to buy coffee directly 
          from the farmers they want to be in solidarity with."
        />
      </Window>
    </div>
  );
};

export default Thread;
