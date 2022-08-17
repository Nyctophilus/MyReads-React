import { useContext, useEffect, lazy } from "react";
import Header from "../components/Header/Header";
import Shelf from "../components/Shelf/Shelf";
import BooksContext from "../hooks/books-context";

const AddBtn = lazy(() =>
  import("../components/AddBtn/AddBtn")
);

const Main = () => {
  const { allBooks, fetchAllBooksCategorized } =
    useContext(BooksContext);

  useEffect(() => {
    fetchAllBooksCategorized();
  }, [fetchAllBooksCategorized]);

  return (
    <>
      <Header />

      <div className="container">
        {allBooks.map((shelf) => (
          <Shelf key={shelf.heading} {...shelf} />
        ))}
      </div>

      <AddBtn />
    </>
  );
};

export default Main;
