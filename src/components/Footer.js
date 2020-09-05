import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="site-footer footer fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h5>Follow Me!</h5>
              <a href="https://www.instagram.com/">
                <i className="fa fa-2x fa-instagram" />
              </a>
              <a href="https://www.facebook.com/">
                <i className="fa fa-2x fa-facebook" />
              </a>
              <a href="https://wwww.twitter.com/">
                <i className="fa fa-2x fa-twitter" />
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa fa-2x fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
