import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        role="navigation"
        aria-label="main-navigation"
      >
        <div>
          <div>
            <Link to="/" title="Logo">
              <p>SimonSaysHello</p>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`${this.state.navBarActiveClass}`}
          >
            <div className="">
              <Link className="" to="/projects">
                Projects
              </Link>
              <Link className="" to="/skills">
                Skills
              </Link>
              <Link className="" to="/blog">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
