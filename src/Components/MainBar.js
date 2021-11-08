import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import react from "../Assets/react.svg";

import { Link } from "react-router-dom";

const MainBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "black",
      }}
    >
      <Toolbar>
        <Link to="/">
          <Typography>
            <img src={react} alt="logo" />
          </Typography>
        </Link>
        <Typography variant="h4">ReactTube</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainBar;
