import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import "Job/src/translate.css";
import "bootstrap/dist/css/bootstrap.css";

class Translate extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-dark align-items-center">
          /*Brand Name*/
          <a href="Tarnslate.html" className="navbar-brand">
            Translate
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#HomepageMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          /*Toggle Horizontal Alignment*/
          <div className="collapse navbar-collapse " id="HomepageMenu">
            /*Navigation Items*/
            <div className="navbar-nav">
              <a className="nav-link" href="#">
                ABOUT US
              </a>
              <a className="nav-link" href="#">
                PRICING
              </a>
              <a className="nav-link" href="#">
                WORK WITH US
              </a>
              <a className="nav-link" id="sign-in" href="#">
                SIGN IN
              </a>
            </div>
          </div>
        </nav>

        <div className="main-content">
          <h6 id="h6">Tip: Click the highlighted words</h6>

          <div id="line"></div>

          <p id="main-text">
            Please translate <span id="first">my document</span> from{" "}
            <span id="second">this language</span> to{" "}
            <span id="third">these language(s)</span>, <br />
            and send the translated version to
            <span id="last">my email</span>.
          </p>

          <div id="pop-up"></div>
        </div>

        <div className="bottom">
          <div id="flex-container">
            <p id="bottom-brand-name">Translate's Official Website</p>
            /*Social Media Icons*/
            <img
              src="./Images/Facebook.svg"
              className="social-media-icons"
              id="facebook"
            />
            <img
              src="./Images/Twitter.svg"
              className="social-media-icons"
              id="twitter"
            />
            <img
              src="./Images/Linkedin.svg"
              className="social-media-icons"
              id="linkedin"
            />
          </div>

          <p id="copyright">©All Rights Reserved 2019</p>
        </div>

        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
      </div>
    );
  }
}

export default Translate;
