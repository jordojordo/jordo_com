import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "antd/dist/antd.css";

import "./App.sass";

import Navbar from "./containers/Navbar/Navbar";
import Taskbar from "./containers/Taskbar/Taskbar";

import One from "./routes/One/One";
import Two from "./routes/Two/Two";
import Three from "./routes/Three/Three";
import Cadmium from "./routes/Cadmium/Cadmium";

const App = () => {
  return (
    <Router>
      <Route path="/">
        <Navbar />
        <Route path="/routes/One" component={One} />
        <Route path="/routes/Two" component={Two} />
        <Route path="/routes/Three" component={Three} />
        <Route path="/routes/Cadmium" component={Cadmium} />
        <Taskbar />
      </Route>
    </Router>
  );
};

export default App;
