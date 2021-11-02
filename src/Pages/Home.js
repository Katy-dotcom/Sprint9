import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import VideoList from "../Components/VideoList";
import VideoDetail from "../Components/VideoDetail";
import axios from "axios";
import videoArrayJson from "../viddeoArrayJson.json";
import Grid from "@material-ui/core/grid";
import Container from "@material-ui/core/Container";
import FavoriteVideos from "../Components/FavoriteVideos";

function Home() {
  const [videoArray, setVideoArray] = useState(videoArrayJson.items);
  const [lastSearches, setLastSearches] = useState([]);

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
    setVideoArray(response.data.items);
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
        <Grid item lg={4}>
          <VideoDetail></VideoDetail>
        </Grid>
        <Grid item lg={4}>
          <VideoList videoArray={videoArray}></VideoList>
        </Grid>
        <Grid item lg={4}>
          <FavoriteVideos></FavoriteVideos>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Home;
