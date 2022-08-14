import { useRef } from "react";
import { useEffect, useState } from "react";

const Input = ({ id, text, shelf }) => {
  const [active, setActive] = useState(false);
  const radContainer = useRef();

  useEffect(() => {
    if (
      `${text.charAt(0).toLowerCase()}${text
        .slice(1)
        .replace(/ /g, "")}` === shelf
    )
      radContainer.current.checked = true;
  }, [text, shelf]);

  const radioChangeHandler = (e) => {
    console.log(e.target.value);
    setActive(true);
  };

  return (
    <div>
      <input
        type="radio"
        name="rad"
        id={id}
        value={active}
        onChange={radioChangeHandler}
        ref={radContainer}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default Input;
