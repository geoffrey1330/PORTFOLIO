import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/GEOFFREY.png";
import "../navBar/navBar.css";

class NavBar extends Component {
  handleSectionScroll(section) {
    Location = "/";
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  }

  generateNavClasses = () => {
    let classes = "navbar navbar-expand-lg animated ";
    if (this.props.scrollTop > 170) {
      classes = classes + " fixed-top fadeInDown shadow";
    }
    return this.props.darkMode === true
      ? classes + " navbar-dark bg-dark"
      : classes + " navbar-light bg-primary ";
  };

  navLinks = [
    {
      name: "Skills",
      path: "",
      section: ".skill-section",
    },
    {
      name: "Projects",
      path: "",
      section: ".project-section",
    },
    {
      name: "Experience",
      path: "",
      section: ".experience-section",
    },
    {
      name: "Contact",
      path: "",
      section: ".contact-section",
    },
  ];

  render() {
    const { onDarkModeToggle } = this.props;
    return (
      <nav className={this.generateNavClasses()}>
        {/* nav brand */}
        <Link class="navbar-brand" to="/">
          <img src={logo} alt="Geoffrey" />
        </Link>

        {/* nav toggler  */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* nav links  */}
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>

            {this.navLinks.map((item, key) => (
              <li key={key} class="nav-item active">
                <Link
                  class="nav-link"
                  to={item.path}
                  onClick={
                    item.section
                      ? () => this.handleSectionScroll(item.section)
                      : null
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li class="nav-item active blog">
              {/* <Link class="nav-link" to="https://geoffrey.hashnode.dev/"> */}
              <a class="nav-link" href="https://geoffrey.hashnode.dev/">
                Blog
              </a>

              {/* </Link> */}
            </li>
          </ul>

          {/* dark mode switch */}
          <label class="switch">
            <input type="checkbox" onChange={onDarkModeToggle} />
            <span class="slider"></span>
          </label>
        </div>
      </nav>
    );
  }
}

export default NavBar;
