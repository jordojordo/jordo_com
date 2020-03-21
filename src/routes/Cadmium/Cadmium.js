import React from "react";
import Window from "../../components/Window/Window";
import Project from "../../components/BoxContent/Project/Project";

import cadLanding from "../../assets/cadmium-landing.png";

const Cadmium = () => {
  return (
    <div>
      <Window width={500} height={600} title="Cadmium ⎯ Projects">
        <Project
          imageSrc={cadLanding}
          projectDescription="CadmiumCD is an event management software company who offers a variety
          of products to help event/meeting planners in all aspects of their
          conferences."
        />
      </Window>
    </div>
  );
};

export default Cadmium;
