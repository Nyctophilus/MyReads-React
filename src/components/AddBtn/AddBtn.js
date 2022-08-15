import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";

const AddBtn = () => {
  const [isAddBtn, setIsAddBtn] = useState(false);

  const scrollDetectHandler = () => {
    if (window.scrollY > 50) setIsAddBtn(true);
    else setIsAddBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollDetectHandler);

    return () =>
      window.removeEventListener(
        "scroll",
        scrollDetectHandler
      );
  }, []);

  if (isAddBtn)
    return (
      <Link to="search">
        <Button svg={"add"} />
      </Link>
    );
};

export default AddBtn;
