import React, { Component } from "react";
import myImage from "../../../images/bg1.jpg";
import Social from "../../common/social/social";
import Emoji from "../../common/Emoji";
import "../hero/hero.css";

class Hero extends Component {
  state = { blinkText: "" };
  introTextRef = React.createRef();
  blinkRef = React.createRef();

  componentDidMount() {
    window.onLoad = setTimeout(this.handleIntroLoad, 1000);
    this.handleBlink();
  }

  handleIntroLoad = () => {
    this.introTextRef.current.className =
      this.introTextRef.current.className + " move";
  };

  handleBlink = () => {
    setInterval(() => {
      if (this.state.blinkText === "<Scalable />") {
        const blinkText = "<Secure />";
        this.setState({ blinkText });
      } else if (this.state.blinkText === "<Secure />") {
        const blinkText = "<Amazing />";
        this.setState({ blinkText });
      } else {
        const blinkText = "<Scalable />";
        this.setState({ blinkText });
      }
    }, 2000);
  };

  render() {
    const { darkMode } = this.props;
    return (
      <section className={darkMode ? "hero dark" : "hero"}>
        <div className="left">
          <div className="img-container">
            <img
              className={darkMode ? "dark" : ""}
              src={myImage}
              alt="Geoffrey Israel"
            />
          </div>
          <Social />
        </div>
        <div className="right">
          <div ref={this.introTextRef} className="intro-text">
            <h1>
              <Emoji symbol="👋" /> Hello there... I am Geoffrey Israel.
            </h1>
            <hr />
            <p>I am commited to life long learning</p>
            <p>
              I build apps that are <br />{" "}
              <span className="blink" ref={this.blinkRef}>
                {this.state.blinkText}
              </span>
            </p>
          </div>
          <div className={darkMode ? "resume-btn dark" : "resume-btn"}>
            <div className="slide"></div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/14FKIJGYErPi41xPlwxdbsOJCpnLaZTpF/view?usp=sharing"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
