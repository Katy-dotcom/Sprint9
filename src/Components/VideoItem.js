import React from "react";
import Grid from "@material-ui/core/grid";

const VideoItem = ({ video }) => {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item lg={7}>
        <img src={video.snippet.thumbnails.medium.url}></img>
      </Grid>
      <Grid item lg={5}>
        <div> Video title: {video.snippet.title}</div>
      </Grid>
    </Grid>
  );
};

export default VideoItem;
