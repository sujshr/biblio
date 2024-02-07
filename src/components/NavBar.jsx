import React from "react";
import "./NavBar.css";
import { Routes, Route, Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function RegisterButton() {
  return (
    <>
      <Link to="/register">
        <button className="navButton">Register</button>
      </Link>
    </>
  );
}

function HomeButton() {
  return (
    <Link to="/">
      <button className="navButton">Home</button>
    </Link>
  );
}

function NavBar() {
  return (
    <nav id="navBar">
      <Link to="/">
        <img src={Logo} alt="" id="logo" />
      </Link>

      <Routes>
        <Route path="/" element={<RegisterButton />} />
        <Route path="/register" element={<HomeButton />} />
      </Routes>
    </nav>
  );
}

export default NavBar;
