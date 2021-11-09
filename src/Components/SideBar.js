import React from "react";
import { Drawer } from "@mui/material";
import {
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const SideBar = () => {
  let drawerWidth = 180;
  const useStyles = makeStyles({
    paper: {
      background: "black",
      color: "white",
    },
  });
  const styles = useStyles();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
      }}
      variant="permanent"
      anchor="left"
      classes={{ paper: styles.paper }}
      xs={(drawerWidth = 120)}
    >
      <Toolbar />

      <List>
        <NavLink exact to="/">
          <ListItem button>
            <ListItemIcon style={{ color: "white" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText> Home </ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to="/FavoriteVideos">
          <ListItem button>
            <ListItemIcon style={{ color: "white" }}>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText> Favourite videos </ListItemText>
          </ListItem>
        </NavLink>

        <NavLink to="/History">
          <ListItem button>
            <ListItemIcon style={{ color: "white" }}>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText> History </ListItemText>
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
};

export default SideBar;
