import axios from "axios";

export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 4,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});
