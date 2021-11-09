import React, { useContext } from "react";
import VideoList from "./VideoList";
import { FavVideosContext } from "../Hooks/videoContext";

const FavoriteVideos = () => {
  const { favoriteArray } = useContext(FavVideosContext);

  return (
    <>
      <h4>Favorite videos · {favoriteArray.length}</h4>
      {favoriteArray && (
        <VideoList videoArray={favoriteArray}>Favorite Videos</VideoList>
      )}
    </>
  );
};

export default FavoriteVideos;
