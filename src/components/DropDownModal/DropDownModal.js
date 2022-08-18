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
  const { updateShelves } = useContext(BooksContext);

  const changeFormHandler = async (e) => {
    const inputShelf = e.target.value;

    updateShelves(id, inputShelf);

    toggleDropDownHandler(false);
  };

  let dropDownOptions = [
    { text: "Move to..." },
    { text: "Currently Reading" },
    { text: "Want To Read" },
    { text: "Read" },
    { text: "None" },
  ];

  return (
    <>
      <select
        className={classes.DropDownModal}
        value={shelf || "none"}
        onChange={changeFormHandler}
        size={5}
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
