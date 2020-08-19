import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Weather App</h1>
            </div>
          </div>
        </div>
      </Jumbotron>
    );
  }
}

export default Header;
