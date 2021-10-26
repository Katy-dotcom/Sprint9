import React, { useState, useContext } from "react";
import SearchBar from "./Components/SearchBar";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";
import { SelectedVideoContext } from "./Hooks/SelectedVideoContext";

function App() {
  const { selectedVideo, setSelectedVido } = useContext(SelectedVideoContext);

  const [videoArray, setVideoArray] = useState([]);
  return (
    <div>
      <SearchBar></SearchBar>
      <VideoDetail></VideoDetail>
      <VideoList></VideoList>
    </div>
  );
}

export default App;
