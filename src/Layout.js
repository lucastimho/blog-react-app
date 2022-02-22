import React from "react";
import ReactDOM from "react-dom";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {};

const isLoggedIn = () => {
  if (localStorage.getItem("jwt")) {
    return true;
  } else {
    return false;
  }
};

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

export default Layout;

ReactDOM.render(loginAlert, document.getElementsByClassName("alert alert-success alert-dismissible fade show"));
