import React from "react";
import { useState } from "react";
import { search } from "../api/BooksAPI";
import SearchBar from "../components/SearchBar/SearchBar";
import Shelf from "../components/Shelf/Shelf";

const Search = () => {
  const [searchBooks, setSearchBooks] = useState([]);

  const getSearchResults = (query) =>
    search(query, 20).then((res) => {
      if (res) setSearchBooks(res);
    });

  return (
    <>
      <SearchBar {...{ getSearchResults }} />

      <Shelf {...{ books: searchBooks }} />
    </>
  );
};

export default Search;
