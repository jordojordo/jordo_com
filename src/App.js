import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";

import "./App.sass";

import Navbar from "./containers/Navbar/Navbar";
import Taskbar from "./containers/Taskbar/Taskbar";

import About from "./routes/About/About";
import Projects from "./routes/Projects/Projects";
import Contact from "./routes/Contact/Contact";
import Cadmium from "./routes/Cadmium/Cadmium";
import Eventscribe from "./routes/Eventscribe/Eventscribe";
import Scorecard from "./routes/Scorecard/Scorecard";
import Thread from "./routes/Thread/Thread";
import EndernetDesign from "./routes/Endernet-Design/EndernetDesign";
import EndernetIo from "./routes/Endernet-io/EndernetIo";

const App = () => {
  return (
    <Router>
      <Route path="/">
        <Redirect to="/routes/About" component={About}/>
        <Navbar />
        <Route path="/routes/About" component={About} />
        <Route path="/routes/Projects" component={Projects} />
        <Route path="/routes/Contact" component={Contact} />
        <Route path="/routes/Cadmium" component={Cadmium} />
        <Route path="/routes/Eventscribe" component={Eventscribe} />
        <Route path="/routes/Scorecard" component={Scorecard} />
        <Route path="/routes/Thread" component={Thread} />
        <Route path="/routes/Endernet-Design" component={EndernetDesign} />
        <Route path="/routes/Endernet-io" component={EndernetIo} />
        <Taskbar />
      </Route>
    </Router>
  );
};

export default App;
