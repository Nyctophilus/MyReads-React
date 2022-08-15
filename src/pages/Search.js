import React, { useContext } from "react";
import { useState } from "react";
import { search } from "../api/BooksAPI";
import SearchBar from "../components/SearchBar/SearchBar";
import Shelf from "../components/Shelf/Shelf";
import BooksContext from "../hooks/books-context";
import useScroll from "../hooks/use-scroll";

const Search = () => {
  const [searchBooks, setSearchBooks] = useState([]);
  const { allBooks } = useContext(BooksContext);

  const getSearchResults = (query) => {
    if (query)
      search(query, 10).then((data) => {
        if (data.error) console.log(`error`);
        else setSearchBooks(data);
      });
  };

  allBooks.forEach((cat) =>
    cat.books.forEach((book) => {
      searchBooks.forEach((sBk) => {
        if (book.id === sBk.id) {
          sBk.shelf = book.shelf;
          console.log(sBk);
        }
      });
    })
  );

  const isScrolled = useScroll();

  return (
    <>
      <SearchBar {...{ getSearchResults, isScrolled }} />

      <div
        className="container"
        style={{ marginBlock: "10rem 5rem" }}
      >
        <Shelf {...{ books: searchBooks }} />
      </div>
    </>
  );
};

export default Search;
