import React, { Component } from "react";

import img1 from "../images/student.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Home Page</h1>
        <img src={img1} alt="cat" width="1200" height="500" />
      </div>
    );
  }
}
