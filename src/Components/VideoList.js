import React, { useContext } from "react";
import VideoItem from "./VideoItem";
import { SelectedVideoContext } from "../Hooks/SelectedVideoContext";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

const VideoList = ({ videoArray }) => {
  const { setSelectedVideo } = useContext(SelectedVideoContext);

  return (
    <>
      {videoArray &&
        videoArray.map((video) => (
          <div
            to="/VideoDetail"
            key={video.id.videoId}
            onClick={() => {
              setSelectedVideo(video);
            }}
          >
            <VideoItem video={video}> </VideoItem> <Divider />
          </div>
        ))}
    </>
  );
};

export default VideoList;
