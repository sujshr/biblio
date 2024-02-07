import React from "react";
import "./MainBody.css";
import BookList from "./BookList";
import { useState } from "react";
function MainBody() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
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
          <img src="./src/assets/searchIcon.png" alt="" id="searhIcon" />
        </div>
      </div>

      <div id="welcomeDiv">
        <h1>Welcome to Biblio</h1>

        <h2>Best, yet the most patient teacher.</h2>
      </div>

      <div id="bookContainer">
        <h3>Discover what you like</h3>
        <BookList searchInput={searchInput} />
      </div>
    </div>
  );
}

export default MainBody;
