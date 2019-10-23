import React from "react";
import { Form, Button } from "react-bootstrap";

export const TagsInput = ({ onTagsChange, onTagNameChange, onTagsSubmit }) => {
  return (
    <Form onSubmit={onTagsSubmit}>
      <Form.Group controlId="tagName.Input">
        <Form.Label>Tag Name</Form.Label>
        <Form.Control as="input" type="text" onChange={onTagNameChange} />
      </Form.Group>
      <Form.Group controlId="tags.Textarea">
        <Form.Label>Tags</Form.Label>
        <Form.Control as="textarea" rows="3" onChange={onTagsChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};
