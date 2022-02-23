import React, { Component } from "react";
import ReactDOM from "react-dom";
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
      {
        (isLoggedIn = true && (
          <>
            <strong>Successfully Logged In!</strong>
            You are free to make posts now.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </>
        ))
      }
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Home
        </a>
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
              <a className="nav-link active" aria-current="page" href="/posts">
                All Posts
              </a>
            </li>
            {isLoggedIn ? (
              <li className="nav-item" v-if="isLoggedIn()">
                <a className="nav-link" href="/logout">
                  Logout
                </a>
              </li>
            ) : (
              <li className="nav-item" v-if="!isLoggedIn()">
                <a className="nav-link" href="/login">
                  Login
                </a>
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
                    <a className="dropdown-item" href="/posts/new">
                      Create Post
                    </a>
                  </li>
                )}
                <li>
                  <a className="dropdown-item" href="/about">
                    About
                  </a>
                </li>
                {!isLoggedIn && (
                  <div>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/signup">
                        Sign Up
                      </a>
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
