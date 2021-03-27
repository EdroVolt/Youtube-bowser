import React from "react";
import "./videoPreview.css";

const VideoPreview = ({ video }) => {
  return (
    <div className="video-preview">
      <iframe
        className="iframe"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameborder="0"
      ></iframe>
      <div className="video-details">
        <h3 className="title">{video.snippet.title}</h3>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPreview;
