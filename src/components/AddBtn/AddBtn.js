import { Link } from "react-router-dom";
import useScroll from "../../hooks/use-scroll";
import Button from "../UI/Button/Button";

const AddBtn = () => {
  if (useScroll())
    return (
      <Link to="search">
        <Button svg={"add"} />
      </Link>
    );
};

export default AddBtn;
