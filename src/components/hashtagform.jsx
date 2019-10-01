import React, { Component } from "react";

class HashTagForm extends Component {
  state = {
    value: "",
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    const { onSubmit } = this.props;
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Tags:
          <textarea onChange={this.handleChange} value={value} placeholder="Type in your hashtags here" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default HashTagForm;
