import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import VideoDetailPage from "./Pages/VideoDetailPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/VideoDetail" component={VideoDetailPage}></Route>
      </Switch>
    </Router>
  );
}
export default App;
