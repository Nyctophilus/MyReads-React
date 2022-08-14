import classes from "./DropDownModal.module.css";
import Input from "./Input";

const DropDownModal = ({ shelf, id }) => {
  const dropDownOptions = [
    { id: id + "r1", text: "Currently Reading" },
    { id: id + "r2", text: "Want To Read" },
    { id: id + "r3", text: "Read" },
    { id: id + "r4", text: "None" },
  ];

  const changeFormHandler = () => console.log(`submit`);

  return (
    <form
      className={classes.DropDownModal}
      onChange={changeFormHandler}
    >
      <p>Move to...</p>
      {dropDownOptions.map((opt) => {
        return (
          <Input key={opt.id} {...opt} shelf={shelf} />
        );
      })}
    </form>
  );
};

export default DropDownModal;
