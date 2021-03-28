import React from "react";
import VideoCard from "./VideoCard";
import "./videoList.css";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="video-list">
      {videos.map((video) => {
        return (
          <VideoCard
            key={video.id.videoId}
            video={video}
            onVideoSelect={onVideoSelect}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
