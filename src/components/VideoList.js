import React from "react";
import VideoCard from "./VideoCard";
import "./videoList.css";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="video-list">
      {videos.map((video) => {
        return <VideoCard video={video} onVideoSelect={onVideoSelect} />;
      })}
    </div>
  );
};

export default VideoList;
