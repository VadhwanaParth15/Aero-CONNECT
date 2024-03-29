import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./nav.css";
import logo from "../../Assets/WEB LOGO.png";

// import { HashLink } from "react-router-hash-link";
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
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img className="logonav" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            className="toggle-border"
            aria-controls="basic-navbar-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-item-center justify-content-center">
              <Nav.Link
                href="/#service"
                className={
                  activeLink === "service"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Service
              </Nav.Link>
              <Nav.Link
                href="/News"
                target="_blank"
                className={
                  activeLink === "News" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("News")}
              >
                News & Expertise
              </Nav.Link>

              <Nav.Link
                href="/#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("About")}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="/login"
                className={
                  activeLink === "login"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("login")}
              >
                LogIn
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
