import { useContext } from "react";
import BooksContext from "../../hooks/books-context";
import classes from "./DropDownModal.module.css";
import Overlay from "./Overlay";

const DropDownModal = ({
  shelf,
  id,
  toggleDropDownHandler,
}) => {
  // FIXDONE get context-shelf-update here!
  const { updateShelves, allBooks } =
    useContext(BooksContext);

  const changeFormHandler = async (e) => {
    const inputShelf = e.target.value;

    updateShelves(id, inputShelf);

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

  return (
    <>
      <select
        className={classes.DropDownModal}
        value={shelf}
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
