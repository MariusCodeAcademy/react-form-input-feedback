import { useEffect, useState } from "react";
const InputDebounce = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setNameIsTouched(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Validity Check");
      if (!nameIsTouched) return;
      setNameIsValid(enteredName.trim().length >= 3);
    }, 700);

    return () => {
      console.log("CLEAN UP");
      clearTimeout(timer);
    };
  }, [enteredName, nameIsTouched]);

  return (
    <form>
      <div className={"form-control " + (nameIsValid ? "" : "invalid")}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
        />
      </div>
      <div className="form-actions">
        <button disabled={!nameIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default InputDebounce;
