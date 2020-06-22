import React from "react";
import { Link } from "react-router-dom";
// import { Container, MyNavbar } from "./HeaderStyle";
import { Container, MyNavbar } from "./HeaderStyle";
import { Navbar, Nav } from "react-bootstrap";
import HeaderLogo from "./HeaderLogo/HeaderLogo.js";

//Theme js

const Header = () => {
  return (
    <div>
      <Container>
        <MyNavbar>
          <Navbar collapseOnSelect expand="lg" className="color-nav">
            <Navbar.Brand href="#home">
              <HeaderLogo />
            </Navbar.Brand>
            <h1 className="mobile-heading">INPS CLASSES</h1>

            {/* <h1>INPS Classes</h1> */}
            <Navbar.Toggle
              className="bg-orange "
              aria-controls="responsive-navbar-nav"
            >
              <i className="fa fa-bars fa-7x white" aria-hidden="true"></i>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#Home" className="nav_link">
                  Home
                </Nav.Link>
                <Nav.Link href="#Subject Covered" className="nav_link ">
                  Subjects Covered
                </Nav.Link>
                <Nav.Link href="#Last Year Paper" className="nav_link">
                  Last Year Papers
                </Nav.Link>
                <Nav.Link href="#Online Classes" className="nav_link">
                  Online Classes
                </Nav.Link>
                <Nav.Link href="#Video Lectures" className="nav_link">
                  Video Lectures
                </Nav.Link>
                <Nav.Link href="#Mock Tests" className="nav_link">
                  Mock Tests
                </Nav.Link>
                <Nav.Link href="#Test Series" className="nav_link">
                  Test Series
                </Nav.Link>
                <Nav.Link href="#Universities" className="nav_link">
                  Universities
                </Nav.Link>
                <Nav.Link href="#Notifications" className="nav_link">
                  Notifications
                </Nav.Link>
                <Nav.Link href="#Blogs" className="nav_link">
                  Blogs
                </Nav.Link>
                <Nav.Link href="#About Us" className="nav_link">
                  About Us
                </Nav.Link>
                <Nav.Link href="#Login" className="nav_link">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </MyNavbar>
      </Container>
    </div>
  );
};
export default Header;
