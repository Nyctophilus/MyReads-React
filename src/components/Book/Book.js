import Button from "../UI/Button/Button";
import classes from "./Book.module.css";
import DropDownModal from "../DropDownModal/DropDownModal";
import { useState } from "react";

const Book = ({
  title,
  imageLinks: { thumbnail },
  authors,
  shelf,
  id,
}) => {
  const [dropDown, setDropDown] = useState(false);
  const [myShelf, setMyShelf] = useState(shelf);

  const toggleDropDownHandler = (v) => setDropDown(v);

  const configSheleves = (shel) => setMyShelf(shel);

  return (
    <div className={classes.book}>
      <div className={classes["img-box"]}>
        <img src={thumbnail} alt={title} />
        <Button
          {...{
            svg: "dropDown",
            onClick: () => toggleDropDownHandler(true),
          }}
        />

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
      {authors.map((aut) => (
        <p key={aut}>{aut}</p>
      ))}
    </div>
  );
};

export default Book;
