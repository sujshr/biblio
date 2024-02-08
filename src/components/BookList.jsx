import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./BookList.css";
import DescriptionDiv from "./DescriptionDiv";
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
    <div
      className="book"
      onClick={() => {
        props.handleSetBook(props.index);
      }}
    >
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
  const [currentBook, setCurrentBook] = useState({});
  const [visibility, setVisibility] = useState("none");
  const [dataLoaded, setDataLoaded] = useState(false);
  const handleSetBook = (index) => {
    setCurrentBook(data[index]);
    setVisibility("visible");
  };

  const removeVisibility = () => {
    setVisibility("none");
  };

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setData(res.data.books);
        props.setLoaderDisplay();
        setDataLoaded(true);
        setCurrentBook(res.data.books[0]);
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
    <div id="booksContainer">
      <div id="bookList">
        {books.map((book, i) => {
          return (
            <Book key={i} book={book} index={i} handleSetBook={handleSetBook} />
          );
        })}
      </div>
      {dataLoaded && (
        <DescriptionDiv
          currentBook={currentBook}
          visibility={visibility}
          removeVisibility={removeVisibility}
        />
      )}
    </div>
  );
}

export default BookList;
export { Star };
