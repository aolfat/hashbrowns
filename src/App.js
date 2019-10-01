import React, { Component } from "react";
import HashTagButton from "./components/hashtagbutton";
import HashTagForm from "./components/hashtagform";
import "./App.css";

class App extends Component {
  state = {
    tags: "",
    strTags: [],
    tagsList: []
  };

  handleSubmit = (tags) => {
    const strTags = tags.split(',') // split tags into array by comma
                    .map(tag => tag.trim()) // trims white space
                    .filter(tag => tag) // removes empty elements
                    .concat(this.state.strTags); // combines existing tags

    this.setState({ strTags });
  };

  hardCodeValues = () => {
    const tags = [
      "moodygrams",
      "depthsofearth",
      "eclectic_shotz",
      "earth_shotz",
      "travel_destinations",
      "instagood"
    ];
    return tags;
  };

  render() {
    return (
      <div className="App">
        <HashTagForm onSubmit={this.handleSubmit} tags={this.state.tags} />
        {this.state.strTags.map((v, index) => (
          <HashTagButton key={index} tag={v} />
        ))}
      </div>
    );
  }
}

export default App;
