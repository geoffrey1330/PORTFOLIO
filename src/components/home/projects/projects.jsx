import React from "react";
import djangoLogo from "../../../images/django.png";
import moreImg from "../../../images/more.png";
import Game from "../../../images/Game.jpg";
import Gokada from "../../../images/Gokada.png";
import Noodle from "../../../images/Noodle.png";
import dataArt from "../../../images/exxample.png";
import ReactPlayer from "react-player";
import { useState } from "react";
import "./projects.css";

const Projects = ({ darkMode }) => {
  const [ProjectVideo, setProjectVideo] = useState({
    showing: false,
    playing: false,
  });

  const unshowVideo = () => {
    setProjectVideo({ showing: false, playing: false });
  };

  const showVideo = () => {
    setProjectVideo({ showing: true, playing: true });
  };

  return (
    <section
      className={
        darkMode ? "project-section project-section-dark" : "project-section"
      }
    >
      <div className="project-section-header">
        <h1>My projects</h1>
      </div>
      <div className="project-section-main">
        <div data-aos="fade-up" data-aos-delay="500" className="project-item">
          <img src={Game} alt="project 1" />
          <div className="overlay">
            <h3>Jedah</h3>
            <p>
              A Multiplayer TicTacToe game built with React and Django framework
              and Powered with Redis
            </p>
            <p>
              <i class="fab fa-react"></i>
              <img id="small-django" src={djangoLogo} alt="" />
            </p>
            <div className="porject-actions">
              <a href="https://github.com/geoffrey1330/django-react-tic-tac-toe">
                <button className="git-btn" title="view in Github">
                  <i class="fab fa-github"></i>
                </button>
              </a>
              {/* <button className='video-btn'  onClick={showVideo}>Demo <i class="fab fa-youtube"></i></button> */}
              <a href="https://jedah.netlify.app/">
                <button className="live-btn" title="Live Demo">
                  Live!
                </button>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" className="project-item">
          <img src={Noodle}  alt="project 1" />
          <div className="overlay">
            <h3>Noodles</h3>
            <p>
              A distributed web application for gathering learning resources for
              software developers
            </p>
            <p>
              <i class="fab fa-react"></i>
              <i class="fab fa-python"></i>
              <img id="small-django" src={djangoLogo} alt="" />
            </p>
            <div className="porject-actions">
              <a href="https://noodles.dev/">
                <button className="live-btn" title="Live Demo">
                  Live!
                </button>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" className="project-item">
          <img src={dataArt} alt="project 1" />
          <div className="overlay">
            <h3>Data-aRT</h3>
            <p>
              Data-aRT is a No-code environment built in react and Danfojs to
              enable handling data like an Artist.
            </p>
            <p>
              <i class="fab fa-react"></i>
              <i class="fab fa-js-square"></i>
            </p>
            <div className="porject-actions">
              <a href="https://github.com/opensource9ja/Data-aRT">
                <button className="git-btn" title="view in Github">
                  <i class="fab fa-github"></i>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="500" className="project-item">
          <img src={Gokada} alt="project 1" />
          <div className="overlay">
            <h3>GOKADA_MAP </h3>
            <p>
              Google Map Integration for a React project for finding route
              between Pickup address and the Dropoff address.
            </p>
            <p>
              <i class="fab fa-react"></i>
              <i class="fab fa-js-square"></i>
            </p>
            <div className="porject-actions">
              <a href="https://github.com/geoffrey1330/GOKADA_MAP">
                <button className="git-btn" title="view in Github">
                  <i class="fab fa-github"></i>
                </button>
              </a>
              <a href="https://gokada-task.netlify.app/">
                <button className="live-btn" title="Live Demo">
                  Live!
                </button>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" className="project-item">
          <img src={moreImg} alt="project 1" />
          <div className="overlay">
            <h3>... and a lot more</h3>
            <p>
              <i class="fab fa-python"></i>
              <i class="fab fa-js-square"></i>
              <img id="small-django" src={djangoLogo} alt="" />
              <i class="fab fa-react"></i>
            </p>
            <div className="porject-actions">
              <a href="https://github.com/geoffrey1330">
                <button className="git-btn" title="view in Github">
                  <i class="fab fa-github"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          ProjectVideo.showing ? "video-component" : "video-component none"
        }
        onClick={unshowVideo}
      >
        <ReactPlayer
          controls
          playing={ProjectVideo.playing}
          url="https://www.youtube.com/watch?v=XHdLBTo0fWA"
        />
      </div>
    </section>
  );
};

export default Projects;
