import React from "react";

import Navbar from "./containers/Navbar";
import Window from "./components/Window/Window";
import "antd/dist/antd.css";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      <Window />
    </div>
  );
};

export default App;
