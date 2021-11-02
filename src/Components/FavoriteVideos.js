import React, { useContext } from "react";
import VideoList from "./VideoList";
import { FavVideosContext } from "../Hooks/SelectedVideoContext";

const FavoriteVideos = () => {
  const { favoriteArray } = useContext(FavVideosContext);

  return (
    <>
      {favoriteArray && (
        <VideoList videoArray={favoriteArray}>Favorite Videos</VideoList>
      )}
    </>
  );
};

export default FavoriteVideos;
