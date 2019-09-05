import React, { Component } from "react";
import HashTagButton from "./components/hashtagbutton";
import "./App.css";

class App extends Component {
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
        <header className="App-header">
          {this.hardCodeValues().map(v => (
            <HashTagButton tag={v} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
