import React, { useContext } from "react";
import VideoDetail from "../Components/VideoDetail";
import { SelectedVideoContext } from "../Hooks/videoContext";
import RecommendedVideos from "../Components/RecommendedVideos";

const VideoDetailPage = () => {
  const { selectedVideo } = useContext(SelectedVideoContext);

  return (
    <>
      <VideoDetail />
      <RecommendedVideos videoId={selectedVideo.id.videoId}></RecommendedVideos>
    </>
  );
};
export default VideoDetailPage;
