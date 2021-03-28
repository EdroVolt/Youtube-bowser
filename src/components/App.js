import React from "react";
import "./app.css";
import Search from "./Search";
import VideoList from "./VideoList";
import VideoPreview from "./VideoPreview";
import Youtube from "../APIs/YoutubeAPI";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onFormSubmite = async (searchTerm) => {
    const response = await Youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items["0"],
    });
    // console.log(this.state.videos);
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="app">
        <Search onFormSubmit={this.onFormSubmite} />
        <div className="container">
          {this.state.selectedVideo ? (
            <VideoPreview video={this.state.selectedVideo} />
          ) : (
            <div></div>
          )}
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}
export default App;
