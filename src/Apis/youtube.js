import axios from "axios";

export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 4,
    key: "AIzaSyDcfqwbssY0fuiBxdY94B_x23O4X2QZLjo",
  },
});
