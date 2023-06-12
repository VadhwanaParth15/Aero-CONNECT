import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./nav.css";
// import logo from "../../assets/logo.svg";
import { FiShoppingCart } from "react-icons/fi";

import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            {/* <img className="logonav" src={logo} alt="Logo" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav p-3">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link> */}
              <Nav.Link
                href="https://drive.google.com/drive/folders/1Jy_X_3X23gL_CVeEgH-010sJgfMgoP-3"
                target="_blank"
                className={
                  activeLink === "Schedule" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Schedule")}
              >
                Schedule
              </Nav.Link>
              <Nav.Link
                href="/#About"
                className={
                  activeLink === "About" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("About")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="/#SEvents"
                className={
                  activeLink === "Events" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Events")}
              >
                Events
              </Nav.Link>
              <Nav.Link
                href="/#Sponser"
                className={
                  activeLink === "Sponser"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Sponser")}
              >
                Sponsor
              </Nav.Link>
              <Nav.Link
                href="/#Team"
                className={
                  activeLink === "Team"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Team")}
              >
                Team
              </Nav.Link>
              <Nav.Link
                href="/signin"
                className={
                  activeLink === "Glimpse"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Glimpse")}
              >
                Glimpse
              </Nav.Link>
             
              {/* <Nav.Link
                href="/signup"
                className={
                  activeLink === "signup" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("/signup")}
              >
                SignUp
              </Nav.Link> */}
              {/* <Nav.Link
                href="/signup"
                className={
                  activeLink === "signup" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("/signup")}
              > */}
                {/* <FiShoppingCart /> */}
              {/* </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};