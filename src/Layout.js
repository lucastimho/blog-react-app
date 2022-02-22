import React from "react";
import ReactDOM from "react-dom";
import "./index.js";
import "./Layout.css";
// import { Outlet, Link } from "react-router-dom";

function isLoggedIn() {
  if (localStorage.getItem("jwt")) {
    return true;
  } else {
    return false;
  }
}

const loginAlert = () => {
  if (isLoggedIn()) {
    return (
      <>
        <div class="alert alert-success alert-dismissible fade show">
          <strong>Sucessfully Logged In!</strong>
          You are free to make posts now.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </>
    );
  }
};

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Home
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-toggler-icon"></div>
        </div>
      </nav>
    </>
  );
};

export default Layout;

ReactDOM.render(loginAlert, document.getElementById("alert"));
ReactDOM.render(Layout, document.getElementById("navbar"));
