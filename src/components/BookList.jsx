import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./BookList.css";
import DescriptionDiv from "./DescriptionDiv";

// star icon component for ratings
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

// Book component for each book in the result
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
        <span className="flex items-center">
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
  // state to store fetched data
  const [data, setData] = useState([]);

  // state to store the books being displayed
  const [books, setBooks] = useState([]);

  // state to set the book in description div
  const [currentBook, setCurrentBook] = useState({});

  // state to monitor the visibility of blur bg cover and DescriptionDiv
  const [visibility, setVisibility] = useState("none");

  // state to monitor whether the data is fetched or not
  const [dataLoaded, setDataLoaded] = useState(false);

  // function to update the book in description div
  const handleSetBook = (index) => {
    setCurrentBook(books[index]);
    setVisibility("visible");
  };

  // function to remove the visibility of the DescriptionDiv and blur bg cover
  const removeVisibility = () => {
    setVisibility("none");
  };

  // fetching the data using useEffect
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

  // function to update the BookList according to the search input
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
      <div id="bgCover" className={visibility} onClick={removeVisibility}></div>
      <div id="bookList" className="flex justify-around">
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
