import { useCallback } from "react";
import { createContext, useState } from "react";
import { getAll, update } from "../api/BooksAPI";

const BooksContext = createContext();

export const DdContextProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([]);

  const fetchAllBooksCategorized = useCallback(() => {
    getAll().then((fetchedBooks) => {
      const categorizedFetchedBooks = [
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
      ];
      setAllBooks(categorizedFetchedBooks);

      localStorage.setItem(
        "my-books",
        JSON.stringify(categorizedFetchedBooks)
      );
    });
  }, []);

  const updateShelves = useCallback((Bid, updatedShelf) => {
    update(Bid, updatedShelf).then((adjustedShelves) => {
      setAllBooks((allBooks) => {
        const categorizeTheFuckEm = (type) => {
          let Selectedbooks = [];

          allBooks.forEach((b) =>
            b.books.forEach((book) => {
              if (Bid === book.id)
                book.shelf = updatedShelf;

              adjustedShelves[`${type}`].forEach((id) => {
                if (id === book.id)
                  Selectedbooks.push(book);
              });
            })
          );

          return Selectedbooks;
        };

        const categorizedUpdatedBooks = [
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

        localStorage.setItem(
          "my-books",
          JSON.stringify(categorizedUpdatedBooks)
        );

        return categorizedUpdatedBooks;
      });
    });
  }, []);

  return (
    <BooksContext.Provider
      value={{
        allBooks,
        fetchAllBooksCategorized,
        updateShelves,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
