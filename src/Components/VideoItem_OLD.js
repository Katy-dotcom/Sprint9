import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { SelectedVideoContext } from "../Hooks/SelectedVideoContext";

const VideoItem = ({ video }) => {
  const [fav, setFav] = useState(false);
  const { selectedVideo, setSelectedVideo } = useContext(SelectedVideoContext);

  const updateFav = () => {
    //descargar el array de localStorage
    let favoriteArray =
      JSON.parse(window.localStorage.getItem("favoriteArray")) || [];

    //buscar el video en el array
    let indexToDelete = favoriteArray.findIndex(
      (favoriteVideo) => favoriteVideo.id.videoId === video.id.videoId
    );

    if (indexToDelete !== -1) {
      //si existe, eliminarlo del array
      favoriteArray.splice(indexToDelete, 1);
      console.log("eliminando item", video.id.videoId);
      setFav(false);
    } else {
      //si no existe, añadirlo al array
      favoriteArray.push(video);
      setFav(true);
    }
    // actualizo  el array de localStorage
    window.localStorage.setItem("favoriteArray", JSON.stringify(favoriteArray));
    console.log("favoriteArray", favoriteArray);
  };
  console.log("dentro de video item", "video", video);

  return (
    <>
      {video && video.snippet && (
        <Grid container direction="row" alignItems="center">
          <Grid item lg={7}>
            <img src={video.snippet.thumbnails.medium.url}></img>
          </Grid>
          <Grid item lg={5}>
            <div> Video title: {video.snippet.title}</div>
          </Grid>
          <button
            style={
              fav ? { backgroundColor: "green" } : { backgroundColor: "red" }
            }
            onClick={updateFav}
          >
            Favorite
          </button>
        </Grid>
      )}
    </>
  );
};

export default VideoItem;
