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

  handleSubmit = (tags, e) => {
    e.preventDefault();
    let strTags = tags.split();
    const tagsList = [...this.state.tagsList];
    tagsList.push(strTags);

    this.setState({ strTags, tagsList });
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
