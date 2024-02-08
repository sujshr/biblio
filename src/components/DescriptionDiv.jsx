import React, { useState } from "react";
import { Star } from "./BookList.jsx";
import "./DescriptionDiv.css";
function DescriptionDiv(props) {
  const currentBook = props.currentBook;
  console.log(currentBook);
  return (
    <div id="descriptionDiv" className={props.visibility}>
      <span id="crossButton" onClick={props.removeVisibility}>
        X
      </span>

      <div id="container">
        <div className="generalInfo">
          <img
            src={currentBook.imageLinks.thumbnail}
            className="bookImg"
            alt=""
          />

          <div className="infoContainer">
            <h3>{currentBook.title}</h3>
            {currentBook.authors.map((author, i) => {
              return (
                <p key={i} className="authorName">
                  {author}
                </p>
              );
            })}
            <div className="info">
              <span className="rating">
                {currentBook.averageRating ? currentBook.averageRating : 3.8}
                <Star />
              </span>
              <span className="free">Free</span>
            </div>
          </div>
        </div>

        <p className="description">{currentBook.description}</p>
      </div>
    </div>
  );
}

export default DescriptionDiv;
