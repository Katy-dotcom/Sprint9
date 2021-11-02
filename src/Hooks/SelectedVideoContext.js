import { createContext, useState, useEffect } from "react";

export const SelectedVideoContext = createContext(null);

export const SelectedVideoProvider = ({ children }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <SelectedVideoContext.Provider value={{ selectedVideo, setSelectedVideo }}>
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

  return (
    <FavVideosContext.Provider value={{ favoriteArray, setFavoriteArray }}>
      {children}
    </FavVideosContext.Provider>
  );
};
