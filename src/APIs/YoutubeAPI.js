import axios from "axios";

const KEY = "AIzaSyCEgVEuyNZwNpYdrghCIE9cDU6oQbpTT30";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: "10",
    key: KEY,
  },
});
