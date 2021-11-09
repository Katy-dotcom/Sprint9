import { createContext, useState, useEffect } from "react";

export const SelectedVideoContext = createContext(null);

export const SelectedVideoProvider = ({ children }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [lastViewedVideos, setLastViewedVideos] = useState([]);

  const handleVideoItemClick = (video) => {
    setSelectedVideo(video);
    setLastViewedVideos([...lastViewedVideos, video]);
    console.log("lastViewedVideos en Context", lastViewedVideos);
  };

  return (
    <SelectedVideoContext.Provider
      value={{
        selectedVideo,
        setSelectedVideo,
        lastViewedVideos,
        setLastViewedVideos,
        handleVideoItemClick,
      }}
    >
      {children}
    </SelectedVideoContext.Provider>
  );
};

export const FavVideosContext = createContext(null);

export const FavVideosProvider = ({ children }) => {
  const initialState = () =>
    JSON.parse(window.localStorage.getItem("favoriteArray")) || [];
  const [favoriteArray, setFavoriteArray] = useState(initialState);
  useEffect(() => {
    window.localStorage.setItem("favoriteArray", JSON.stringify(favoriteArray));
  }, [favoriteArray]);

  const initialStateLastSearches = () =>
    JSON.parse(window.localStorage.getItem("condensedList")) || [];
  const [condensedList, setCondensedList] = useState(initialStateLastSearches);
  useEffect(
    () =>
      window.localStorage.setItem(
        "condensedList",
        JSON.stringify(condensedList)
      ),
    [condensedList]
  );

  return (
    <FavVideosContext.Provider
      value={{
        favoriteArray,
        setFavoriteArray,
        condensedList,
        setCondensedList,
      }}
    >
      {children}
    </FavVideosContext.Provider>
  );
};
