import React from "react";

import Window from "../../components/Window/Window";
import Project from "../../components/BoxContent/Project/Project";

import scorecardLanding from "../../assets/scorecard-landing.png";

const Scorecard = () => {
  return (
    <div>
      <Window width={500} height={600} title="Abstract Scorecard ⎯ Projects">
        <Project
          imageSrc={scorecardLanding}
          projectDescription="Abstract Scorecard is a complete abstract collection 
          system that is convenient for authors, planners, and managers."
        />
      </Window>
    </div>
  );
};

export default Scorecard;
