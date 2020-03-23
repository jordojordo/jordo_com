import React from "react";

import Window from "../../components/Window/Window";
import AboutContent from "../../components/BoxContent/AboutContent/AboutContent";

const About = () => {
  return (
    <Window width={500} height={400} title="About Jordo">
      <AboutContent />
    </Window>
  );
};

export default About;
