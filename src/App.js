import React, { Component } from "react";
import { Header } from "./components/layout/Header";
import { TagsInput } from "./components/TagsInput";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class App extends Component {
  state = {
    textarea: "",
    tags: "",
    strTags: [],
    tagsList: [],
    groupName: "",
    groupTags: {},
    groupTags2: []
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
      groupTags2: [
        ...this.state.groupTags2,
        { tagName: this.state.groupName.trim(), tagsList: tagsList }
      ],
      textarea: "" // resetting the text area,
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
        <Container>
          {Object.keys(this.state.groupTags).map(name =>
            this.buildGroupTag(name)
          )}
        </Container>
      </div>
    );
  }

  buildGroupTag = name => {
    return (
      <Row className="justify-content-md-center">
        <Card>
          <Card.Header>{name}</Card.Header>
          <Card.Body>
            {this.state.groupTags[name].map(tag => (
              <Button key={name + tag}>{tag}</Button>
            ))}
          </Card.Body>
        </Card>
      </Row>
    );
  };
}

export default App;
