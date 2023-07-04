import React, { Component } from "react";

import { Form, Button } from "react-bootstrap"

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="container text-center mt-5">
          <b>I Am Contact us page</b>
        </div>
        <Form>
          <div className="container mt-5">
            <div class="mb-3 align-center"></div>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Query:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <div className="container text-center mt-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </>
    );
  }
}
