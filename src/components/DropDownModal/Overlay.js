import classes from "./Overlay.module.css";

const Overlay = ({ toggleDropDownHandler }) => {
  const closeModalHandler = () =>
    toggleDropDownHandler(false);

  return (
    <div
      className={classes.Overlay}
      onClick={closeModalHandler}
    ></div>
  );
};

export default Overlay;
