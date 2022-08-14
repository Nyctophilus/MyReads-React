import Button from "../../UI/Button/Button";
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

  const clickDropDownHandler = (e) =>
    setDropDown((prev) => !prev);

  return (
    <div className={classes.book}>
      <div className={classes["img-box"]}>
        <img src={thumbnail} alt={title} />
        <Button
          {...{
            svg: "dropDown",
            onClick: clickDropDownHandler,
          }}
        />

        {/* FIXME Add Redux!!! */}
        {dropDown && <DropDownModal {...{ shelf, id }} />}
      </div>

      <h3>{title}</h3>
      {authors.map((aut) => (
        <p key={aut}>{aut}</p>
      ))}
    </div>
  );
};

export default Book;
