import React, { useContext, useState, useEffect } from "react";
import VideoDetail from "../Components/VideoDetail";
import { SelectedVideoContext } from "../Hooks/SelectedVideoContext";
import axios from "axios";
import VideoList from "../Components/VideoList";

const VideoDetailPage = () => {
  const { selectedVideo, setSelectedVideo } = useContext(SelectedVideoContext);
  console.log("SelectedVideo", selectedVideo);

  const [relatedVideos, setRelatedVideos] = useState([]);

  const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      type: "video",
      maxResults: 4,
      key: "AIzaSyDcfqwbssY0fuiBxdY94B_x23O4X2QZLjo",
    },
  });

  const getRelatedVideos = async () => {
    if (selectedVideo) {
      const response = await youtube.get("/search", {
        params: { relatedToVideoId: `${selectedVideo.id.videoId}` },
      });
      console.log("response", response);
      setRelatedVideos(response.data);
    }
  };

  useEffect(() => {
    getRelatedVideos();
  }, [selectedVideo]);

  return (
    <>
      <VideoDetail></VideoDetail>
      {relatedVideos && <VideoList videoArray={relatedVideos}></VideoList>}
    </>
  );
};
export default VideoDetailPage;
