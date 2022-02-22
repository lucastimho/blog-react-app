import React from "react";
import ReactDOM from "react-dom";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {};

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
        <strong>Sucessfully Logged In!</strong>
        You are free to make posts now.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </>
    );
  }
};

const navBar = () => {
  return (
    <>
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Home
        </a>
      </div>
    </>
  );
};

export default Layout;

ReactDOM.render(loginAlert, document.getElementsByClassName("alert alert-success alert-dismissible fade show"));
ReactDOM.render(navBar, document.getElementsByClassName("navbar navbar-expand-lg navbar-light bg-light"));
