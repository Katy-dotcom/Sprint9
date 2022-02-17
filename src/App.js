import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import FavoriteVideosPage from "./Pages/FavoriteVideosPage";
import Home from "./Pages/Home";
import VideoDetailPage from "./Pages/VideoDetailPage";
import History from "./Pages/History";
import { Box } from "@mui/system";
import MainBar from "./Components/MainBar";
import SideBar from "./Components/SideBar";
import { Toolbar } from "@mui/material";

import "./App.css";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Router>
        <MainBar />
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/VideoDetail" component={VideoDetailPage}></Route>
            <Route
              path="/FavoriteVideos"
              component={FavoriteVideosPage}
            ></Route>
            <Route path="/History" component={History}></Route>
          </Switch>
        </Box>
      </Router>
    </Box>
  );
}
export default App;
