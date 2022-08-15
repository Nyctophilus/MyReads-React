import { useCallback } from "react";
import { createContext, useState } from "react";
import { getAll, update } from "../api/BooksAPI";

const BooksContext = createContext();

export const DdContextProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([]);

  const fetchAllBooks = useCallback(
    () =>
      getAll().then((fetchedBooks) =>
        setAllBooks([
          {
            heading: "Currently Reading",
            books: fetchedBooks.filter(
              (setOfBooks) =>
                setOfBooks.shelf === "currentlyReading"
            ),
          },
          {
            heading: "Want To Read",
            books: fetchedBooks.filter(
              (setOfBooks) =>
                setOfBooks.shelf === "wantToRead"
            ),
          },
          {
            heading: "Read",
            books: fetchedBooks.filter(
              (setOfBooks) => setOfBooks.shelf === "read"
            ),
          },
        ])
      ),
    []
  );

  const updateShelves = useCallback((id, shelf) => {
    update(id, shelf).then((adjustedShelves) =>
      setAllBooks((allBooks) => {
        const categorizeTheFuckEm = (type) => {
          let Selectedbooks = [];

          allBooks.forEach((b) =>
            b.books.forEach((book) =>
              adjustedShelves[`${type}`].forEach((id) => {
                if (id === book.id)
                  Selectedbooks.push(book);
              })
            )
          );

          return Selectedbooks;
        };

        return [
          {
            heading: "Currently Reading",
            books: categorizeTheFuckEm("currentlyReading"),
          },
          {
            heading: "Want To Read",
            books: categorizeTheFuckEm("wantToRead"),
          },
          {
            heading: "Read",
            books: categorizeTheFuckEm("read"),
          },
        ];
      })
    );
  }, []);

  return (
    <BooksContext.Provider
      value={{ allBooks, fetchAllBooks, updateShelves }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
