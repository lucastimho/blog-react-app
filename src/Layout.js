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
      {isLoggedIn = true &&
      <>
        <strong>Successfully Logged In!</strong>
        You are free to make posts now.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </>
      }
    </div>
  )
}

class Layout extends Component {
  render ()
}

export default Layout;

ReactDOM.render(<Layout />, document.getElementById("navbar"));
