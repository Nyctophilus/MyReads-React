import Button from "../UI/Button/Button";
import classes from "./Book.module.css";
import DropDownModal from "../DropDownModal/DropDownModal";
import { useState } from "react";
import BookDetails from "./BookDetails";

const Book = ({
  title,
  imageLinks,
  authors,
  shelf,
  id,
  subtitle,
  publishedDate,
  publisher,
  language,
  description,
  categories,
}) => {
  const [dropDown, setDropDown] = useState(false);
  const [bookDetails, setBookDetails] = useState(false);

  const toggleDropDownHandler = (v) => setDropDown(v);

  const toggleBookDetails = (v) => setBookDetails(v);

  const imgContainer = imageLinks?.thumbnail ? (
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
  );

  return (
    <>
      <div
        className={classes.book}
        onClick={() => toggleBookDetails(true)}
      >
        <div className={classes["img-box"]}>
          {imgContainer}

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
                shelf,
                id,
                toggleDropDownHandler,
              }}
            />
          )}
        </div>

        <h3>{title}</h3>
        {authors &&
          authors.map((aut) => <p key={aut}>{aut}</p>)}
      </div>

      {bookDetails && (
        <BookDetails
          {...{
            title,
            imgContainer,
            authors,
            shelf,
            subtitle,
            publishedDate,
            publisher,
            language,
            description,
            categories,
            toggleBookDetails,
          }}
        />
      )}
    </>
  );
};

export default Book;
