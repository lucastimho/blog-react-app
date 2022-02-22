import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import PostNew from "./PostNew";
import PostEdit from "./PostEdit";
import PostIndex from "./PostIndex";
import PostShow from "./PostShow";
import About from "./About";
import Login from "./Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts/new" element={<PostNew />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="posts/edit" element={<PostEdit />} />
          <Route path="posts/index" element={<PostIndex />} />
          <Route path="posts/show" element={<PostShow />} />
          <Route path="posts/index" element={<PostIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const myfirstelement = <h1>Hello React!</h1>;
function Hello() {
  return <h2>Hello World!</h2>;
}

ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(myfirstelement, document.getElementById("mydiv"));
ReactDOM.render(<Hello />, document.getElementById("root"));
