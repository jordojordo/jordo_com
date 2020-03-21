import React from "react";

import Window from "../../components/Window/Window";
import Project from "../../components/BoxContent/Project/Project";

import esLanding from "../../assets/eventscribe-landing.png";

const Eventscribe = () => {
  return (
    <div>
      <Window width={500} height={600} title="eventScribe ⎯ Projects">
        <Project
          imageSrc={esLanding}
          projectDescription="eventScribe is a product offered by CadmiumCD 
          to give attendees, exhibitors, and speakers a platform to connect"
        />
      </Window>
    </div>
  );
};

export default Eventscribe;
