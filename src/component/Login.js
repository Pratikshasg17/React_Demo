import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <>
      <div className="container text-center mt-5">
        <b>Student Login System</b>
      </div>

      <Form>
        <div className="container mt-5">
          <div class="mb-3 align-center"></div>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" />
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
export { Login };
