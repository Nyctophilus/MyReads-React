import { useContext } from "react";
import BooksContext from "../../hooks/books-context";
import classes from "./DropDownModal.module.css";

const dropDownOptions = [
  { text: "Move to..." },
  { text: "Currently Reading" },
  { text: "Want To Read" },
  { text: "Read" },
  { text: "None" },
];

const DropDownModal = ({
  myShelf,
  id,
  toggleDropDownHandler,
  configSheleves,
}) => {
  // FIXDONE get context-shelf-update here!
  const { updateShelves } = useContext(BooksContext);

  const changeFormHandler = (e) => {
    const newShelf = e.target.value;

    updateShelves(id, newShelf);
    configSheleves(newShelf);
    toggleDropDownHandler(false);
  };

  return (
    <select
      className={classes.DropDownModal}
      value={myShelf}
      onChange={changeFormHandler}
      size={5}
    >
      {dropDownOptions.map(({ text }) => {
        const transformedText = `${text
          .charAt(0)
          .toLowerCase()}${text
          .slice(1)
          .replace(/ /g, "")}`;

        return (
          <option
            key={text}
            disabled={text === "Move to..."}
            value={transformedText}
          >
            {text}
          </option>
        );
      })}
    </select>
  );
};

export default DropDownModal;
