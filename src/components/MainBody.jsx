import React from "react";
import "./MainBody.css";
import BookList from "./BookList";
import { useState } from "react";
import searchIcon from "../assets/searchIcon.png";

function MainBody() {
  const [searchInput, setSearchInput] = useState("");
  const [loaderDisplay, setLoaderDisplay] = useState({ display: "flex" });
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = () => {
    var target = document.getElementById("discover");
    target.scrollIntoView({ top: 100, behavior: "smooth" });
  };

  const handleLoad = () => {
    setLoaderDisplay({ display: "none" });
  };

  return (
    <div id="mainBody">
      <div id="searchBar">
        <input
          type="search"
          className="searchBar"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <div id="searchIconContainer">
          <img src={searchIcon} alt="" id="searhIcon" onClick={handleClick} />
        </div>
      </div>

      <div id="welcomeDiv">
        <h1 id="discover">Welcome to Biblio</h1>

        <h2>Best, yet the most patient teacher.</h2>
      </div>
      <div id="bookContainer">
        <h3>Discover what you like</h3>
        <div id="loading" style={loaderDisplay}>
          <div className="spinner"></div>
        </div>
        <BookList searchInput={searchInput} setLoaderDisplay={handleLoad} />
      </div>
    </div>
  );
}

export default MainBody;
