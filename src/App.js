import React, { Component } from "react";
import { Header } from "./components/layout/Header";
import { TagsInput } from "./components/TagsInput";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  state = {
    textarea: "",
    tags: "",
    strTags: [],
    tagsList: [],
    groupName: "",
    groupTags: {}
  };

  handleChange = e => {
    this.setState({ textarea: e.target.value });
  };

  handleNameChange = e => {
    this.setState({ groupName: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const tags = this.state.textarea;
    if (tags === "") {
      return;
    }
    let tagsList = tags.split(" ");
    this.setState({
      tagsList,
      groupTags: {
        ...this.state.groupTags,
        [this.state.groupName.trim()]: tagsList
      },
      textarea: "", // resetting the text area
      function() {
        console.log(this.state.groupTags);
      }
    });
    e.target.reset(); // not sure if I need this
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row className="justify-content-md-center">
            <Col xs>
              <TagsInput
                onTagsChange={this.handleChange}
                onTagNameChange={this.handleNameChange}
                onTagsSubmit={this.handleSubmit}
              />
            </Col>
          </Row>
        </Container>
        {Object.keys(this.state.groupTags).map(name =>
          this.buildGroupTag(name)
        )}
      </div>
    );
  }

  buildGroupTag = name => {
    return (
      <React.Fragment>
        <label>{name}</label>
        {this.state.groupTags[name].map(tag => (
          <button key={name + tag}>{tag}</button>
        ))}
      </React.Fragment>
    );
  };
}

export default App;
