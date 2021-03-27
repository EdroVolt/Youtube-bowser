import React from "react";
import "./Search.css";

class Search extends React.Component {
  state = { searchTerm: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search">
        <form className="form" onSubmit={this.onFormSubmit}>
          <label className="search-label">Video Search</label>
          <input
            value={this.state.searchTerm}
            type="text"
            className="search-input"
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
            placeholder="search ..."
          />
        </form>
      </div>
    );
  }
}

export default Search;
