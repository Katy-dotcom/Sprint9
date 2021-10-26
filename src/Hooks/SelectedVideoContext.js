import { createContext, useContext, useState } from "react";

export const SelectedVideoContext = createContext(null);

export const SelectedVideoProvider = ({ children }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <SelectedVideoContext.Provider value={(selectedVideo, setSelectedVideo)}>
      {children}
    </SelectedVideoContext.Provider>
  );
};
