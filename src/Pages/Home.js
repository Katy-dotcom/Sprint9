import React, { useState, useContext } from "react";
import SearchBar from "../Components/SearchBar";
import VideoList from "../Components/VideoList";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FavoriteVideos from "../Components/FavoriteVideos";
import { FavVideosContext } from "../Hooks/videoContext";
import SearchHistory from "../Components/SearchHistory";
import { youtube } from "../Apis/youtube";
import RecommendedVideos from "../Components/RecommendedVideos";
import SideBar from "../Components/SideBar";

function Home() {
  const [videoArray, setVideoArray] = useState([]);
  const { condensedList, setCondensedList } = useContext(FavVideosContext);
  const [lastSearchSelectedVideo, setLastSearchSelectedVideo] = useState("");
  const [showRecommendedVideos, setShowRecommendedVideos] = useState(true);

  const handleSubmit = async (termFromSearchBar) => {
    try {
      const response = await youtube.get("/search", {
        params: { q: termFromSearchBar },
      });
      setVideoArray(response.data.items);
      setShowRecommendedVideos(false);

      const newCondensedItem = {
        searchedTerm: termFromSearchBar,
        videos: response.data.items,
        timestamp: Date.now(),
      };
      setCondensedList([newCondensedItem, ...condensedList]);
    } catch (err) {
      console.error(`${err}`);
    }
  };
  // funcion que pone showRecommendedVideos a true y actualiza el LastSearchSelectedVideo, la paso a nieto(CodensedListItem) por props
  const handleLastSearchVideoClick = (videoId) => {
    setLastSearchSelectedVideo(videoId);
    setShowRecommendedVideos(true);
  };

  return (
    <Container maxWidth="xl">
      <SearchBar onSearch={handleSubmit}></SearchBar>
      {/* <SideBar></SideBar> */}

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        columnSpacing={4}
      >
        {showRecommendedVideos ? (
          lastSearchSelectedVideo && (
            <Grid item lg={6}>
              <RecommendedVideos
                videoId={lastSearchSelectedVideo}
              ></RecommendedVideos>
            </Grid>
          )
        ) : (
          <Grid item lg={6}>
            <h4>Search results</h4>
            <VideoList videoArray={videoArray}></VideoList>
          </Grid>
        )}

        <Grid item lg={6}>
          <FavoriteVideos></FavoriteVideos>
        </Grid>
        <Grid item lg={6}>
          <SearchHistory
            onClickItem={handleLastSearchVideoClick}
          ></SearchHistory>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Home;
