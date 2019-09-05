import React, { Component } from "react";

class HashTagButton extends Component {
  render() {
    const { tag } = this.props;
    return <button> {tag} </button>;
  }
}

export default HashTagButton;
