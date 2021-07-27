import React, { Component } from "react";
import Emoji from "./../common/Emoji";
import "./blogHome.css";
import cariGoImg from "../../images/carigo.png";

class BlogHome extends Component {
  state = {};
  render() {
    const { scrollTop, darkMode } = this.props;
    return (
      <section
        className={darkMode ? "blog-section blog-section-dark" : "blog-section"}
      >
        <div className="blog-section-header">
          <h1>My Blog</h1>
        </div>
        <div className="blog-section-main">
          <div data-aos="fade-up" data-aos-delay="500" className="blog-item">
            <img src={cariGoImg} alt="blog 1" />
            <div className="overlay">
              <h3>Deploying Your Django App To Heroku</h3>

              <div className="blog-actions">
                {/* <button className='video-btn'  onClick={showVideo}>Demo <i class="fab fa-youtube"></i></button> */}
                <a href="https://geoffrey.hashnode.dev/deploying-your-django-app-to-heroku">
                  <button className="live-btn" title="Live Demo">
                    Read
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="500" className="blog-item">
            <img src={cariGoImg} alt="blog 1" />
            <div className="overlay">
              <h3>Deploying Your React App To Heroku</h3>

              <div className="blog-actions">
                {/* <button className='video-btn'  onClick={showVideo}>Demo <i class="fab fa-youtube"></i></button> */}
                <a href="https://geoffrey.hashnode.dev/deploying-your-react-app-to-heroku">
                  <button className="live-btn" title="Live Demo">
                    Read
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogHome;
