import React from "react";
import Title from "../../UI/Title/Title";
import Book from "../Book/Book";
import classes from "./Shelf.module.css";

const Shelf = ({ heading, books }) => {
  return (
    <section className={classes.section}>
      <Title>{heading}</Title>

      <div className={classes.books}>
        {books.map((b) => (
          <Book key={b.id} {...b} />
        ))}
      </div>
    </section>
  );
};

export default Shelf;
