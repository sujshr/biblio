import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="gold"
      stroke="gold"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function Book(props) {
  return (
    <div className="book">
      <img src={props.book.imageLinks.thumbnail} className="bookImg" alt="" />
      <p className="bookName">{props.book.title}</p>
      <div className="info">
        <span className="rating">
          {props.book.averageRating ? props.book.averageRating : 3.8}
          <Star />
        </span>
        <span className="free">Free</span>
      </div>
    </div>
  );
}

function BookList(props) {
  let searchInput = props.searchInput;
  const [data, setData] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setData(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!searchInput) {
      setBooks(data);
    } else {
      const searchResult = data.filter((book) =>
        book.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setBooks(searchResult);
    }
  }, [props.searchInput, data]);

  return (
    <div id="bookList">
      {books.map((book, i) => {
        return <Book key={i} book={book} />;
      })}
    </div>
  );
}

export default BookList;
