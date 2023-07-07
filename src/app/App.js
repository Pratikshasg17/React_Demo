import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../component/Login";
import Header from "../component/Header";
import Home from "../component/Home";
import About from "../component/About";
import SignUp from "../component/Signup";
import Contact from "../component/Contact";

import "./App.css";
import Lifecycle from "../component/Lifecycle";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/life" element={<Lifecycle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
