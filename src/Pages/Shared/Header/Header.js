import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth()

  return (
    <div className="mb-5 bg-primary text-white">
      <Navbar expand="lg ">
        <Container>
          <Navbar.Brand href="/">
            <img className="brand" src="https://image.freepik.com/free-vector/beach-logo-vectors_79530-15.jpg" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 text-white fw-bold"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} className="text-white" to="/home">
                Home
              </Nav.Link>
              {
                user?.email && <Nav.Link className="text-white" as={Link} to="/order">
                  My Order
                </Nav.Link>
              }
              {
                user?.email && <Nav.Link className="text-white" as={Link} to="/createNewEvent">
                  Create New Event
                </Nav.Link>
              }
              {
                (user?.email) && <Nav.Link className="text-white" as={Link} to="/management">
                  Managment
                </Nav.Link>
              }
            </Nav>
            <div className="">
            </div>

            {
              (user?.email) ? <Link to="/login">
                <button className="loginBtn ms-3" onClick={logOut}>Log out</button>
              </Link> : <Link to="/login">
                <button>Login</button>
              </Link>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
