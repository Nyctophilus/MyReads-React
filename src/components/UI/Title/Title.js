import classes from "./Title.module.css";

const Title = ({ children }) => {
  return <div className={classes.title}>{children}</div>;
};

export default Title;
