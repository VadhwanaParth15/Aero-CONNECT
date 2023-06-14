import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./nav.css";
import logo from "../../Assets/aero.png";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

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
        <Container className="justify-contant-center align-items-center">
          <Navbar.Brand href="/">
            <img className="logonav" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav p-3">
            {/* <span className="navbar-toggler-icon"></span> */}
            <HiOutlineMenuAlt1 />
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
               News & Expertise
              </Nav.Link>
              
              <NavDropdown  className="dropdown" title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#SEvents"
                className={
                  activeLink === "Events" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Events")}
              >
                Events
              </NavDropdown.Item>
              <NavDropdown.Item href="/#SEvents"
                className={
                  activeLink === "Events" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Events")}
              >
                Events
              </NavDropdown.Item>
              </NavDropdown>
                

              <NavDropdown title="Career & Education" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#SEvents"
                className={
                  activeLink === "Events" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Events")}
              >
                Events
              </NavDropdown.Item>
              <NavDropdown.Item href="/#SEvents"
                className={
                  activeLink === "Events" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Events")}
              >
                Events
              </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Get Involved" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#SEvents"
                className={
                  activeLink === "Events" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Events")}
              >
                Events
              </NavDropdown.Item>
              <NavDropdown.Item href="/#SEvents"
                className={
                  activeLink === "Events" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Events")}
              >
                Events
              </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="/#About"
                className={
                  activeLink === "About" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("About")}
              >
                About Us
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
                SignIn
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