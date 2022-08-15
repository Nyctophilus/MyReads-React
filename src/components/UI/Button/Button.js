import { ReactComponent as ArrowDropDown } from "../../../icons/arrow-drop-down.svg";
import { ReactComponent as Add } from "../../../icons/add.svg";
import { ReactComponent as ArrowBack } from "../../../icons/arrow-back.svg";
import classes from "./Button.module.css";

const Button = ({ svg, onClick }) => {
  return (
    <button
      className={`${classes.Button} ${classes[`${svg}`]}`}
      onClick={onClick}
    >
      {svg === "dropDown" && <ArrowDropDown />}

      {/^add/.test(svg) && <Add />}

      {svg === "back" && <ArrowBack />}
    </button>
  );
};

export default Button;
