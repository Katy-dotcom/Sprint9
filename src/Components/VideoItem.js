import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { FavVideosContext } from "../Hooks/SelectedVideoContext";

const VideoItem = ({ video }) => {
  const { favoriteArray, setFavoriteArray } = useContext(FavVideosContext);
  const fav = favoriteArray.some(
    (favoriteVideo) => favoriteVideo.id.videoId === video.id.videoId
  );

  const updateFavArray = () => {
    let newFavoriteArray = [];
    if (
      //Comprobar si el video existe en el array
      favoriteArray.some(
        (favoriteVideo) => favoriteVideo.id.videoId === video.id.videoId
      )
    ) {
      //si existe, eliminarlo del array
      newFavoriteArray = favoriteArray.filter(
        (favoriteVideo) => favoriteVideo.id.videoId !== video.id.videoId
      );
    } else {
      //si no existe, añadirlo al array
      newFavoriteArray = [...favoriteArray, video];
    }
    // actualizo  el array
    setFavoriteArray(newFavoriteArray);
    console.log("favoriteArray", favoriteArray);
  };
  console.log("dentro de video item", "video", video);

  return (
    <>
      {video && video.snippet && (
        <Grid container direction="row" alignItems="center">
          <Grid item lg={7}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt="related to the video"
            ></img>
          </Grid>
          <Grid item lg={5}>
            <div> Video title: {video.snippet.title}</div>
          </Grid>
          <button
            style={
              fav ? { backgroundColor: "green" } : { backgroundColor: "red" }
            }
            onClick={updateFavArray}
          >
            Favorite
          </button>
        </Grid>
      )}
    </>
  );
};

export default VideoItem;
