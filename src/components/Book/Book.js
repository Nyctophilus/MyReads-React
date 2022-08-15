import Button from "../UI/Button/Button";
import classes from "./Book.module.css";
import DropDownModal from "../DropDownModal/DropDownModal";
import { useState } from "react";

const Book = ({
  title,
  imageLinks,
  authors,
  shelf,
  id,
}) => {
  const [dropDown, setDropDown] = useState(false);
  const [myShelf, setMyShelf] = useState(shelf);

  const toggleDropDownHandler = (v) => setDropDown(v);

  const configSheleves = (shel) => setMyShelf(shel);

  //   if(!shelf)

  return (
    <div className={classes.book}>
      <div className={classes["img-box"]}>
        {imageLinks?.thumbnail ? (
          <img src={imageLinks?.thumbnail} alt={title} />
        ) : (
          <span
            style={{
              height: "20vh",
              lineHeight: "20vh",
              textShadow: "#7e7b7b 6px 8px 10px",
            }}
          >
            No Preview Image
          </span>
        )}
        <Button
          {...{
            svg: "dropDown",
            onClick: () => toggleDropDownHandler(true),
          }}
        />

        {/* BUG close the modal on click-anywhere- ... may implement context for dropDownMenu */}
        {dropDown && (
          <DropDownModal
            {...{
              myShelf,
              id,
              toggleDropDownHandler,
              configSheleves,
            }}
          />
        )}
      </div>

      <h3>{title}</h3>
      {authors &&
        authors.map((aut) => <p key={aut}>{aut}</p>)}
    </div>
  );
};

export default Book;
