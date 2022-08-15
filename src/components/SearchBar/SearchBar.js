import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../../api/BooksAPI";
import Button from "../UI/Button/Button";
import classes from "./SearchBar.module.css";

const SearchBar = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");

  const searchHandler = (e) => {
    setQuery(e.target.value);

    getSearchResults(query);
  };
  const clearInputHandler = () => setQuery("");

  return (
    <div className={classes.SearchBar}>
      <Link to="/">
        <Button svg={"back"} />
      </Link>
      <input
        type="text"
        value={query}
        onChange={searchHandler}
        onBlur={clearInputHandler}
      />
    </div>
  );
};

export default SearchBar;
