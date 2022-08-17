import React, { useContext } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { search } from "../api/BooksAPI";
import Loading from "../components/Loading/Loading";
import SearchBar from "../components/SearchBar/SearchBar";
import Shelf from "../components/Shelf/Shelf";
import BooksContext from "../hooks/books-context";
import useScroll from "../hooks/use-scroll";

const Search = () => {
  const [searchBooks, setSearchBooks] = useState([]);

  const { allBooks } = useContext(BooksContext);
  console.log(allBooks);
  const [searchError, setSearchError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getSearchResults = useCallback((query) => {
    setLoading(true);
    if (query)
      search(query.trim(), 10).then((data) => {
        if (data.error) {
          setSearchBooks([]);
          setSearchError(true);
          setLoading(false);
        } else {
          setSearchError(false);
          setSearchBooks(data);
          setLoading(false);
        }
      });

    if (!query) {
      setSearchError(false);
      setSearchBooks([]);
      setLoading(false);
    }
  }, []);

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

  console.log(searchBooks);

  return (
    <>
      <SearchBar {...{ getSearchResults, isScrolled }} />

      <div
        className="container"
        style={{ marginBlock: "10rem 5rem" }}
      >
        {loading && <Loading />}

        {!searchError && !loading && (
          <Shelf {...{ books: searchBooks }} />
        )}

        {searchError && !loading && (
          <p style={{ textAlign: "center" }}>
            No Books Found! 😟
          </p>
        )}
      </div>
    </>
  );
};

export default Search;
