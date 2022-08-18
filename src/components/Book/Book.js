import { useState, lazy } from "react";
import Button from "../UI/Button/Button";
import classes from "./Book.module.css";
import ProtoTypes from "prop-types";

const DropDownModal = lazy(() =>
  import("../DropDownModal/DropDownModal")
);
const BookDetails = lazy(() => import("./BookDetails"));

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

  const imgContainer = imageLinks?.thumbnail ? (
    <img
      src={imageLinks?.thumbnail}
      alt={title}
      onClick={() => setBookDetails(true)}
    />
  ) : (
    <span
      style={{
        height: "20vh",
        lineHeight: "20vh",
        textShadow: "#7e7b7b 6px 8px 10px",
      }}
      onClick={() => setBookDetails(true)}
    >
      No Preview Image
    </span>
  );

  return (
    <>
      <div className={classes.book}>
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
            setBookDetails,
          }}
        />
      )}
    </>
  );
};

Book.propTypes = {
  title: ProtoTypes.string.isRequired,
  imageLinks: ProtoTypes.object,
  authors: ProtoTypes.array,
  shelf: ProtoTypes.string,
  id: ProtoTypes.string.isRequired,
  subtitle: ProtoTypes.string,
  publishedDate: ProtoTypes.string,
  publisher: ProtoTypes.string,
  language: ProtoTypes.string,
  description: ProtoTypes.string,
  categories: ProtoTypes.array,
};

export default Book;
