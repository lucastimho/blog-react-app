import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
// import "./index.js";
import "./Layout.css";
// import { Outlet, Link } from "react-router-dom";

function isLoggedIn() {
  if (localStorage.getItem("jwt")) {
    return true;
  } else {
    return false;
  }
}

const LoginAlert = () => {
  return (
    <div className="alert alert-success alert-dismissible fade show" role="alert">
      {isLoggedIn && (
        <>
          <strong>Successfully Logged In!</strong>
          You are free to make posts now.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </>
      )}
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/posts">
                All Posts
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            )}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {isLoggedIn && (
                  <li>
                    <NavLink className="dropdown-item" to="/posts/new">
                      Create Post
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink className="dropdown-item" to="/about">
                    About
                  </NavLink>
                </li>
                {!isLoggedIn && (
                  <div>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/signup">
                        Sign Up
                      </NavLink>
                    </li>
                  </div>
                )}
              </ul>
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <a className="nav-link disabled">Welcome Guest</a>
              </li>
            )}
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

class Layout extends Component {
  render() {
    return (
      <>
        <LoginAlert />
        <NavBar />
      </>
    );
  }
}

export default Layout;

ReactDOM.render(<Layout />, document.getElementById("navbar"));
