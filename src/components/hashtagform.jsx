import React, { Component } from "react";

class HashTagForm extends Component {
  state = {
    value: "Type in your hashtags here"
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <form
        onSubmit={() => onSubmit(this.state.value)}
        onChange={this.handleChange}
      >
        <label>
          Tags:
          <textarea />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default HashTagForm;
