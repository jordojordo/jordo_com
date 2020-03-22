import React from "react";

import Window from "../../components/Window/Window";
import ProjectWindow from "../../components/BoxContent/ProjectWindow/ProjectWindow";

const Two = () => {
  return (
    <Window width={500} height={600} title="Projects">
      <ProjectWindow />
    </Window>
  );
};

export default Two;
