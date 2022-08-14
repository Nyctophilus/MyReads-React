import { useEffect, useState } from "react";
import { getAll } from "../api/BooksAPI";
import Header from "../components/Header/Header";
import Shelf from "../components/Shelf/Shelf";
import Button from "../UI/Button/Button";

const Main = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [isTopBtn, setIsTopBtn] = useState(false);

  const shelves = [
    {
      heading: "Currently Reading",
      books: allBooks.filter(
        (setOfBooks) =>
          setOfBooks.shelf === "currentlyReading"
      ),
    },
    {
      heading: "Want To Read",
      books: allBooks.filter(
        (setOfBooks) => setOfBooks.shelf === "wantToRead"
      ),
    },
    {
      heading: "Read",
      books: allBooks.filter(
        (setOfBooks) => setOfBooks.shelf === "read"
      ),
    },
  ];

  useEffect(() => {
    (async () => {
      const data = await getAll();
      console.log(data);
      setAllBooks(data);
    })();
  }, []);

  const scrollDetectHandler = () => {
    if (window.scrollY > 200) setIsTopBtn(true);
    else setIsTopBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollDetectHandler);

    return () =>
      window.removeEventListener(
        "scroll",
        scrollDetectHandler
      );
  }, []);
  const toTopHandler = () => window.scrollTo(0, 0);

  return (
    <>
      <Header />

      <div className="container">
        {shelves.map((shelf) => (
          <Shelf key={shelf.heading} {...shelf} />
        ))}
      </div>

      {isTopBtn && (
        <Button
          {...{ svg: "add", onClick: toTopHandler }}
        />
      )}
    </>
  );
};

export default Main;
