import React from "react";

import VideoItem from "./VideoItem";
import Grid from "@mui/material/Grid";

const VideoList = ({ videoArray }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        border: 2,
        borderColor: "primary.main",
        borderRadius: 3,
        pb: 2,
        pr: 2,
      }}
    >
      {videoArray &&
        videoArray.map((video) => (
          <Grid item key={video.id.videoId}>
            <VideoItem video={video} />
          </Grid>
        ))}
    </Grid>
  );
};

export default VideoList;
