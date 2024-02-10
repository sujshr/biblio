import React from "react";
import "./MainBody.css";
import BookList from "./BookList";
import { useState } from "react";
import searchIcon from "../assets/searchIcon.png";

function MainBody() {
  // state to take search input
  const [searchInput, setSearchInput] = useState("");
  // state for monitoring the loadin animation
  const [loaderDisplay, setLoaderDisplay] = useState({ display: "flex" });
  // function to update state along with search input
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // function to handle searchIcon click
  const handleClick = () => {
    var target = document.getElementById("discover");
    target.scrollIntoView({ top: 100, behavior: "smooth" });
  };

  // function to hide the loading animation on load
  const handleLoad = () => {
    setLoaderDisplay({ display: "none" });
  };

  return (
    <div id="mainBody">
      <div id="searchBar" className="flex">
        <input
          type="search"
          className="searchBar"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <div
          id="searchIconContainer"
          className="flex items-center justify-center"
        >
          <img src={searchIcon} alt="" id="searhIcon" onClick={handleClick} />
        </div>
      </div>

      <div id="welcomeDiv">
        <h1 id="discover" className="text-3xl font-bold">
          Welcome to Kalvium Books
        </h1>

        <h2 className="font-semibold text-xl">
          Best, yet the most patient teacher.
        </h2>
      </div>

      <div id="bookContainer">
        <h3 className="text-xl font-bold">Discover what you like</h3>

        <div
          id="loading"
          className="flex justify-center items-center"
          style={loaderDisplay}
        >
          <div className="spinner"></div>
        </div>

        <BookList searchInput={searchInput} setLoaderDisplay={handleLoad} />
      </div>
    </div>
  );
}

export default MainBody;
