import React, { useState, useEffect } from "react";
import VideoList from "./VideoList";
import { youtube } from "../Apis/youtube";

const RecommendedVideos = ({ videoId }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const getRelatedVideos = async () => {
      try {
        if (videoId) {
          const response = await youtube.get("/search", {
            params: { relatedToVideoId: videoId },
          });
          setRelatedVideos(response.data.items);
        }
      } catch (err) {
        console.error(`${err}`);
      }
    };
    getRelatedVideos();
  }, [videoId]);

  return (
    <div>
      <h4>Recommended videos</h4>
      <>{relatedVideos && <VideoList videoArray={relatedVideos} />}</>
    </div>
  );
};
export default RecommendedVideos;
