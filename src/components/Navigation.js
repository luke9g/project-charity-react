import React from 'react';
import {Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import Scroll from 'react-scroll';
import "../style/Navigation.scss";
import {withRouter} from 'react-router-dom';

let ScrollLink = Scroll.Link;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  handleMenu = () => {
    if (window.innerWidth <= 768) {
      if (!this.state.active) {
        document.getElementById("root").className = "burger-menu-opened"
      } else {
        document.getElementById("root").className = ""
      }
      this.setState({active: !this.state.active})
    }
  };

  render() {
    return (
      <header>
        <div className="container">
          <div className="burger-menu" onClick={this.handleMenu}>
            <div className={this.state.active ? "line1 active" : "line1"}/>
            <div className={this.state.active ? "line2 active" : "line2"}/>
            <div className={this.state.active ? "line3 active" : "line3"}/>
          </div>
          <div className={this.state.active ? "menus-wrapper active" : "menus-wrapper"} onClick={this.handleMenu}>
            <ul className="after-login-menu">
              <li>
                <div className="menu-user-name">
                  Cześć, nieznajomy!
                </div>
              </li>
              <li>
                <Link to={"/oddaj-rzeczy"}>
                  Oddaj rzeczy
                </Link>
              </li>
              <li>
                <button className="log-out-button">
                  Wyloguj
                </button>
              </li>
            </ul>
            <ul className="before-login-menu">
              <li>
                <Link to={"/logowanie"}>
                  Zaloguj
                </Link>
              </li>
              <li><Link to={"/rejestracja"}>
                Załóż konto
              </Link>
              </li>
            </ul>
            <ul className="main-menu">
              {this.props.location.pathname === "/" ?
                <>
                  <li>
                    <ScrollLink to={"welcome"} spy={true} smooth={true} duration={500} onClick={this.handleMenu}>
                      Start
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to={"simpleSteps"} spy={true} smooth={true} duration={500} onClick={this.handleMenu}>
                      O co chodzi?
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to={"aboutUs"} spy={true} smooth={true} duration={500} onClick={this.handleMenu}>
                      O nas
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to={"whoWeHelp"} spy={true} smooth={true} duration={500} onClick={this.handleMenu}>
                      Fundacja i organizacje
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to={"contact"} spy={true} smooth={true} duration={500} onClick={this.handleMenu}>
                      Kontakt
                    </ScrollLink>
                  </li>
                </>
                :
                <>
                  <li>
                    <HashLink to={"/#welcome"} onClick={this.handleMenu}>
                      Start
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to={"/#simpleSteps"} onClick={this.handleMenu}>
                      O co chodzi?
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to={"/#aboutUs"} onClick={this.handleMenu}>
                      O nas
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to={"/#whoWeHelp"} onClick={this.handleMenu}>
                      Fundacja i organizacje
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to={"/#contact"} onClick={this.handleMenu}>
                      Kontakt
                    </HashLink>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Navigation);
