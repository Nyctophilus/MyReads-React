import { useEffect, useState } from "react";
import classes from "./BookDetails.module.css";

const BookDetails = ({
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
}) => {
  const [text, setText] = useState(
    `${description.substring(0, 200)}...`
  );
  const [isReadMore, setIsReadMore] = useState(true);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
  }, []);

  const closeModal = () => {
    setBookDetails(false);
    document.body.style.overflowY = "initial";
  };

  const readMore = () => {
    setIsReadMore((prev) => !prev);

    if (isReadMore) setText(description);

    if (!isReadMore)
      setText(`${description.substring(0, 200)}...`);
  };

  return (
    <>
      <div className={classes.modal}>
        <button
          className={`${classes.readMore} ${classes.btn}`}
          onClick={closeModal}
        >
          x
        </button>

        {imgContainer}

        {title && <h1>{title}</h1>}

        {subtitle && <h4>{subtitle}</h4>}

        {publisher && (
          <div>
            <span>publisher: </span>
            <span>{publisher}</span>
          </div>
        )}

        {language && (
          <div>
            <span>Avaliable Languages: </span>
            <span>{language}</span>
          </div>
        )}

        {description && (
          <div>
            <span>Book Description: </span>
            <span>{text}</span>

            <button
              onClick={readMore}
              className={classes.readMore}
            >
              {isReadMore ? "read more" : "read less"}
            </button>
          </div>
        )}

        {categories && (
          <div>
            <span>Book Categories: </span>
            <span>{categories}</span>
          </div>
        )}

        {shelf && (
          <div>
            <span>The Book is Currently On Shelf: </span>
            <span>{`${shelf.charAt(0).toUpperCase()}${shelf
              .slice(1)
              .split(/(?=[A-Z])/)
              .join(" ")}`}</span>
          </div>
        )}

        {authors && (
          <h6>
            <span>authors: </span>
            {authors.join(" | ")}
          </h6>
        )}

        {publishedDate && (
          <h6>
            <span>Published Date: </span>
            {publishedDate}
          </h6>
        )}
      </div>

      <div
        className={classes.overlay}
        onClick={closeModal}
      ></div>
    </>
  );
};

export default BookDetails;
