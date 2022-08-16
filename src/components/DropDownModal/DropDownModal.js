import { useContext } from "react";
import BooksContext from "../../hooks/books-context";
import classes from "./DropDownModal.module.css";
import Overlay from "./Overlay";

const DropDownModal = ({
  myShelf,
  id,
  toggleDropDownHandler,
  configSheleves,
}) => {
  // FIXDONE get context-shelf-update here!
  const { updateShelves, allBooks } =
    useContext(BooksContext);

  const changeFormHandler = (e) => {
    const newShelf = e.target.value;

    updateShelves(id, newShelf);
    configSheleves(newShelf);
    toggleDropDownHandler(false);
  };

  let isMine = false;
  allBooks.forEach((cat) =>
    cat.books.forEach((book) => {
      if (id === book.id) isMine = true;
    })
  );

  let dropDownOptions = [
    { text: "Move to..." },
    { text: "Currently Reading" },
    { text: "Want To Read" },
    { text: "Read" },
    isMine && { text: "None" },
  ];

  console.log(myShelf);

  return (
    <>
      <select
        className={classes.DropDownModal}
        value={myShelf}
        onChange={changeFormHandler}
        size={isMine ? 5 : 4}
      >
        {dropDownOptions.map(({ text }) => {
          const transformedText = `${text
            ?.charAt(0)
            .toLowerCase()}${text
            ?.slice(1)
            .replace(/ /g, "")}`;

          return (
            <option
              key={text || "someShitId"}
              disabled={text === "Move to..."}
              value={transformedText}
            >
              {text}
            </option>
          );
        })}
      </select>

      <Overlay {...{ toggleDropDownHandler }} />
    </>
  );
};

export default DropDownModal;
