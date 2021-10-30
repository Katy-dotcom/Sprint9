import React, { useState, useContext, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import VideoList from "../Components/VideoList";
import VideoDetail from "../Components/VideoDetail";
import { SelectedVideoContext } from "../Hooks/SelectedVideoContext";
import axios from "axios";
import videoArrayJson from "../viddeoArrayJson.json";
import Grid from "@material-ui/core/grid";
import Container from "@material-ui/core/Container";
// import SearchIcon from "@mui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { createStyles } from "@material-ui/core/styles";

// const itemsArray = JSON.stringify(videoArray);
// const parsedArray = JSON.parse(itemsArray);

function Home() {
  const { selectedVideo, setSelectedVideo } = useContext(SelectedVideoContext);
  const [videoArray, setVideoArray] = useState(videoArrayJson);
  // const classes = useStyles();

  // falta añadir try&catch

  const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      type: "video",
      maxResults: 3,
      key: "AIzaSyDcfqwbssY0fuiBxdY94B_x23O4X2QZLjo",
    },
  });

  const handleSubmit = async (termFromSearchBar) => {
    console.log(termFromSearchBar);
    const response = await youtube.get("/search", {
      params: { q: termFromSearchBar },
    });
    setVideoArray(response.data);
    console.log(videoArray);
  };

  return (
    <Container maxWidth="xl">
      <SearchBar onSearch={handleSubmit}></SearchBar>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item lg={8}>
          <VideoDetail></VideoDetail>
        </Grid>
        <Grid item lg={4}>
          <VideoList videoArray={videoArray}></VideoList>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Home;
