import React, { useContext } from "react";
import VideoItem from "./VideoItem";
import { SelectedVideoContext } from "../Hooks/SelectedVideoContext";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

const VideoList = ({ videoArray }) => {
  const { selectedVideo, setSelectedVideo } = useContext(SelectedVideoContext);
  console.log("VideoListComp", videoArray);

  return (
    <>
      {videoArray &&
        videoArray.items &&
        videoArray.items.map((video) => (
          <Link
            to="/VideoDetail"
            key={video.id.videoId}
            onClick={() => {
              setSelectedVideo(video);
              // onSearchRelated();
            }}
          >
            <VideoItem video={video}> </VideoItem> <Divider />
          </Link>
        ))}
    </>
  );
};

export default VideoList;
