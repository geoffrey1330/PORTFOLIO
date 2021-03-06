import React from "react";
import chevronLogo from "../../../images/chevron.png";
import bleatechLogo from "../../../images/bleau.png";
import yediLogo from "../../../images/unnamed.jpg";
import upworkLogo from "../../../images/R.png";
import "./experience.css";

const Experience = ({ darkMode }) => {
  return (
    <section
      className={
        darkMode
          ? "experience-section-dark experience-section"
          : "experience-section"
      }
    >
      <div className="header-col">
        <h1>
          <span>Experience</span>
        </h1>
      </div>
      <div className="main-col">
        <div className="experience-item">
          <h3>Yedi Tech</h3>
          <img height="35px" src={yediLogo} alt="bleautech logo" />
          <p className="info">
            Fullstack Developer (Django & React)
            <span>&bull;</span> <em className="date">Oct 2020 - Dec 2020</em>
          </p>
          <li>
            I worked with other engineers to build different software
            applications for company clients.
          </li>
          <li>
            I also used django channels to integrate chatting systems for client
            application
          </li>
          <li>
            I was also responsible for code documentation, generating automated
            tests.
          </li>
        </div>

        <hr />

        <div className="experience-item">
          <h3>Bleautech Org.</h3>
          <img height="35px" src={bleatechLogo} alt="bleautech logo" />
          <p className="info">
            Python Developer
            <span>&bull;</span> <em className="date">Jan 2020 - present</em>
          </p>
          <li>
            I assisted in the development of the company's website which
            increased the companies online visibility.
          </li>
          <li>
            I also assisted in building different software applications for the
            company and its clients
          </li>
        </div>

        <div className="experience-item">
          <h3>Upwork </h3>
          <img height="35px" src={upworkLogo} alt="bleautech logo" />
          <p className="info">
            Fullstack Developer (Django & React)
            <span>&bull;</span> <em className="date">Jun 2020 - present</em>
          </p>
          <li>
            I work as a freelancer where i help in the scaling and maintenance
            of codes for clients
          </li>
          <li>
            I also assisted in building different software applications for the
            company and its clients
          </li>
        </div>
      </div>
    </section>
  );
};

export default Experience;
