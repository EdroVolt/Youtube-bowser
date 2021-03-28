import React from "react";
import "./videoCard.css";

const VideoCard = ({ video, onVideoSelect }) => {
  console.log(video.etag);

  return (
    <div
      className="video-card"
      onClick={(e) => {
        onVideoSelect(video);
      }}
    >
      <img
        className="img"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <p>{video.snippet.title}</p>
    </div>
  );
};

export default VideoCard;
