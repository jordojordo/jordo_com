import React from "react";

import Window from "../../components/Window/Window";
import Project from "../../components/BoxContent/Project/Project";

const EndernetDesign = () => {
  return (
    <div>
      <Window width={500} height={600} title="Endernet.Design ⎯ Projects">
        <Project
          videoSrc="https://vimeo.com/399650367"
          overFlow="hidden"
          projectDescription="The approach to web development with Endernet 
          Design is to educate and encourage users to maintain a custom 
          website on their own."
        />
      </Window>
    </div>
  );
};

export default EndernetDesign;