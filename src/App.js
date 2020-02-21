import React from "react";

import Navbar from "./containers/Navbar/Navbar";
import Window from "./components/Window/Window";
import First from "./components/BoxContent/First/First"
import "antd/dist/antd.css";
import "./App.sass";
import Taskbar from "./containers/Taskbar/Taskbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Window>
        <First />
      </Window>
      <Taskbar />
    </div>
  );
};

export default App;
