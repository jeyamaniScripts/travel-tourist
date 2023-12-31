import React from "react";

import {  Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import NoPage from "./pages/NoPage";
import PlaceRoute from "./pages/PlaceRoute";
import About from "./pages/About";


const App = () => {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="blogs" element={<Blogs/>} />
            <Route path="blogs/:id" element={<BlogDetails/>} />
            <Route path="best-places" element={<PlaceRoute/>} />
            <Route path="about" element={<About/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
     
    </>
  );
};

export default App;
