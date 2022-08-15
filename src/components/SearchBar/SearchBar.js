import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import classes from "./SearchBar.module.css";

const SearchBar = ({ getSearchResults, isScrolled }) => {
  const [query, setQuery] = useState("");

  const searchHandler = (e) => {
    setQuery(e.target.value);

    getSearchResults(query);
  };
  const clearInputHandler = () => setQuery("");

  const searchBarClasses = isScrolled
    ? `${classes.SearchBar} ${classes["bar-scrolled"]}`
    : classes.SearchBar;

  return (
    <div className={searchBarClasses}>
      <Link to="/">
        <Button svg={"back"} />
      </Link>
      <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        value={query}
        onChange={searchHandler}
        onBlur={clearInputHandler}
      />
    </div>
  );
};

export default SearchBar;
