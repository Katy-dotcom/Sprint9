import React, { useContext } from "react";
import VideoItem from "./VideoItem";
import { SelectedVideoContext } from "../Hooks/SelectedVideoContext";
import { Divider } from "@material-ui/core";

const VideoList = ({ videoArray }) => {
  const { selectedVideo, setSelectedVideo } = useContext(SelectedVideoContext);
  console.log("VideoListComp", videoArray);

  return (
    <div>
      {videoArray.items.map((video) => (
        <div key={video.id.videoId} onClick={() => setSelectedVideo(video)}>
          <VideoItem video={video}></VideoItem> <Divider />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
