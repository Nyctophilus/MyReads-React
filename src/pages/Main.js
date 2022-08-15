import { useContext } from "react";
import { useEffect } from "react";
import AddBtn from "../components/AddBtn/AddBtn";
import Header from "../components/Header/Header";
import Shelf from "../components/Shelf/Shelf";
import BooksContext from "../hooks/books-context";

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
