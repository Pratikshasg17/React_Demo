import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Display() {
  return (
    <div className="container text-center mt-5">
      <b>Welcome to Student Management System</b>
    </div>
  );
}


function Log() {
  return (
    <Form>
      <div className="container mt-5">
        <div class="mb-3 align-center"></div>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age:</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <div className="container text-center mt-3">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
}
export { Display, Log };
