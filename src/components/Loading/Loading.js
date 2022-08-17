import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div>
      <div className={classes["sk-cube-grid"]}>
        <div
          className={`${classes["sk-cube"]} ${classes["sk-cube1"]}`}
        ></div>
        <div
          className={`${classes["sk-cube"]} ${classes["sk-cube2"]}`}
        ></div>
        <div
          className={`${classes["sk-cube"]} ${classes["sk-cube3"]}`}
        ></div>
        <div
          className={`${classes["sk-cube"]} ${classes["sk-cube4"]}`}
        ></div>
        <div
          className={`${classes["sk-cube"]} ${classes["sk-cube5"]}`}
        ></div>
        <div
          className={`${classes["sk-cube"]} ${classes["sk-cube6"]}`}
        ></div>
        <div
          className={`${classes["sk-cube"]} ${classes["sk-cube7"]}`}
        ></div>
        <div
          className={`${classes["sk-cube"]} ${classes["sk-cube8"]}`}
        ></div>
        <div
          className={`${classes["sk-cube"]} ${classes["sk-cube9"]}`}
        ></div>
      </div>
      <p className={classes.text}>Loading...</p>
    </div>
  );
};

export default Loading;
