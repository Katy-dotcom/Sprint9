import React, { useContext } from "react";
import { SelectedVideoContext } from "../Hooks/videoContext";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

const VideoDetail = () => {
  const { selectedVideo } = useContext(SelectedVideoContext);

  // if (selectedVideo === undefined) {
  //   console.log("Video detail: selectedVideo es undefined");
  // } else {
  //   console.log(selectedVideo);
  // }
  return (
    <div>
      {selectedVideo === null ? (
        <p>Select a video</p>
      ) : (
        <Card>
          <CardMedia
            component="iframe"
            image={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
            height="600"
          >
            {" "}
            {selectedVideo.snippet.title}
          </CardMedia>
          <CardContent style={{ border: "1px solid grey" }}>
            <strong>{selectedVideo.snippet.title} </strong>
            <br /> {selectedVideo.snippet.description}
          </CardContent>
        </Card>
      )}
      <Link to="/History">
        <div style={{ color: "white" }}></div>
      </Link>
    </div>
  );
};

export default VideoDetail;
