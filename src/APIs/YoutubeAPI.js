import axios from "axios";

const KEY = "AIzaSyCMFUuIq0pdablp0GgXPA1lzsEIXMjoOa0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "videos",
    maxResults: "5",
    key: KEY,
  },
});
