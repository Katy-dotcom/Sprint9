import React, { useContext } from "react";
import VideoList from "../Components/VideoList";
import { SelectedVideoContext } from "../Hooks/videoContext";
import { FavVideosContext } from "../Hooks/videoContext";

const History = () => {
  const { lastViewedVideos } = useContext(SelectedVideoContext);

  const { condensedList } = useContext(FavVideosContext);

  const lastSearchedTermVideos = condensedList.flatMap((condensedItem) => [
    condensedItem.videos[0],
    condensedItem.videos[1],
  ]);

  return (
    <div>
      <h4>Last viewed videos</h4>
      <VideoList videoArray={lastViewedVideos}></VideoList>
      <h4>Videos from last searched terms</h4>

      <VideoList videoArray={lastSearchedTermVideos}></VideoList>
    </div>
  );
};

export default History;
