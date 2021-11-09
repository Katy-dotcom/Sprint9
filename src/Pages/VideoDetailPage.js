import React, { useContext } from "react";
import VideoDetail from "../Components/VideoDetail";
import { SelectedVideoContext } from "../Hooks/videoContext";
import RecommendedVideos from "../Components/RecommendedVideos";
import Container from "@mui/material/Container";

const VideoDetailPage = () => {
  const { selectedVideo } = useContext(SelectedVideoContext);

  return (
    <Container maxWidth="xl">
      <VideoDetail />
      <RecommendedVideos videoId={selectedVideo.id.videoId}></RecommendedVideos>
    </Container>
  );
};
export default VideoDetailPage;
